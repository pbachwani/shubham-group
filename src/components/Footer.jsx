"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="footer"
      className="bg-linear-to-b from-[#EA7726] to-[#621C1D] text-white h-full min-h-screen"
    >
      {/* Main Content */}
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Choose elegance, ride in luxury
          </h2>
          <p className="text-sm md:text-base text-orange-100 max-w-2xl">
            Indulge in a first-class journey with our premium limousine
            services. Whether for a special occasion or everyday luxury, we
            ensure every ride is exceptional.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-6 md:mb-8">
              Reach out to us
            </h3>

            <div className="space-y-4 md:space-y-6">
              {/* Email */}
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1" />
                <Link
                  href="mailto:info@shubhamgroup.com"
                  className="text-sm md:text-base hover:text-orange-200 transition-colors"
                >
                  info@shubhamgroup.com
                </Link>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1" />
                <Link
                  href="tel:+917240200200"
                  className="text-sm md:text-base hover:text-orange-200 transition-colors"
                >
                  +91 7240 200 200
                </Link>
              </div>

              {/* Address */}
              <div className="flex gap-3 items-center">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 shrink-0 mt-1" />
                <Link
                  href={"/"}
                  target="_"
                  className="text-sm md:text-base hover:text-orange-200 transition-colors"
                >
                  Corporate office S-1-A, Gopalpura Bypass Rd, Jaipur
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <p className="text-lg lg:text-xl text-orange-100 mb-6 md:mb-8 font-semibold">
              Or have one of our associates reach out to you
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/50 pb-2 md:pb-3 text-sm md:text-base placeholder-orange-100 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/50 pb-2 md:pb-3 text-sm md:text-base placeholder-orange-100 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-white/50 pb-2 md:pb-3 text-sm md:text-base placeholder-orange-100 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full bg-transparent border-b border-white/50 pb-2 md:pb-3 text-sm md:text-base placeholder-orange-100 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 md:px-8 py-2 md:py-3 bg-white text-orange-700 font-semibold rounded-sm hover:bg-transparent  border-white border- hover:text-white transition-all duration-300 disabled:opacity-50 text-sm md:text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <p className="text-green-200 text-sm mt-2">
                    Message sent successfully!
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-orange-200 text-sm mt-2">
                    Error sending message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom Section */}
      <div className="px-6 md:px-12 lg:px-20 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-0">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-orange-100 text-center md:text-left">
            Copyright © 2025 - Shubham Group | Design & Developed By{" "}
            <a
              href="https://ideabehind.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200 hover:text-white transition-colors"
            >
              IdeaBehind.in
            </a>
          </p>

          {/* Social Links */}
          <div className="flex gap-6 md:gap-8">
            <a
              href="https://wa.me/917240200200"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-200 transition-colors"
              aria-label="WhatsApp"
            >
              {/* <MessageCircle className="w-5 h-5" /> */}
              WhatsApp
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-200 transition-colors"
              aria-label="Facebook"
            >
              {/* <Facebook className="w-5 h-5" /> */}
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-orange-200 transition-colors"
              aria-label="Instagram"
            >
              {/* <Instagram className="w-5 h-5" /> */}
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
