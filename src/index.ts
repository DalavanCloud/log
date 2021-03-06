import chalk from 'chalk';
import loglevel, { MethodFactory } from 'loglevelnext';
import {v4 as uuid} from 'uuid';
import { Colors, Logger, Options, Prefix } from '../types';

import { StdErrorFactory } from './StdErrorFactory';

const enum LogLevel {
  trace = 'trace',
  debug = 'debug',
  info = 'info',
  warn = 'warn',
  error = 'error'
}

const colors: Colors = {
  trace: chalk`{cyan ⓡ} `,
  debug: chalk`{magenta ⓡ  debug:}`,
  info: chalk`{blue ⓡ} `,
  warn: chalk`{yellow ⓡ} `,
  error: chalk`{red ⓡ} `,
  pass: chalk`{green ⓡ} `,
  fail: chalk`{red ⓡ} `
};

const defaults: Options = {
  level: LogLevel.info,
  timestamp: false,
  stderr: ['info', 'warn', 'error', 'pass', 'fail']
};

export function logger(opts?: Options): Logger {
  const unique = { id: uuid() };
  const options: Options = { ...defaults, ...unique, ...opts };

  const prefix: Prefix = {
    level: ({ level }: { level: string }) => colors[level],
    template: `{{level}} ${options.preface || ''}`
  };

  if (options.timestamp) {
    prefix.template = `[{{time}}] ${prefix.template}`;
  }

  if (!options.name) {
    options.name = options.id;
  }

  const log = loglevel.create(options);
  const factory = new StdErrorFactory(log, prefix, options.stderr);

  log.factory = <MethodFactory>factory;

  return <Logger>log;
}

export function deleteLogger(id: string) {
  delete loglevel.loggers[id];
}

export const factories = loglevel.factories;

export default logger;
