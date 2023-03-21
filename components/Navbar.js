import Link from "next/link";
import React from "react";


const Navbar = () => {
//   const [navbar, setNavbar] = useState("navbar");
// const changeBackground = () => {
//   if (window.scrollY >= 10) {
//     setNavbar("sticky");
//   } else {
//     setNavbar("navbar");
//   }
// };
// useEffect(() => {
//   window.addEventListener("scroll", changeBackground);
// }, []);

  return (
    <>
      <nav className={"navbar"}>
        <div className="navbar-container container">
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
            <div class="dropdown">
    <button class="dropbtn">Solutions
      <i class="fa fa-caret-down" style={{marginLeft:"7px"}}></i>
    </button>
    <div class="dropdown-content">
      <div className="area-content">
      <div className="area-one">
      <Link href="/career">Career</Link>
      <Link href="/healthcare">Midas Healthcare</Link>
      <Link href="/technology">Midas Technology</Link>
      </div>
      </div>
    </div>
  </div>
            </li>
            <li>
            <div class="dropdown">
    <button class="dropbtn">Company
      <i class="fa fa-caret-down" style={{marginLeft:"7px"}}></i>
    </button>
    <div class="dropdown-content">
      <div className="area-content">
      <div className="area-one">
      <Link href="/diversity">Midas Healthcare</Link>
      <Link href="/technology">News & Events</Link>
      </div>
      </div>
    </div>
  </div>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
          <img src={"/images/logo.webp"} className="logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
