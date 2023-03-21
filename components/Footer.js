import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="footer-distributed">

<div className="footer-left">

  <h3>Midas Health Pvt Ltd<span></span></h3>

  <p className="footer-links">
    <Link href="/" clLinkssName="link-1">Home</Link>

    <Link href="/career">Career</Link>

    <Link href="/healthcare">Healthcare</Link>

    <Link href="/technology">Technology</Link>

    <Link href="/news">News</Link>

    <Link href="/contact">Contact</Link>
  </p>

  <p className="footer-company-name">Midas Health Pvt Ltd © 2015</p>
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>+1.555.555.5555</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@company.com</a></p>
  </div>

</div>

<div className="footer-right">

  <p style={{color: "white"}} className="footer-company-about">
    <span>About the company</span>
    COnsulting  is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet.
  </p>

  <div className="footer-icons">

    <a href="#"><i className="fa fa-facebook"></i></a>
    <a href="#"><i className="fa fa-twitter"></i></a>
    <a href="#"><i className="fa fa-linkedin"></i></a>
    <a href="#"><i className="fa fa-github"></i></a>

  </div>

</div>

</footer>

    
    
    </>
  )
}

export default Footer