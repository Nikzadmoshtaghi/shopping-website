import { useContext } from "react";
import ProductContext from "../context/products";
import { Link } from "react-router-dom";

const Products = () => {
  const productContext = useContext(ProductContext);
 
  return (
    <div className=" row mt-5 pt-5 mx-auto">
      {productContext.products.map((p, index) => {
        return (
          <div className="col-4 mt-3" key={index} >
            <div
              className="card ml-2 mr-2 mb-3 h-100"
              
            >
              <div className="card-body">
                <Link
                  onClick={() => {
                    handleShow(p.id);
                  }}
                  className="btn btn-primary "
                  to="/showMore"
                >
                  show More
                </Link>
                <br />
                <div className="d-flex justify-content-between mt-3">
                  <h2>{p.price}$</h2>
                </div>
              
                <img
                  src={p.image}
                  className="card-img-top img-height w-50"
                  alt="productPicture"
                ></img>

                <h5 className="card-title mt-3">{p.title}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
  function handleShow(productId) {
    productContext.onShow(productId);
  }
};

export default Products;
