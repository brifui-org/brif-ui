import { EXCEPTION_CODE } from "./exceptions";
import { logger } from "./logger";

export const defaultExeceptionHandler = (error: Error) => {
  switch (error.message) {
    case EXCEPTION_CODE.CODEGEN_FAILED:
      logger.error("Failed to run codegen command");
      break;
    case EXCEPTION_CODE.CODEGEN_TRANSPILE_FAILED:
      logger.error("Failed to transpile styled to CJS");
      break;
  }

  throw error;
};
