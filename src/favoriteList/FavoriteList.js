import { Link } from "react-router-dom";
import "../Movies/Products.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
const Favorites = () => {
  const img_path = "https://image.tmdb.org/t/p/w500/";

  const favorite = useSelector((state) => state.favorites);


  return (
    <div>
      <div className="containerr">
        {favorite.map((product) => (
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
                <h3 className="movie-title">{product.title || product.name}</h3>
                <div class="imax-logo">
                  <Button
                    variant=""
                    className="ms-4 p-0 rounded-0 text-center border-0"
                    // onClick={(changeStar) => {

                    //   let deletitem;
                    //   for (const key in favorite) {
                    //     console.log(favorite[key].id);
                    //     if (favorite.id === favorite[key].id) {
                    //       deletitem = key
                    //     }
                    //   }
                    //     delete favorite[deletitem];
                    //     myDispatcher(changeCounter(counter - 1));
                    // }}
                  >
                    <BsFillHeartFill className="star" />
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
                  <span className="rate"> {product.vote_average || product.popularity} /10</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
