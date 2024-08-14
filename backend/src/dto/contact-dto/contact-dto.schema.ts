import Joi from "joi"
import { RegexPatterns } from "../../constants/regex-patterns"

export default {
  add: Joi.object({
    firstName: Joi.string().pattern(RegexPatterns.NAME).required(),
    lastName: Joi.string().pattern(RegexPatterns.NAME).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    age: Joi.number().min(1).max(100).required(),
  }),
}
