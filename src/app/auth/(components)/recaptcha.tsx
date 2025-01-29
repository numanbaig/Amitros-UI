"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Recaptchaverification = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const SITE_KEY = process.env.RECAPTCHA_SITE_KEY;
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Get the reCAPTCHA token
    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    console.log("reCAPTCHA token:", token);

    // Send the token to your server for verification
    const response = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const result = await response.json();
    console.log("Verification result:", result);
  };

  return (
    <div className="recaptcha-container">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={"6Lc6g7oqAAAAAEp6NFFN8QMTVx2MhNoZcWCTPheR"}
        size="normal" // Use the compact size for better alignment
      />
    </div>
  );
};

export default Recaptchaverification;
