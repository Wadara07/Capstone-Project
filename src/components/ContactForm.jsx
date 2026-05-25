import React from "react";

export default function ContactForm() {
  return (
    <section className="contact">
      <h2>Have Questions About Planetary Science?</h2>

      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />

        <textarea placeholder="Message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}