import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const NewsCard = (props) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 2,
        marginBottom: 3,
        boxShadow: "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)",
      }}
    >
      <Grid container>
        <Grid item sm={4}>
          <CardMedia
            component="img"
            src="/assets/news1.jpg"
            sx={{ height: "100%" }}
            alt={props.alt}
          />
        </Grid>
        <Grid item sm={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
            }}
          >
            <CardContent>
              <Typography component="h1" variant="h5" align="left">
                {props.heading}
              </Typography>
              <Typography variant="subtitle1" component="h2" align="left">
                {props.summary}
              </Typography>
              <Typography component="h3" variant="h5" align="left">
                read more at &nbsp;
                <Link
                  href="#"
                  underline="none"
                  color={theme.palette.common.black}
                >
                  {props.newsWebsite}
                </Link>
              </Typography>
            </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NewsCard;
