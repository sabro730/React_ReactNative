import React from 'react'

export default function Footer() {
  return (
    <footer id="footer">
        <div id="opening">
            <h2>Opening Times</h2>
            <ul id="opening-times">
                <li>Monday, Sunday: Closed</li>
                <li>Tuesday, Weds, Friday: 10:00 - 18:00</li>
                <li>Thursday: 10:00 - 20:00</li>
                <li>Saturday: 09:00 - 19:00</li>
            </ul>
        </div>

        <div id="phone" className="phone-number">
            <h2>Telephone</h2>
            <a className="phone-link" href="tel:07723401958">
                <p>0000000000</p>
            </a>
        </div>

        <div id="social">
            <ul id="social-links">
                <li><a href="#facebook" target="_blank" rel="noopener"
                        aria-label="Visit our Facebook Page (Opens in a new window)"><i
                            className="fab fa-facebook-square"></i></a></li>
                <li><a href="#twitter" target="_blank" rel="noopener"
                        aria-label="Visit our Twitter Feed (Opens in a new window)"><i
                            className="fab fa-twitter-square"></i></a></li>
                <li><a href="#instagram" target="_blank" rel="noopener"
                        aria-label="Visit our Instagram Feed (Opens in a new window)"><i
                            className="fab fa-instagram-square"></i></a></li>
            </ul>
        </div>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License"
                className='borderwidth0' src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is
        licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons
            Attribution 4.0 International License</a>.
    </footer>
  )
}
