export interface ConfirmationDialogProps {
  id: string;
  isOpen: boolean;
  handleOk: (id:string) => void;
  handleCancel: () => void;
}
