import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", label: "En" },
    { code: "fr", label: "Fr" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-white text-sm font-medium px-1 rounded-md hover:bg-white/20 transition-all duration-200"
        aria-label="Change language"
      >
        <span className="uppercase mr-1">
          {i18n.language === "en" ? "En" : "Fr"}
        </span>
        <FiChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-20 bg-black/60 backdrop-blur-lg rounded-lg shadow-lg border border-white/20 z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-white/10 transition-colors ${
                  i18n.language === lang.code
                    ? "text-white font-medium bg-white/10"
                    : "text-white/80"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [isLoaded, setIsLoaded] = useState(false);

  const navItems = [
    { id: "Home", label: t("nav.home"), link: '/' },
    { id: "About", label: t("nav.about"), link: 'about' },
    { id: "Services", label: t("nav.services"), link: 'services' },
    { id: "Contact", label: t("nav.contact"), link: 'contact' },
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const detectActiveSection = () => {
      const path = window.location.pathname;
      const pathSegments = path.split('/').filter(segment => segment !== '');
      
      if (pathSegments.length === 0 || path === '/') {
        setActiveSection("Home");
      } else {
        const currentPage = pathSegments[pathSegments.length - 1].toLowerCase();
        
        const foundItem = navItems.find(item => 
          item.link.toLowerCase() === currentPage || 
          item.id.toLowerCase() === currentPage
        );
        
        if (foundItem) {
          setActiveSection(foundItem.id);
        } else {
          setActiveSection("Home");
        }
      }
    };

    detectActiveSection();

    const handlePopState = () => {
      detectActiveSection();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const headerVariants = {
    initial: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    animate: {
      width: "auto",
      height: "56px", // Fixed height
      borderRadius: "9999px",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block"
        variants={headerVariants}
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-xl h-full">
          <motion.nav
            className="flex items-center justify-between w-[800px] h-full"
            variants={contentVariants}
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
          >
            {/* Logo - Made larger */}
            <motion.div
              className="flex items-center ms-6"
              variants={itemVariants}
            >
              <a href="/" className="flex items-center">
                <img
                  src="/images/logo/Flt Tandem.png"
                  alt="logo"
                  className="h-16 w-auto"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="flex items-center gap-6 h-full"
              variants={itemVariants}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`${item.link}`}
                  className={`relative flex items-center h-full hover:text-white text-sm font-medium transition-colors duration-200 group ${
                    activeSection === item.id
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                  variants={itemVariants}
                >
                  <div
                    className={`w-1 h-1 bg-white rounded-full mr-1 transition-opacity duration-200 ${
                      activeSection === item.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  ></div>
                  {item.label}
                </motion.a>
              ))}
            </motion.div>

            <div className="flex items-center gap-1 h-full">
              {/* Language Switcher */}
              <motion.div variants={itemVariants}>
                <LangSwitcher />
              </motion.div>

              {/* CTA Button */}
              <motion.button
                className="bg-white text-black px-6 py-2.5 me-2 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-200 flex items-center"
                variants={itemVariants}
              >
                <a href="/contact">{t("nav.getStarted")}</a>
                <svg
                  className="ml-2 w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden h-[56px]">
        <div className="bg-black/20 backdrop-blur-xl border-b border-white/10 h-full">
          <nav className="flex items-center justify-between px-4 h-full">
            {/* Mobile Logo - Made larger */}
            <div className="flex items-center h-full">
              <a href="/" className="flex items-center h-full">
                <img
                  src="/images/logo/Flt Tandem.png"
                  alt="logo"
                  className="h-12 w-auto object-contain" // Increased from h-10 to h-12
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={mobileMenuVariants}
                className="overflow-hidden absolute top-[56px] left-0 right-0 bg-black/20 backdrop-blur-xl border-b border-white/10"
              >
                <div className="px-4 pb-4 space-y-2">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`${item.link}`}
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center px-3 py-3 text-sm font-medium hover:bg-white/10 rounded-lg transition-colors duration-200 group ${
                        activeSection === item.id
                          ? "text-white" // Always white for active items
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      <div
                        className={`w-1 h-1 bg-white rounded-full mr-3 transition-opacity duration-200 ${
                          activeSection === item.id
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      ></div>
                      {item.label}
                    </a>
                  ))}

                  <div className="px-3 pt-3 border-t border-white/10">
                    <LangSwitcher />
                  </div>

                  <div className="px-3 pt-2">
                    <button
                      className="w-full bg-white text-black px-4 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-200 flex items-center justify-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t("nav.getStarted")}
                      <svg
                        className="ml-2 w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;