import React from "react";

const ContactPage = () => {
  // Optional: Add state and event handlers if you need to manage form input
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-container">
      <div className="left-col"></div>
      <div className="right-col">
        <div className="theme-switch-wrapper">
          <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
          </label>
          <div className="description">Dark Mode</div>
        </div>

        <h1>Contact us</h1>
        <p>
          Planning to visit the West soon? Get insider tips on where to go will
          arrive, what to do and find the best deals for your trip your next
          adventure.
        </p>

        <form id="contact-form" method="post" onSubmit={handleSubmit}>
          <div className="item-form">
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
            />
          </div>
          <div className="item-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="item-form">
            <label htmlFor="message">Desire</label>
            <textarea
              rows="6"
              placeholder="Your wishes"
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <div className="item-form">
            <button type="submit" id="submit" name="submit">
              Send
            </button>
          </div>
        </form>

        <div id="error"></div>
        <div id="success-msg"></div>
      </div>
    </div>
  );
};

export default ContactPage;
