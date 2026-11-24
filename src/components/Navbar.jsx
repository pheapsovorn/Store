import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Product", href: "#product" },
  { name: "Contact", href: "#contact" },
];

/* ---------- Icons ---------- */
const TelegramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* ---------- Navbar ---------- */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left Side: Store Logo & Desktop Links */}
        <div className="flex items-center gap-6 lg:gap-8">
          {/* Logo Image */}
          <a
            href="#home"
            className="flex shrink-0 items-center transition hover:opacity-80"
          >
            <img
              src="/Black Store.png"
              alt="Store Logo"
              className="h-10 w-auto object-contain md:h-12"
            />
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Telegram, Gmail, Mobile Menu */}
        <div className="flex items-center justify-end gap-3 md:gap-4">
          {/* Telegram Link */}
          <a
            href="https://t.me/pheapsovorn"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className="rounded-full p-2 text-gray-600 transition hover:bg-sky-50 hover:text-sky-500"
          >
            <TelegramIcon className="h-5 w-5" />
          </a>

          {/* Gmail Link - Replaced with your uploaded image */}
          <a
            href="mailto:pheapsovorn@email.com"
            aria-label="Email"
            className="rounded-full p-1.5 transition hover:bg-gray-100"
          >
            <img
              src="/gmail.png"
              alt="Gmail"
              className="h-5 w-5 object-contain"
            />
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
          >
            {isOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-3 py-3">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
