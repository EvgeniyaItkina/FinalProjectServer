import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import { createStream } from 'rotating-file-stream';
import moment from 'moment';
import { Application } from 'express';

// Check if the log directory exists, if not, create it
const logDirectory = path.join(process.cwd(), 'logges/log');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory, { recursive: true });

// Create a write stream for all access logs
export const accessLogStream = createStream('access.log', {
  interval: '1d', // Rotate daily
  path: logDirectory
});

// Create a rotating write stream for error logs based on date
export const errorLogStream = createStream(() => {
  return `${moment().format('YYYY_MM_DD')}-errors.log`;
}, {
  interval: '1d', // Rotate daily
  path: logDirectory
});

// custom format `morgan`
morgan.format('custom', (tokens, req, res) => {
  return [
    `Entry Time: ${moment().format('DD/MM/YYYY HH:mm:ss')}`,
    `Method: ${tokens.method(req, res)}`,
    `URL: ${tokens.url(req, res)}`,
    `Response Time: ${tokens['response-time'](req, res)} ms`,
    `Status: ${tokens.status(req, res)}`
  ].join('\n');
});

// Export the setupLogging function that applies the logging middleware to the app

export const setupLogging = (app :Application) => {
  // Log all requests to console and access log file
  app.use(morgan('custom', { stream: accessLogStream }));

  // Log errors (status >= 400) to a separate file with date
  app.use(morgan('custom', {
    stream: errorLogStream,
    skip: (req, res) => res.statusCode < 400
  }));
};