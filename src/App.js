import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/search";
import Products from "./Movies/Movies";
import ProductDetails from "./Movies/MovieDetails";
import SeriesDetails from "./Series/SeriesDetails";
import Series from "./Series/Series";
import Favorites from "./favoriteList/FavoriteList";
function App() {
  return (
    <div className="continer">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/series" element={<Series />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/search/:movName" element={<Search />} />
        <Route path="/movie-details/:id" element={<ProductDetails />} />
        <Route path="/series-details/:id" element={<SeriesDetails />} />
        <Route path="*" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
