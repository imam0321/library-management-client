import { ShoppingBag } from "lucide-react";
import { Link } from "react-router";
interface ParamsType {
  id: string;
}

const BorrowButton = ({ id }: ParamsType) => {
  return (
    <>
      <Link
        to={`/borrow/${id}`}
        className="inline-flex justify-center items-center gap-1 px-4 py-1.5 rounded-md text-sm font-medium bg-neutral-800 hover:bg-gray-700 text-white  dark:bg-white dark:text-black dark:hover:bg-gray-300 transition-colors w-full sm:w-auto"
      >
        <ShoppingBag className="w-5 h-5" />
        Borrow
      </Link>
    </>
  );
};

export default BorrowButton;
