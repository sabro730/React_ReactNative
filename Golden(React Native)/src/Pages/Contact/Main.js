import React from 'react'

export default function Main() {
  return (
    <main>
      <section id="contact-form">
        <div className="contact">
          <form action="https://formdump.codeinstitute.net" method="POST" className="contact-form" onsubmit="confirmSent()">
            <h2>Get in touch</h2>
            <label for="fname">First name</label>
            <input type="text" id="fname" className="text-input" name="first_name" required/>
            <label for="lname">Last name</label>
            <input type="text" id="lname" className="text-input" name="last_name" required/>
            <label for="email">Email address</label>
            <input type="text" id="email" className="text-input" name="email_address" required/>
            <fieldset>
              <legend>Please select your query topic</legend>
              <div className="query-options">
                <input type="radio" name="query-topic-nails" id="nails" required/>
                <label for="nails">Nails</label>

                <input type="radio" name="query-topic-waxing" id="waxing" required/>
                <label for="waxing">Waxing</label>

                <input type="radio" name="query-topic-relaxation" id="relaxation" required/>
                <label for="relaxation">Relaxation</label>

              </div>
            </fieldset>
            <label id="comment-title" for="comment-box">Query details</label>
            <textarea name="comment-box" id="comment-box" placeholder="Please enter your query details here"></textarea>
            <input type="submit" className="submit-button" value="Submit" aria-label="Submit your query"/>
          </form>
        </div>
      </section>
    </main>
  )
}
