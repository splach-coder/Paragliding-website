import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, ArrowUp, Mail, Phone } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Image Gallery - Hidden on small screens, merges with above section */}
      <div className="hidden md:block absolute bottom-full">
        <div className="grid grid-cols-7 gap-0 items-end">
          {/* Column 1 - Tall */}
          <div className="h-48">
            <img
              src="/images/footer/1.JPG"
              alt="Fashion portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 2 - Medium */}
          <div className="h-64">
            <img
              src="/images/footer/2.jpg"
              alt="Portrait photography"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 3 - Short */}
          <div className="h-48">
            <img
              src="/images/footer/3.JPG"
              alt="Creative setup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 4 - Extra Tall */}
          <div className="h-80">
            <img
              src="/images/footer/4.jpg"
              alt="Fashion model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 5 - Medium */}
          <div className="h-60">
            <img
              src="/images/footer/5.jpg"
              alt="Creative art"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 6 - Tall */}
          <div className="h-72">
            <img
              src="/images/footer/6.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Column 7 - Short */}
          <div className="h-48">
            <img
              src="/images/footer/7.jpg"
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <img
              className="h-40"
              src="/images/logo/Flt Tandem.png"
              alt="logo"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevating your adventure experiences with professional guidance
              and unparalleled excitement in the heart of nature.
            </p>
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.facebook.com/share/1LAe9e2DfL/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/fly_tandem?igsh=MWk2Zmw1dmtzMXd2aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {/* Email - click to open mail client */}
              <a
                href="mailto:flytandem10@gmail.com"
                className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Mail className="mr-3 h-4 w-4" />
                <span>flytandem10@gmail.com</span>
              </a>

              {/* First Phone - click to call (mobile) */}
              <a
                href="tel:+212651452409"
                className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Phone className="mr-3 h-4 w-4" />
                <span>+212 651-452409</span>
              </a>

              {/* Second Phone - click to call (mobile) */}
              <a
                href="tel:+212611501135"
                className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
              >
                <Phone className="mr-3 h-4 w-4" />
                <span>+212 611-501135</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-medium mb-6 text-lg uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Activities Links */}
          <div>
            <h3 className="text-white font-medium mb-6 text-lg uppercase tracking-wider">
              Activities
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/service/paragliding"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Paragliding
                </a>
              </li>
              <li>
                <a
                  href="/service/quad"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Quad Biking
                </a>
              </li>
              <li>
                <a
                  href="/service/camel"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Camel Rides
                </a>
              </li>
              <li>
                <a
                  href="/service/horse"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Horseback Riding
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom Bar */}
        <div className="flex justify-center items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} FlyTandem Adventures. All rights
            reserved. Made by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wereact.agency"
              className="text-sm text-green-700 hover:text-white transition-colors"
            >
              WeReact Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
