import SlideShow from "./slideShow";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="container-fluid">
        <SlideShow />
        <div className="row">
          <div className="col-6 m-auto">
            <h2 className="font-size">Categories of The Month</h2>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-2 text-center">
            <img
              className="w-75 border img-fluid rounded-circle"
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
              alt=""
            />

            <p className="text-center mt-3">
              <h5>complete set</h5>
              <Link to="/shope" className="btn btn-success mx-auto">
                Go Shop
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3 text-center">
            <img
              className="w-75 border img-fluid rounded-circle"
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
              alt=""
            />

            <p className="text-center mt-3">
              <h5>jocket</h5>
              <Link to="/shope" className="btn btn-success mx-auto">
                Go Shop
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3 text-center">
            <img
              className="w-75 border img-fluid rounded-circle"
              src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
              alt=""
            />
            <p className="text-center mt-3">
              <h5>ring</h5>
              <Link to="/shope" className="btn btn-success mx-auto">
                Go Shop
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="row container text-center py-3">
          <div className="col-lg-6 m-auto">
            <h2 className="text-center">Featured Product</h2>
            <p>
              Reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card h-100">
              <img
                src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card h-100">
              <img
                src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mb-4">
            <div className="card h-100">
              <img
                src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark">
        <div className="row">
          <div className="col-md-4 pt-5">
            <h3 className="border-bottom pb-3 border-light text-center text-success">
              Zay Shope
            </h3>
            <ul className="text-light list-unstyled">
              <li className="hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z"></path>
                  <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z"></path>
                </svg>
                123 Consectetur at ligula 10660
              </li>
              <li className="hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z"></path>
                </svg>
                010-020-0340
              </li>
              <li className="hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
                </svg>
                info@company.com
              </li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <h3 className="text-light border-bottom pb-3 border-light text-center">
              Products
            </h3>
            <ul className="text-light list-unstyled">
              <li className="hover">Luxury</li>
              <li className="hover">Sport Wear</li>
              <li className="hover">Men's Shoes</li>
              <li className="hover">Women's Shoes</li>
              <li className="hover">Popular Dress</li>
              <li className="hover">Gym Accessori</li>
              <li className="hover">Sport Shoes</li>
            </ul>
          </div>
          <div className="col-md-4 pt-5">
            <h3 className="text-light border-bottom pb-3 border-light text-center">
              Further Info
            </h3>
            <ul className="text-light list-unstyled">
              <li className="hover">Home</li>
              <li className="hover">About Us</li>
              <li className="hover">Shop Locations</li>
              <li className="hover">FAQs</li>
              <li className="hover">Contact</li>
            </ul>
          </div>
        </div>

        <div className="w-100 my-3 border-top border-light"></div>

        <svg
          className="border rounded-circle m-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
        </svg>
        <svg
          className="border rounded-circle m-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
          <circle cx="16.806" cy="7.207" r="1.078"></circle>
          <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
        </svg>
        <svg
          className="border rounded-circle m-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
        </svg>
        <svg
          className="border border-light rounded-circle m-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <circle cx="4.983" cy="5.009" r="2.188"></circle>
          <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
        </svg>
      </footer>
      <div className="bg-black w-100 py-4">
        <p className="text-light text-center">
          Copyright &copy; 2021 Company Name Designed by{" "}
          <span className="text-success">TemplateMo</span>
        </p>
      </div>
    </>
  );
};

export default Home;
