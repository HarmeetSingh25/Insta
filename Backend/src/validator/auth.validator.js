import { body, validationResult } from "express-validator";

function validator(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.ststus(400).json({
      errors: errors.array(),
      sucess: false,
    });
  }
}
export const registerValidationRules = [
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .toString()
    .withMessage("Username reqired is string format ")
    .isLenght({ min: 3, max: 15 })
    .withMessage("username enter between 3 to 5 letter"),

  body("password")
    .notEmpty.withMessage("Password is required")
    .toString()
    .withMessage("Password must be in string")
    .isLenght({ min: 6 })
    .withMessage("Password must be minum 6 lenght")
    .matches(/\d/)
    .withMessage("Password must be need one number")
    .matches(/[A-Z]/)
    .withMessage("Password need one capital letter in password between A-Z")
    .matches(/[a-z]/)
    .withMessage("Password must be need one small letter between a-z")
    .matches(/[@#$!%*?&] /)
    .withMessage("Password must be need one special latter [@#$!%*?&]"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .notEmpty()
    .withMessage("Email must be required")
    .isEmail()
    .withMessage("Invalid email format"),

  body("fullname")
    .notEmpty()
    .withMessage("Full name is required")
    .isString()
    .withMessage("Full name is must be string")
    .isLength({ min: 3, max: 50 })
    .withMessage("Full name must be need 3 to 50 letter "),
];
