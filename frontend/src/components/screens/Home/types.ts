import { IContact } from "../../shared/Types";
export interface ContactCardProps {
    contact: IContact;
    handleDeleteContact: (id: string) => Promise<void>;
    loading: boolean;
  }