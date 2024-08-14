import { Request, Response } from "express"

import ContactService from "../../services/Contacts"
import { ContactAddDto } from "../../services/Contacts/types"
import { Controller, Route } from "../../utils/route"
import ContactDto from "../../dto/contact-dto"

@Controller("/contact")
export default class UserAuthController {
  @Route.Post({
    path: "/",
    middlewares: [ContactDto.requestAddContact],
  })
  async add(req: Request, res: Response) {
    try {
      const dto: ContactAddDto = req.body
      const service = new ContactService()

      const data = await service.add(dto)

      res.status(data.status).send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }

  @Route.Get({
    path: "/",
  })
  async getAll(req: Request, res: Response) {
    try {
      const service = new ContactService()

      const data = await service.getAll()

      res.status(data.status).send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }

  @Route.Get({
    path: "/:id",
  })
  async get(req: Request, res: Response) {
    try {
      const service = new ContactService()
      const data = await service.get(req.params.id)

      res.status(data.status).send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }

  @Route.Put({
    path: "/:id",
  })
  async update(req: Request, res: Response) {
    try {
      const service = new ContactService()
      const data = await service.update(req.params.id, req.body)

      res.status(data.status).send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }

  @Route.Delete({
    path: "/:id",
  })
  async delete(req: Request, res: Response) {
    try {
      const service = new ContactService()
      const data = await service.delete(req.params.id)

      res.status(data.status).send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}
