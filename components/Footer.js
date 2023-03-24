import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>

    
<footer class="padding_4x">
  <div class="flex">
    <section class="flex-content padding_1x">
      <h3>Top Products</h3>
      <Link href="/career">Career</Link>
      <Link href="/healthcare">Healthcare</Link>
      <Link href="#">Power Tools</Link>
      <Link href="#">Marketing Service</Link>
    </section>
    <section class="flex-content padding_1x">
      <h3>Quick Links</h3>
      <Link href="/contact">Contact Us</Link>
      <Link href="#">Jobs </Link>
      <Link href="/career">Career</Link>
      <Link href="#">Terms of Service</Link>
    </section>

    <section class="flex-content padding_1x">
      <h3>Resources</h3>
      <Link href="#">Guides</Link>
      <Link href="#">Research</Link>
      <Link href="#">Experts</Link>
      <Link href="#">Agencies</Link>
    </section>
    <section class="flex-content padding_1x">
      <h3>Newsletter</h3>
      <p>You can trust us. we only send promo offers,</p>
      <fieldset class="fixed_flex">
        <input type="email" name="newsletter" placeholder="Your Email Address"/>
        <button class="btn btn_2">Subscribe</button>
      </fieldset>
    </section>
  </div>
  <div class="flex">
    <section class="flex-content padding_1x">
      <p>Copyright ©2023 All rights reserved || Midas Consulting</p>
    </section>
    <section class="flex-content padding_1x">
      <a href="#"><i class="fa-brands fa-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-twitter"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
      <a href="#"><i class="fa-brands fa-linkedin"></i></a>
    </section>
  </div>
</footer>

    
    
    </>
  )
}

export default Footer