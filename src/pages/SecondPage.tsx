import React from "react";
import { Container, Typography } from "@mui/material";
import Table from "../components/Table";
import DepartmentList from "../components/DepartmentList";
import { useFetch } from "../hooks/useFetch";
import { getUserFromLocalStorage } from "../utils/localStorage";
import { Navigate } from "react-router-dom";
import "./SecondPage.css";

const SecondPage: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const user = getUserFromLocalStorage();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="container">
      <Typography variant="h2" gutterBottom>
        User Data and Department List
      </Typography>
      {loading ? (
        <Typography>Loading...</Typography>
      ) : error ? (
        <Typography>Error: {error}</Typography>
      ) : (
        <Table rows={data} />
      )}
      <DepartmentList />
    </Container>
  );
};

export default SecondPage;
