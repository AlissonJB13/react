const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];

  errors.array().map((err) => extractedErrors.push(err.msg));

  //status 422 significa alguma requisição não bem recebida
  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = validate;