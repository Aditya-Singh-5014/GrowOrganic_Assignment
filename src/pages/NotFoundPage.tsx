import React from "react";
import { Container, Typography } from "@mui/material";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <Container className="container">
      <Typography variant="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography>The page you are looking for does not exist.</Typography>
    </Container>
  );
};

export default NotFoundPage;
