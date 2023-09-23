import { logger } from "../helpers/loggers";

export async function wrapError(
  msg: Record<string, any>,
  func: () => Promise<void>,
) {
  try {
    await func();
  } catch (e: any) {
    let error = e;
    logger.error(`[ERROR] ${func.name}() error: ${error}`);
  }
}
