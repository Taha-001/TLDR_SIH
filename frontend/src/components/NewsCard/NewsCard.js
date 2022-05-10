import React from "react";
import "./NewsCard.css";
import { useSpeechSynthesis } from "react-speech-kit";
import { RWebShare } from "react-web-share";

const NewsCard = ({ newsItem }) => {
  // console.log(newsItem.PressReleaseCategory);

  // //2021-01-09T12:15:30Z
  // const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  // var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  // const hour = parseInt(date[4].substring(0, 2)); //
  // const time = hour > 12 ? true : false;
  // src={
  //   newsItem.PressReleaseLink.split("'")[3]
  //     ? newsItem.PressReleaseLink.split("'")[3]
  //     : newsItem.PressReleaseLink.split("'")[1]
  // }
  const temp_title = newsItem.PressReleaseTitle.substring(5,newsItem.PressReleaseTitle.length - 4)
  const temp_summary = newsItem.PressReleaseSummary.substring(19,newsItem.PressReleaseSummary.length - 3)
  const { speak } = useSpeechSynthesis();
  return (
    <div className="newsCard">
      <img
        alt={newsItem.PressReleaseTitle.substring(5,newsItem.PressReleaseTitle.length - 4)}
        src={newsItem.PressReleaseImage}
        className="newsImage"
      />

      <div className="newsText">
        <div>
          <span className="title">{temp_title}</span>
          <br />
          <span className="author">
            {/* <a href={newsItem.PressReleaseLink} target="__blank">
              <b>short </b>
            </a>{" "} */}
            <span className="muted">
              {/* {newsItem.PressReleaseDate} */}


            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          
          <div className="description"><p className="description">{temp_summary}</p></div>

          {/* <div className="buttons">
            <button id="play"></button> &nbsp;
            <button id="pause"></button> &nbsp;
            <button id="stop"></button>
          </div> */}
          <div className="all-buttons">
            <div>
              <span className="readmore">
                <a href={newsItem.PressReleaseLink} target="__blank" className="source">
                  Read More
                </a>
              </span>

              <span className="share">
              <RWebShare
                data={{
                  text: temp_summary,
                  url: newsItem.PressReleaseLink,
                  title: temp_title,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <a id="shareBtn" className="source">Share</a>
              </RWebShare>
              </span>
            </div>

            <div className="buttons">
              <button id="play" className="source" onClick={() => speak({ text: temp_summary })}></button>
            </div>

          </div>
          
        </div>
      </div>
    </div>
        
  );
};

export default NewsCard;
