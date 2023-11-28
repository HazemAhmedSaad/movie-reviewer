import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function ImgOverlayExample() {
  const api = "03861000422926c11be27fbb2aea0030";
  const img_path = "https://image.tmdb.org/t/p/w500/";
  let { id } = useParams();
  const [product, setProduct] = useState({});
const language = useSelector((state)=>state.lang)

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, {
        params: {
          api_key: api,
          language:language,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [language]);
  return (
    <div>
      <div
        className="card mb-3 container my-5"
        style={{ background: "#ffc10708", width: "75%" }}
      >
        <div className="row g-0 ">
          <div className="col-md-4 text-center">
            <img
              src={`${img_path}${product.poster_path}`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.overview}</p>
              <p className="card-text">
                <small className="text-muted">Budget: {product.budget || "Unknown"}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgOverlayExample;
