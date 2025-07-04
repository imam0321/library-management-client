import { useState } from "react";
import { cn } from "@/lib/utils";
import { BookOpen, ClipboardList, Menu, PlusCircle, X } from "lucide-react";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import { Link } from "react-router";

const navItems = [
  { name: "All Books", to: "/books", icon: BookOpen },
  { name: "Add Book", to: "/create-book", icon: PlusCircle },
  { name: "Borrow Summary", to: "/borrow-summary", icon: ClipboardList },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white dark:bg-neutral-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="text-xl font-bold text-blue-600 dark:text-white"
        >
          📚 BookShelf
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(({ name, to, icon: Icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={cn(
                  "flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition-colors"
                )}
              >
                <Icon className="w-5 h-5" />
                {name}
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navItems.map(({ name, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition-colors"
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
