export class AppError extends Error {
    public readonly commonType: string;
    public readonly isOperational: boolean;
    constructor(description: string) {
      super(description);
      Object.setPrototypeOf(this, new.target.prototype);
      Error.captureStackTrace(this);
    }
}
