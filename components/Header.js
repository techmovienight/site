import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";
import Navigation from "./Navigation";
import logo from "assets/img/logo.svg";
import navigationPages from "./navigation-pages";
//import Countdown from "./Countdown";
//import Interactive from "antwar-interactive";

const Header = ({ pathname, title }) => {
  const isHomePage = pathname === "/";
  return isHomePage ? (
    <header className={"header header_index"}>
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <Link to="/" className="rubric site-name header--logo logo">
          <img
            src={logo}
            width={150}
            height={150}
            alt="Tech Movie Night Logo"
            className="logo--image"
          />
        </Link>

        <section className="header--title">
          <span className="logo--title">
            <h1 className="logo--text logo--text-top">Tech Movie Night</h1>
            <h2 className="logo--text logo--text-bottom">
              Tech movies together
            </h2>
          </span>
        </section>

        <section className="header--dates">
          <time dateTime="2019-04-21" className="header--date">
            Next event: 21.06.2019
          </time>
          <address className="header--location">SAE, Vienna</address>
        </section>
        <section className="header--buy">
          <Link
            to="https://www.meetup.com/Tech-Movie-Night/"
            className="buy-button"
          >
            Register to the meetup
          </Link>
        </section>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <Link to="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={140}
              height={126}
              alt="Tech Movie Night Logo"
              className="logo--image"
            />
            <span className="logo--title">
              <span className="logo--text logo--text-top">
                Tech Movie Night
              </span>
              <span className="logo--text logo--text-bottom">
                Tech movies together
              </span>
            </span>
          </h1>
        </Link>
        <h2 className="header--pageTitle">{title}</h2>
      </div>
    </header>
  );
};
Header.propTypes = {
  pathname: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
