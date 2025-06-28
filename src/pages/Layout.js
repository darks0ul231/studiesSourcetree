import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
  {/* <div className="header">Header</div>
  <div className="menu">
    Menu
    <ol>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="about_us">About Us</a>
      </li>
      <li>
        <a href="profile">profile</a>
      </li>
      <li>
        <a href="login">Login</a>
      </li>
    </ol>
  </div> */}
    <Outlet/>
  {/* <div className="right">Right</div>
  <div className="footer">Footer</div> */}

      </>
      
    )
  };

  export default Layout;