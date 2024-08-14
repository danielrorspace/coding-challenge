import React from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PageTitle: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [pageTitle, setPageTitle] = useState<String>("");

  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (pathname) {
      if (pathname === "/") {
        setPageTitle("All Contacts");
      } else if (pathname.includes("/add-contact")) {
        setPageTitle("Add Contact");
      } else if (pathname.includes("/edit-contact")) {
        setPageTitle("Edit Contact");
      }
    }
  }, [pathname]);

  return (
    <Box
      sx={{
        mb: "30px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {pathname !== "/" && (
        <Tooltip title="Go Back" arrow>
          <Button
            onClick={navigateToHome}
            style={{ maxWidth: "30px", minWidth: "30px" }}
            startIcon={<ArrowBack />}
          ></Button>
        </Tooltip>
      )}
      <Typography variant="h5" sx={{ mt: "0px", fontWeight: "500" }}>
        {pageTitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;
