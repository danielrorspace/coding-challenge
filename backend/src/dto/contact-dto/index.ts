import { NextFunction, Request, Response } from "express"
import { validateRequestDto } from "../../utils/dto"
import { ResponseLoginUser } from "./types"
import contactDtoSchema from "./contact-dto.schema"

export default class ContactDto {
  static async requestAddContact(req: Request, res: Response, next: NextFunction) {
    const { error, value } = await validateRequestDto({
      dto: req.body,
      dtoSchema: contactDtoSchema.add,
    })

    if (error) {
      return res.status(400).send({
        message: error,
        data: {},
      })
    }

    return next()
  }
}
