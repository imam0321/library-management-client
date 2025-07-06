import { Link } from "react-router";
import { Github, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-neutral-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 dark:text-white"
          >
            📚 BookShelf
          </Link>

          <ul className="flex flex-wrap gap-6 text-sm font-medium">
            <li>
              <Link to="/books" className="hover:text-blue-500">
                All Books
              </Link>
            </li>
            <li>
              <Link to="/books/create-book" className="hover:text-blue-500">
                Add Book
              </Link>
            </li>
            <li>
              <Link to="/borrow-summary" className="hover:text-blue-500">
                Borrow Summary
              </Link>
            </li>
          </ul>

          <div className="flex gap-4">
            <Github className="w-5 h-5" />
            <Facebook className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} BookShelf. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
