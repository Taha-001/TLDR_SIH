import React from "react";
import {
  Box,
  CssBaseline,
  Grid,
  Typography,
  CardContent,
  Card,
  CardMedia,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NewsCard from "./components/NewsCard";

const allNews = [
  {
    id: 1,
    title: "US bans Russian oil imports over Ukraine war",
    summary:
      "US bans Russian oil imports over Ukraine war short by Daisy Mowke / 10:11 pm on 08 Mar 2022,Tuesday US President Joe Biden has decided to ban Russian oil imports, he said during a live address as he announced actions to continue to hold Russia accountable over invasion of Ukraine. 'We're banning all imports of Russian oil and gas and energy. That means Russian oil will no longer be accepted at US ports,' he stated.",
    imgPath: "./assets/news1.jpg",
    alt: "US President Joe Biden",
    newsWebsite: "ANI",
  },
  {
    id: 2,
    title: "No longer insisting on NATO membership, says Ukraine",
    summary:
      "Ukrainian President Volodymyr Zelenskyy said he's no longer pressing for NATO membership for Ukraine, an issue that was one of Russia's stated reasons for invasion. 'I've cooled down regarding this question a long time ago after we understood NATO isn't prepared to accept Ukraine,' he stated. 'The alliance is afraid of controversial things, and confrontation with Russia,' the President added.",
    imgPath: "./assets/news2.jpg",
    alt: "Ukrainian President Volodymyr Zelenskyy",
    newsWebsite: "Hindustan Times",
  },
  {
    id: 3,
    title:
      "Bride protests outside groom's Raj home as he doesn't show up at wedding",
    summary:
      "A bride in Rajasthan's Bharatpur district staged a dharna outside the groom's home after he didn't show up at their wedding scheduled on March 4. The groom's father has been arrested on the basis of a complaint filed by her father. The groom, who is in the Army, is admitted to a military hospital in Mathura, police said.",
    imgPath: "./assets/news3.jpg",
    alt: "marriage",
    newsWebsite: "LatestLY",
  },
  {
    id: 4,
    title: "Latvian politician joins forces in Ukraine to fight against Russia",
    summary:
      "Latvian politician Juris Jurašs has joined the fight against Russia in Ukraine, his party confirmed on Tuesday. It was Jurašs' 'personal decision' to fight alongside Ukrainian soldiers, Latvian Justice Minister Jānis Bordāns said without revealing more information citing safety concerns. Last week, the Ukrainian President said that around 16,000 foreigners had volunteered to fight for Ukraine",
    imgPath: "./assets/news5.jpg",
    alt: "Unknown place in Ukraine",
    newsWebsite: "Reuters",
  },
  {
    id: 5,
    title: "West Bengal cabinet gets new finance minister after reallocation",
    summary:
      "West Bengal Chief Minister Mamata Banerjee effected a minor reallocation in the cabinet and gave Chandrima Bhattacharya independent charge of the finance department with the rank of minister of state. Calling the elevation the best gift for state's women on Women's Day, Bhattacharya said, 'I...will carry out the responsibilities entrusted to me till my last breath.'",
    imgPath: "./assets/news6.jpg",
    alt: "Finance Minister of West Bengal",
    newsWebsite: "ANI",
  },
];

const MainPage = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <CssBaseline />
      <Grid item xs={12} sm={8} md={8} elevation={6}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: 2,
              marginBottom: 3,
              boxShadow:
                "0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)",
            }}
          >
            <Grid container>
              <Grid item sm={4}>
                <CardMedia
                  component="img"
                  image="/assets/news1.jpg"
                  sx={{ height: "100%" }}
                  alt="US President Joe Biden"
                />
              </Grid>
              <Grid item sm={8}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent>
                    <Typography
                      component="h1"
                      variant="h5"
                      align="left"
                      sx={{ paddingBottom: 2 }}
                    >
                      US bans Russian oil imports over Ukraine war
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="h2"
                      align="left"
                      sx={{ paddingBottom: 1 }}
                    >
                      US bans Russian oil imports over Ukraine war short by
                      Daisy Mowke / 10:11 pm on 08 Mar 2022,Tuesday US President
                      Joe Biden has decided to ban Russian oil imports, he said
                      during a live address as he announced actions to continue
                      to hold Russia accountable over invasion of Ukraine.
                      "We're banning all imports of Russian oil and gas and
                      energy. That means Russian oil will no longer be accepted
                      at US ports," he stated.
                    </Typography>
                    <Typography component="h3" variant="body2" align="left">
                      read more at &nbsp;
                      <Link
                        href="#"
                        underline="none"
                        color={theme.palette.common.black}
                      >
                        ANI
                      </Link>
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;
