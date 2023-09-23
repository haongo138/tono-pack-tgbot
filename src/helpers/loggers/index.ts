import pino, { LoggerOptions } from "pino";

const options: LoggerOptions = {
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      levelFirst: true,
    },
  },
};

export const logger = pino(options, process.stdout);
