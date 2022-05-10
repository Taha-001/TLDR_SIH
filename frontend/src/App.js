import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavInshort from "./components/NavInshort";
import NewsContent from "./components/NewsContent/NewsContent";


function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("ALL");
  console.log(category)
  console.log(process.env);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `http://127.0.0.1:8000/api/press-releases/`
      );
      console.log(news);
      setNewsArray(news.data);
      setNewsResults(news.data.length);
      // console.log(new1.data, new1.data.length)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);

  return (
    <div className="App" id="#home">
      <NavInshort setCategory={setCategory} />
      {newsResults && (
        <NewsContent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
          category={category}
        />
      )}
    </div>
  );
}

export default App;
