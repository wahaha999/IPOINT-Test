import { checkSchema, validationResult, Schema } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const contactValidationSchema:Schema = {
  name: {
    notEmpty: {
      errorMessage: 'Name is required',
    },
    isLength: {
      errorMessage: 'Name should be between 2 and 50 characters',
      options: { min: 2, max: 50 },
    },
  },
  email: {
    notEmpty: {
      errorMessage: 'Email is required',
    },
    isEmail: {
      errorMessage: 'Invalid email format',
    },
  },
  phone: {
    notEmpty: {
      errorMessage: 'Phone Number is required',
    },
    matches: {
      options: [/^\d{3}-\d{3}-\d{4}$/],
      errorMessage: 'Invalid phone number format (xxx-xxx-xxxx)'
    }
  },
};

export const validateContactDetails = [
  ...checkSchema(contactValidationSchema),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).json({
        success: false, 
        errors: errors.array()
      });
    }
    next();
  }
];
