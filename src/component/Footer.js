import React from 'react'
import { RiInstagramFill, RiTwitterFill, RiLinkedinBoxFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <div>
      

          <footer className="footer-07 bg-dark pt-5">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-12 text-center">
                          <h2 className="footer-heading text-light">Bookie.com</h2>
                          <p className="footer-menu text-secondary d-flex flex-wrap justify-content-center">
                              <a>Home</a>
                              <a>Explore</a>
                              <a>About</a>
                              <a>Listing</a>
                              <a>Blog</a>
                              <a>Contact</a>
                          </p>
                          <ul className="ftco-footer-social ps-4 pe-4 fs-1 d-flex justify-content-center">
                              <li className="p-1 nav nav-link text-light"><RiInstagramFill/></li>
                              <li className="p-1 nav nav-link text-light"><RiTwitterFill/></li>
                              <li className="p-1 nav nav-link text-light"><RiLinkedinBoxFill/></li>
                          </ul>
                      </div>
                  </div>
                  <div className="row mt-5">
                      <div className="col-md-12 text-center">
                          <p className="copyright text-secondary">
                              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ion-ios-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Bookie.com</a>
                          </p>
                      </div>
                  </div>
              </div>
          </footer>

    </div>
  )
}
