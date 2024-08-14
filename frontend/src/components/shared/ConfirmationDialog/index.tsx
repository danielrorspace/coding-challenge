import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ConfirmationDialogProps } from "./types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  id,
  isOpen,
  handleOk,
  handleCancel,
}) => {
  return (
    <React.Fragment>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancel}
        aria-describedby="alert-dialog-slide-description"
        // sx={{maxWidth:"300px"}}
      >
        <DialogTitle sx={{ width: "400px" }}>Deleting Contact</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you sure
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancel}
            sx={{
              border: "1px soild black",
              background: "#db1313",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "red",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleOk(id)}
            size="small"
            sx={{
              background: "#28a745",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
export default ConfirmationDialog;
