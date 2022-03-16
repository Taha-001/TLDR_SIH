import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";
import Input from "./components/Input";

const subscriptionCategories = [
  "All News",
  "India",
  "Business",
  "Sports",
  "World",
  "Politics",
  "Technology",
  "Startup",
];

const RegistrationPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [categories, setCategories] = useState([]);

  const categoryChangeHandler = (e) => {
    setCategories((prevState) => {
      return [...prevState, e.target.name];
    });
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const error = categories.length === 0;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={4} elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4">
            Register
          </Typography>
          <Box component="form" sx={{ mt: 1 }} onSubmit={submitHandler}>
            <Input
              placeholder="Enter email"
              multiline="false"
              type="email"
              value={email}
              onChange={emailChangeHandler}
              sx={{ marginBottom: 3, marginTop: 2 }}
            />
            <Input
              placeholder="Enter password"
              multiline="false"
              type="password"
              value={password}
              onChange={passwordChangeHandler}
              sx={{ marginBottom: 3 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Submit
            </Button>
            <FormControl
              required
              error={error}
              component="fieldset"
              sx={{ marginBottom: "1rem" }}
            >
              <FormLabel component="legend">Pick at least one</FormLabel>
              <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
                {subscriptionCategories.map((category) => (
                  <FormControlLabel
                    control={<Checkbox name={category} />}
                    label={category}
                    key={category}
                    onChange={categoryChangeHandler}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegistrationPage;
