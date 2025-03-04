import { ErrorCode } from "./code.js";

export const ErrorMessages: { [key in ErrorCode]: string } = {
  [ErrorCode.NOT_FOUND]: "Not Found",
};
