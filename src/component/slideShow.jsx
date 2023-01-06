import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slideshow.css";

const SlideShow = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel className="mt-5 pt-5" responsive={responsive}>
        <div className="p-4 m-4 bg-color h-100 rounded">
          <img
            src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
            alt=""
          />
          <h2 className="text-success">
            <b>Zay</b>
          </h2>
          <h3>Tiny and Perfect eCommerce Template</h3>
          <p>
            Zay Shop is an eCommerce HTML5 CSS template with latest version of
            Bootstrap 5 (beta 1). This template is 100% free provided by
            <a
              className="text-success text-decoration-none"
              href="https://templatemo.com"
            >
              TemplateMo
            </a>
            website. Image credits go to
            <a
              className="text-success text-decoration-none"
              href="https://stories.freepik.com/"
            >
              Freepik Stories
            </a>
            
            <a
              className="text-success text-decoration-none"
              href="https://unsplash.com/"
            >
              Unsplash
            </a>
            and
            <a
              className="text-success text-decoration-none"
              href="https://icons8.com/"
            >
              Icons 8
            </a>
            .
          </p>
        </div>

        <div className="p-4 m-4 bg-color h-100 rounded">
          <img
            src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
            alt=""
          />
          <h2>Proident occaecat</h2>
          <h3>Aliquip ex ea commodo consequat</h3>
          <p>
            You are permitted to use this Zay CSS template for your commercial
            websites. You are <strong>not permitted</strong> to re-distribute
            the template ZIP file in any kind of template collection websites.
          </p>
        </div>
        <div className="p-4 m-4 bg-color h-100 rounded">
          <img
            src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
            alt=""
          />
          <h2>Repr in voluptate</h2>
          <h3>Ullamco laboris nisi ut </h3>
          <p>
            We bring you 100% free CSS templates for your websites. If you wish
            to support TemplateMo, please make a small contribution via PayPal
            or tell your friends about our website. Thank you.
          </p>
        </div>
        <div className="p-4 m-4 bg-color h-100 rounded">
          <img
            src="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
            alt=""
          />
          <h2>we are here to support you</h2>
          <h3>
            Accounting
            <br />
            &amp; Management
          </h3>
          <p>
            You are allowed to use this template for your company websites. You
            are NOT allowed to re-distribute this template ZIP file on any
            template download website. Please contact TemplateMo for more
            detail.
          </p>
        </div>
      </Carousel>
      
    </>
  );
};

export default SlideShow;
