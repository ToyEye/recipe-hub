import { BaseError } from '../../../../utils/errors/base-error';
import { ErrorCode } from '../../../../utils/errors/error-code';

export class RecipesNotFound extends BaseError {
  code: ErrorCode = 'BAD_REQUEST';

  constructor(message = 'User name not created') {
    super(message);
  }
}
