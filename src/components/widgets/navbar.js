import React from 'react';

import './navbar.css';

const Navbar = ({brand, links }) => (
  <nav>
    <div className="nav-wrapper blue darken-4">
      <a href="#" className="brand-logo navbar--brand">{brand}</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {
          links.map((link, i) => (
            <li key={i}>
              <a href={link.target} className={`navbar--link ${link.main ? 'navbar--main-link' : 'navbar--sub-link'}`}>{link.text}</a>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
)


export default Navbar;
