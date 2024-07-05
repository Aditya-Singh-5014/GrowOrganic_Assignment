import React from "react";
import Form from "../components/Form";
import { Container, Typography } from "@mui/material";
import "../assets/styles/Home.css";

const Home: React.FC = () => {
  return (
    <Container className="container">
      <Typography variant="h2" gutterBottom>
        Welcome to the User Information App
      </Typography>
      <Form />
    </Container>
  );
};

export default Home;
