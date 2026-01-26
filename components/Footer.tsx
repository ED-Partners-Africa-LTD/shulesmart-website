import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const navigation = {
  product: [
    { name: "Admissions", href: "#" },
    { name: "Finance", href: "#" },
    { name: "E-Learning", href: "#" },
    { name: "Communications", href: "#" },
    { name: "All Modules", href: "#" },
  ],
  resources: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "User Guides", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "System Status", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Data Protection", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: <FaFacebook className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: <FaInstagram className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: <FaTwitter className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: <FaLinkedin className="h-6 w-6" aria-hidden="true" />,
    },
    {
      name: "YouTube",
      href: "#",
      icon: <FaYoutube className="h-6 w-6" aria-hidden="true" />,
    },
  ],
};

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-16 w-auto" src="/logosms.png" alt="ShuleSmart" />
            <p className="text-sm leading-6 text-gray-400">
              Empowering schools across Africa with smart, integrated management
              solutions. Streamline operations, enhance communication, and drive
              academic excellence.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#39e114] transition-colors duration-300"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-[#39e114] transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-[#39e114] transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-[#39e114] transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-400 hover:text-[#39e114] transition-colors duration-300"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Ed Partners Africa Ltd. All
              rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span>Made with</span>
              <span className="text-[#39e114] animate-pulse">♥</span>
              <span>in Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
