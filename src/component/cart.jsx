import { Link } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../context/products";
import "./cart.css";
// import Rating from '@mui/material/Button';
// import Typography from '@mui/material/Button';

const Cart = () => {
  const productContext = useContext(ProductContext);
  const state = productContext.state;
  const dispatch = productContext.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
      {state.length === 0 ? (
        <div id="position" className="w-50 h bg-color rounded ">
          <h3 className="text-center mt-3">cart is empty !</h3>
          <p className="text-center">see more products:</p>
          <Link className="text-success text-decoration-none fs-3" to="/shope">
            Shope
          </Link>
        </div>
      ) : (
        <>
          <table id="mt">
            <thead>
              <tr>
                <th className="text-center">Image</th>
                <th className="text-center">Product</th>
                <th className="text-center">Price</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Total Price</th>
                <th className="text-center">Remove</th>
              </tr>
            </thead>

            <tbody>
              {state.map((p, index) => {
                return (
                  <tr key={index}>
                    <td className="text-center">
                      <img className="w-50" src={p.image} alt="" />
                    </td>
                    <td className="w-25">{p.title}</td>
                    <td className="text-center">{p.price}</td>
                    <td className="text-center">
                      <div className="input-group">
                        <button
                          onClick={() => {
                            if (p.quantity < 5) {
                              dispatch({ type: "Increment", id: p.id });
                            }
                          }}
                          className="input-group-text"
                        >
                          +
                        </button>
                        <div className="form-control text-center">
                          {" "}
                          {p.quantity}
                        </div>

                        <button
                          onClick={() => {
                            if (p.quantity > 1) {
                              dispatch({ type: "Decrement", id: p.id });
                            }
                          }}
                          className="input-group-text"
                        >
                          -
                        </button>
                      </div>
                    </td>
                    <td className="text-center">{p.price * p.quantity}$</td>
                    <td className="text-center">
                      <button
                        onClick={() => dispatch({ type: "Remove", id: p.id })}
                        className="btn btn-lg "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                          id="IconChangeColor"
                          style={{ color: "red" }}
                        >
                          <path
                            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                            id="mainIconPathAttribute"
                          ></path>
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                            id="mainIconPathAttribute"
                          ></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}

      {state.length > 0 && (
        <h4 className="text-center mt-5">Total: ${total}</h4>
      )}

      <Link
        className="text-light fs-3  text-center text-decoration-none"
        to="/information"
      >
        <span className="background mt-5">Buy</span>
      </Link>
    </>
  );
};

export default Cart;
