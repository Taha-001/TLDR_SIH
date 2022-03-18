import React, { useState } from "react";
import { Box, Button, CssBaseline, Grid, Typography } from "@mui/material";
import Input from "./components/Input";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

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
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: theme.typography.fontWeightLight }}
          >
            Login
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
            <Typography component="h3" variant="body1" align="left">
              Don't have an account? &nbsp;
              <Link to="/register">Register.</Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
