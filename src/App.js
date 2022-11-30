import { useState, useEffect, useReducer } from "react";
import productContex from "./context/products";
import axios from "axios";
import Navbar from "./component/navbar";
import Products from "./component/products";
import { Routes, Route } from "react-router-dom";
import Cart from "./component/cart";
import Login from "./component/login";
import Home from "./component/home";
import ShowMore from "./component/showMore";
import About from "./component/about";
import '../src/app.css'
import LoadingProducts from "./component/loading/loadingProducts";
import Information from "./component/information";
import Dashboard from "./component/dashboard";


const App = () => {
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState([]);
  const [show, setshow] = useState([]);
 

  const fetchData = () => {
    setTimeout(async () => {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setproducts(response.data);
      setLoading(false);
    },4000);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const tempstate = state.filter((p) => action.payload.id === p.id);

        if (tempstate.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case "Increment":
        const Incrase = state.map((p) => {
          if (p.id === action.id) {
            return { ...p, quantity: p.quantity + 1 };
          } else {
            return p;
          }
        });
        return Incrase;
      case "Decrement":
        const Decrase = state.map((p) => {
          if (p.id === action.id) {
            return { ...p, quantity: p.quantity - 1 };
          } else {
            return p;
          }
        });
        return Decrase;
  
      case "Remove":
        const Remov = state.filter((p) => p.id !== action.id);
        return Remov;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);

  return (
  <div className="container-fluid">
<div className="row">
{loading ? (
        <LoadingProducts />
      ) : (
       
        <productContex.Provider
          value={{
            state,
            dispatch,
            show: show,
            products: products,
            onShow: handleShow,
          }}
        >
          
          
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="shope" element={<Products />} />
              <Route path="cart" element={<Cart />} />
              <Route path="login" element={<Login />} />
              <Route path="showMore" element={<ShowMore />} />
              <Route path="about" element={<About />} />
              <Route path="information" element={<Information />} />
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </productContex.Provider>
      )}
</div>
  </div>
   
   
   
   
  );
  function handleShow(productId) {
    const newShow = products.filter((p) => p.id === productId);
    setshow(newShow);
  }

 
};

export default App;
