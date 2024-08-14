export interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    phoneNumber: string;
  }
  export interface CustomFormProps {
    action?: 'add' | 'edit';
  }
  export interface Option {
    value: number;
    label: string;
  }
  