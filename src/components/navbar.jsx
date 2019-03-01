import React from "react";
import { NavLink, Link } from "react-router-dom";

//Stateless Functional Component
const NavBar = props => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navabrNavAltMarkup"
        aria-controls="navabrNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navabrNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Raju
          </Link>
          <NavLink className="nav-item nav-link" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink className="nav-item nav-link" to="/customers">
            Customers
          </NavLink>
          <NavLink className="nav-item nav-link" to="/counters">
            Counters
          </NavLink>
          <NavLink className="nav-item nav-link" to="/posts/2019/02">
            Posts
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
          <span className="navbar-brand" tabIndex="-1" aria-disabled="true">
            Notify{" "}
            <span className="badge badge-pill badge-secondary">
              {props.totalCounters}
            </span>
          </span>
        </div>
      </div>
      {/* //   {/* <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarTogglerDemo03"
    //     aria-controls="navbarTogglerDemo03"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon" />
    //   </button> */}
      {/* //   <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/dashboard">
    //         Dashboard
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/customers">
    //         Customers
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/counters">
    //         Counters
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link className="nav-link" to="/posts/2019/02">
    //         Posts
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <span className="navbar-brand" tabIndex="-1" aria-disabled="true">
    //         Notify{" "}
    //         <span className="badge badge-pill badge-secondary">
    //           {props.totalCounters}
    //         </span>
    //       </span>
    //     </li>
    //   </ul> */}
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="www.google.com">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
