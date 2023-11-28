import { Link, useParams } from "react-router-dom";
import "../Movies/Products.css";
import { BsFillPlayFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch} from "react-redux";
import { BsFillHeartFill } from "react-icons/bs";
import changeCounter from "../store/favAction";
import Button from "react-bootstrap/Button";

const Search = () => {
  const { movName } = useParams();
  const api = "03861000422926c11be27fbb2aea0030";
  const img_path = "https://image.tmdb.org/t/p/w500/";
  const [allProduct, setAllProduct] = useState([]);
  const [numPage, seeNumPage] = useState("1");
  const [page, setPage] = useState("1");
  const language = useSelector((state) => state.lang);
  const favorites = useSelector((state) => state.favorites);
  const counter = useSelector((state) => state.counter);
  const myDispatcher = useDispatch();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/search/multi`, {
        params: {
          api_key: api,
          page: page,
          query: movName,
        },
      })
      .then((response) => {
        seeNumPage(response.data.total_pages);
        console.log(response.data);
        setAllProduct(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, movName, language]);
  const showPev = () => {
    let currentPage = page;
    if (!currentPage <= 1) {
      currentPage--;
      setPage(currentPage);
    }
  };
  const showNext = () => {
    let currentPage = page;
    if (currentPage !== numPage) {
      currentPage++;
      setPage(currentPage);
    }
  };
  return (
    <div>
      <div className="containerr">
        {allProduct.map((product) => (
          <div className="movie-card">
            <div className="movie-header ">
              <img
                className="photo movie-header header-icon-container "
                src={`${img_path}${product.poster_path}`}
                alt="Poster"
              />
              <div className="header-icon-container">
                <div className="iEdit">
                  <Link
                    to={`/${
                      product.media_type === "movie" ? "movie" : "series"
                    }-details/${product.id}`}
                  >
                    <BsFillPlayFill className="material-icons header-icon " />
                  </Link>
                </div>
              </div>
            </div>
            <div className="movie-content">
              <div className="movie-content-header">
                <h3 className="movie-title">
                  {(language === "ar-SA"
                    ? product.original_title
                    : product.title) ||
                    (language === "ar-SA"
                      ? product.original_name
                      : product.name)}
                </h3>
                <div class="imax-logo">
                <Button
                    variant=""
                    className="ms-4 p-0 rounded-0 text-center border-0"
                    onClick={(changeStar) => {
                      let found = false;
                      let deletitem;
                      for (const key in favorites) {
                        if (product.id === favorites[key].id) {
                          found = true;
                          deletitem = key
                        }
                      }
                      if (!found) {
                        favorites.push(product);

                        myDispatcher(changeCounter(counter + 1));
                      } else {
                        delete favorites[deletitem];
                        myDispatcher(changeCounter(counter - 1));
                      }

                    }}
                  >
                    <BsFillHeartFill className="star"/>
                  </Button>
                </div>
              </div>
              <div className="movie-info">
                <div className="info-section">
                  <label>Date </label>
                  <span>{product.release_date || product.first_air_date} </span>
                </div>
                <div className="info-section">
                  <label>Rating</label>
                  <span className="rate">
                    {product.vote_average || product.popularity} /10
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item" style={{ width: "160px" }}>
              <button
                className="btn bg-dark border-0 text-white"
                style={{ width: "150px" }}
                onClick={showPev}
                disabled={page <= 1 ? true : false}
              >
                {"<< Previous"}
              </button>
            </li>
            <li className="page-item" style={{ width: "150px" }}>
              <button
                className="btn bg-dark border-0 text-white"
                style={{ width: "150px" }}
                onClick={showNext}
                disabled={page >= numPage ? true : false}
              >
                {"Next >>"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Search;
