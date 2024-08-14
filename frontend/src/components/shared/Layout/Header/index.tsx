import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function navigateToAddContact() {
    navigate("/add-contact");
  }

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        minHeight: "75px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "1px solid black",
        background: "white",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "32px",
              fontWeight: "700",
              color: "black",
            }}
            variant="h1"
          >
            Contact Book
          </Typography>
        </Link>
        {pathname === "/" && (
          <Button
            onClick={navigateToAddContact}
            size="small"
            sx={{
              border: "1px solid black",
              background: "#28a745",
              color: "white",
              fontWeight: "600",
              fontSize: "14px",
              px: "10px",
              py: "10px",
              transition: "background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "green",
              },
            }}
            startIcon={<Add />}
          >
            Add Contact
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
