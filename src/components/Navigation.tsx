import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Ana Səhifə", href: "#home" },
    { label: "Haqqımda", href: "#about" },
    { label: "Bacarıqlar", href: "#skills" },
    { label: "Lahiyələr", href: "#projects" },
    { label: "Əlaqə", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          Əhmədova Nuranə
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-300 hover:text-neutral-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-neutral-300 hover:text-neutral-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
