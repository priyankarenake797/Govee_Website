import { PiUserCircleThin } from "react-icons/pi";
import { TbZoom } from "react-icons/tb";
import { PiShoppingCartLight } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiCustomerService2Line } from "react-icons/ri";
import { LiaShippingFastSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPhoneCallback } from "react-icons/md";
import { PiGraduationCapThin } from "react-icons/pi";

const Header = () => {
  return (
    <>
      {/* 1st header */}
      <div className="container1">
        <span className="ra">
          <marquee> Light Up 2025 with Govee</marquee>
        </span>
        <span className="buy">
          <button type="button" className="btn btn-warning">
            Buy Now
          </button>
        </span>
      </div>
      <br />
      {/* middle header */}
      <div className="container2  ">
        <div className="align-items-center d-flex ">
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <p className="nav-link px-2 link-body-emphasis">
                <LiaShippingFastSolid className="icons" />
                Fast Free Shipping
              </p>
            </li>
            <li>
              <p className="nav-link px-4 link-body-emphasis">
                <GiReceiveMoney className="icons" />
                30 Day Money Back Guarantee
              </p>
            </li>
            <li>
              <p className="nav-link px-4 link-body-emphasis">
                <RiCustomerService2Line className="icons" />
                Life Time Customer Support
              </p>{" "}
            </li>
            <li>
              <p className="nav-link px-5 link-body-emphasis">
                <MdPhoneCallback className="icons" />
                Reacall Information
              </p>{" "}
            </li>
            <li>
              <p className="nav-link px-4 link-body-emphasis">
                <PiGraduationCapThin className="icons" />
                Education Discount
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* last header */}
      <br />
      <div className="container">
        <div className="d-flex flex-wrap">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.2ZmP9FoyVNrGUIrIId-gjAAAAA&pid=Api&P=0&"
            className="logo"
          />
        </div>
        <header className="d-flex flex-wrap justify-content-center py-12 mb-6">
          <div className="col-md-3mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <svg
                className="bi"
                width={40}
                height={32}
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap" />
              </svg>
            </a>
          </div>
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                SMART LIGHT
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                SMART APPLINCES
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                DEALS
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                SUPPORT
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                COMMUNITY
              </a>
            </li>
          </ul>
          <TbZoom className="tbzoom" />
          <PiUserCircleThin className="user" />
          <PiShoppingCartLight className="cart" />
          <AiOutlineGlobal className="glob" />
        </header>
      </div>
    </>
  );
};

export default Header;
