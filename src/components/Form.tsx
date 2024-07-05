import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { saveUserToLocalStorage } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Form.css";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      setPhoneNumberError(false);
    } else {
      setPhoneNumberError(true);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!phoneNumberError && !emailError) {
      const user = { name, phoneNumber, email };
      saveUserToLocalStorage(user);
      navigate("/second");
    }
  };

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom>
        User Information
      </Typography>
      <form onSubmit={handleSubmit} className="form">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          fullWidth
          margin="normal"
          required
          error={phoneNumberError}
          helperText={phoneNumberError ? "Only numbers are allowed" : ""}
        />
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          required
          error={emailError}
          helperText={emailError ? "Invalid email address" : ""}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submit-button"
          disabled={phoneNumberError || emailError}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
