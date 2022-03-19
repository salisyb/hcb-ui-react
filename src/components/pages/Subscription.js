import React from "react";
import Navbar from "../Navbar";
import "./Subscription.css";
function Subscription() {
  return (
    <>
      <Navbar />
      <h1 className="subscription_header_title">
        History and Culture Bureau Kano
      </h1>
      <h3 className="subscription_header_subtitle">Subscription Plan</h3>
      <div className="subscription_container">
        <div className="subscription_wrapper_standard">
          <h1>Standard</h1>
          <h2>&#x20A6;500.00 / Three Month Access </h2>
          <h4>10 Book Access Per Month</h4>
          <h4>Unlimited Access to Historical Videos </h4>
          <h4>Unlimited Access to Historical Image</h4>
        </div>
        <div className="subscription_wrapper_classic">
          <h1>Classic</h1>
          <h2>&#x20A6;10.000.00 / Six Month Access</h2>
          <h4>25 Book Access Per Month</h4>
          <h4>Unlimited Access to Historical Videos </h4>
          <h4>Unlimited Access to Historical Image</h4>
        </div>
        <div className="subscription_wrapper_premium">
          <h1>Premium</h1>
          <h2>&#x20A6;20,000.00 / Six Month Access</h2>
          <h4>40 Book Access Per Month</h4>
          <h4>Unlimited Access to Historical Videos </h4>
          <h4>Unlimited Access to Historical Image</h4>
        </div>
      </div>
    </>
  );
}

export default Subscription;
