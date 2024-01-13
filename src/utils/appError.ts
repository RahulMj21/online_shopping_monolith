class AppError extends Error {
  name: string;
  statusCode: number;
  description: string;
  isOperational: boolean;
  errorStack: any;
  loggingErrorResponse: any;

  constructor(
    name: string,
    statusCode: number,
    description: string,
    isOperational: boolean,
    errorStack: any,
    loggingErrorResponse: any,
  ) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    this.description = description;
    this.isOperational = isOperational;
    this.errorStack = errorStack;
    this.loggingErrorResponse = loggingErrorResponse;
    Error.captureStackTrace(this);
  }
}
