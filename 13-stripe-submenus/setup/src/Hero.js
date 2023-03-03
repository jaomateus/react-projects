import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseHover={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>paymentys infrastructure for internet</h1>
          <p>
            Millions of comapanies of all sizes-from startups to fortune 500s-
            use Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
