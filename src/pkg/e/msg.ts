import { ErrorCode } from "@/pkg/e/code";

export const ErrorMessages: { [key in ErrorCode]: string } = {
  [ErrorCode.NOT_FOUND]: "Not Found",
};
