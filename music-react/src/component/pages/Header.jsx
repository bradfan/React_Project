import React, { Component } from "react"
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">Music Registry</h1>

        <nav className="navbar">
          <p>
            <Link className="nav-link btn" to="/">
              Home
            </Link>
          </p>
          <p>
            <Link className="nav-link btn" to="/SongRegistry">
              Log Out
            </Link>
          </p>
        </nav>
      </header>
    );
  }
}

export default Header;
