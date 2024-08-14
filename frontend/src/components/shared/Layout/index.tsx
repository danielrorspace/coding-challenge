import React from "react";
import { Box } from "@mui/material";
import { LayoutProps } from "./types";
import Header from "./Header";
import PageTitle from "../PageTitle";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ width: "80%", mx: "auto", mt: "130px" }}>
        <PageTitle />
        {children}
      </Box>
    </>
  );
};

export default Layout;
