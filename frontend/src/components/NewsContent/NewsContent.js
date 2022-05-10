import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";
// import "animate.css/animate.min";
import ScrollAnimation from 'react-animate-on-scroll';


const NewsContent = ({ newsArray, loadMore, setLoadMore, newsResults, category }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        {/* <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            alt="app store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
          />
          <img
            alt="play store"
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
          />
        </div> */}

        {/* First this */}
        {newsArray.map((newsItem) => {
          if (category === newsItem.PressReleaseCategory || category === "ALL") {
            return (
              <ScrollAnimation animateIn="fadeIn">
                <NewsCard newsItem={newsItem} key={newsItem.title} />
              </ScrollAnimation>
            )  
          }
        })}
      </div>
    </Container>
  );
};

export default NewsContent;
