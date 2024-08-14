import ContactModel from "../../models/contact"
import { ContactAddDto } from "./types"

export default class ContactService {
  async add(dto: ContactAddDto) {
    const data = await ContactModel.create(dto)
    return { data, status: 201, message: "Contact added successfully" }
  }

  async getAll() {
    const data = await ContactModel.find()
    return { data, status: 200, message: "Contacts fetched successfully" }
  }

  async get(id: string) {
    const data = await ContactModel.findById(id)
    if (!data) {
      return { data: {}, status: 404, message: "Contact not found" }
    }

    return { data, status: 200, message: "Contact fetched successfully" }
  }

  async update(id: string, dto: ContactAddDto) {
    const contact = await ContactModel.findById(id)
    if (!contact) {
      return { data: {}, status: 404, message: "Contact not found" }
    }

    if (dto.firstName) contact.firstName = dto.firstName
    if (dto.lastName) contact.lastName = dto.lastName
    if (dto.email) contact.email = dto.email
    if (dto.phoneNumber) contact.phoneNumber = dto.phoneNumber
    if (dto.age) contact.age = dto.age

    const data = await contact.save()
    return { data, status: 200, message: "Contact updated successfully" }
  }

  async delete(id: string) {
    const data = await ContactModel.findById(id)
    if (!data) {
      return { data: {}, status: 404, message: "Contact not found" }
    }

    await data.delete()
    return { data, status: 204, message: "Contact deleted successfully" }
  }
}
