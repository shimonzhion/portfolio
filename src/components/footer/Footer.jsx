import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Shimon</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
            <a href="https://www.linkedin.com/in/shimon-berry--/" className="footer__social-link" target="_blank">
        <i className="bx bxl-linkedin"></i>
      </a>
      <a href="#services" className="footer__social-link">
        <i className="bx bxl-dribbble"></i>
      </a>
      <a href="https://github.com/shimonzhion" className="footer__social-link" target="_blank">
        <i className="bx bxl-github"></i>
      </a>

            </div>
            <span className="footer__copy">
                &#169; Crypticalcoder. All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer