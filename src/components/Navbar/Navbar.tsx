import { cn } from "@/lib/utils";
import { Link } from "react-router";

const navItems = [
  { name: "All Books", to: "/books" },
  { name: "Add Book", to: "/books/add" },
  { name: "Borrow Summary", to: "/borrow-summary" },
];

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-blue-600">
          📚 BookShelf
        </Link>
        <ul className="flex gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "text-gray-700 hover:text-blue-600 font-medium transition-colors"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
