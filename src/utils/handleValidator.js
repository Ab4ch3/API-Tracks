import { validationResult } from "express-validator";

const validateResults = (req, res, next) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return next();
  }

  res.status(403);
  res.send({ errors: result.array() });
};

export default validateResults;
