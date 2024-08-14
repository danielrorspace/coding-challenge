import { useEffect, useState } from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import ContactCard from "./ContactCard";
import EmptyIcon from "../../../icons/EmptyIcon";
import { IContact } from "../../shared/Types";

interface HomeScreenProps {} // Empty interface for potential future props

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDeleteContact = async (id: string): Promise<void> => {
    try {
      setLoading(true);
      const requestOptions: RequestInit = {
        method: "DELETE",
      };
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/contact/${id}`,
        requestOptions
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
      } else {
        const tempContacts = contacts.filter((contact) => contact._id !== id);
        setContacts(tempContacts);
      }
    } catch (error) {
      console.log("error in deleting contact ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchContacts = async (): Promise<void> => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/contact`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        if (data?.status === 200 && data?.data?.length > 0) {
          setContacts(data.data);
        }
      } catch (error) {
        console.log("error in fetching all contact ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{ display: "flex", w: "100%", justifyContent: "center", pt: 16 }}
        >
          <CircularProgress size={80} />
        </Box>
      ) : (
        <>
          {contacts?.length > 0 ? (
            <Grid container spacing={5}>
              {contacts?.map((contact) => (
                <ContactCard
                  contact={contact}
                  handleDeleteContact={handleDeleteContact}
                  loading={loading}
                />
              ))}
            </Grid>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                w: "100%",
                justifyContent: "center",
                alignItems: "center",
                pt: 16,
              }}
            >
              <EmptyIcon />
              <Typography mt={2}>Empty Contact List</Typography>
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default HomeScreen;
