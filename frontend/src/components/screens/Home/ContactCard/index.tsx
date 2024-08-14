import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import EmailIcon from "../../../../icons/EmailIcon";
import PhoneIcon from "../../../../icons/PhoneIcon";
import { Delete, Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "../../../shared/ConfirmationDialog";
import { ContactCardProps } from "../types";
import { useState } from "react";


const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  handleDeleteContact,
  loading,
}) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const editContact = (id: string) => {
    navigate(`/edit-contact/${id}`);
  };

  const handleConfirmation = async (id: string) => {
    await handleDeleteContact(id);
    setOpenDialog(false);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Grid item lg={3} md={4} sm={6} xs={12} key={contact._id}>
      <Card
        sx={{
          height: "100%",
          width: "100%",
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
        }}
      >
        <CardContent>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5" component="div">
              {`${contact.firstName} ${contact.lastName}`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography mr={0.5}>Age:</Typography>
            <Typography>{`${contact.age} Year${contact.age > 1 ? "s" : ""}`}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <EmailIcon />
            <Typography sx={{ pl: 0.5, mt: 0.5 }} color="text.secondary">
              {contact.email}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <PhoneIcon />
            <Typography sx={{ pl: 0.5, mt: 1 }} color="text.secondary">
              {contact.phoneNumber}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => editContact(contact._id)}
            size="small"
            sx={{
              mr: 0.5,
              border: "1px solid black",
              background: "orange",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              boxShadow: "0px 4px 12px rgba(219, 19, 19, 0.4)", // Equal shadow on all sides
              transition: "box-shadow background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "#ffc107",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
              },
            }}
            startIcon={<Edit />}
            disabled={loading}
          >
            Edit
          </Button>
          <Button
            size="small"
            sx={{
              border: "1px solid black",
              background: "#db1313",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              boxShadow: "0px 4px 12px rgba(219, 19, 19, 0.4)", // Equal shadow on all sides
              transition: "box-shadow background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "red",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
              },
            }}
            startIcon={<Delete />}
            onClick={() => setOpenDialog(true)}
            disabled={loading}
          >
            Delete
          </Button>
          {openDialog && (
            <ConfirmationDialog
              id={contact._id}
              isOpen={openDialog}
              handleOk={handleConfirmation}
              handleCancel={closeDialog}
            />
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ContactCard;
