import { Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface ParamsType {
  id: string;
}

const BorrowButton = ({ id }: ParamsType) => {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(1);

  const handleAdd = () => setCount((prev) => prev + 1);

  const handleReduce = () => {
    if (count === 1) {
      setCount(1);
      setShowCounter(false);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const handleBorrow = () => {
    console.log(`Borrowing ${count} copy/copies of book ID: ${id}`);
    // TODO: add borrow logic
  };

  return (
    <>
      {!showCounter ? (
        <Button
          variant="default"
          className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-6 py-2 text-sm sm:text-base font-semibold transition hover:scale-105"
          onClick={() => setShowCounter(true)}
        >
          <ShoppingBag className="w-5 h-5" />
          Borrow
        </Button>
      ) : (
        <div className="w-full sm:w-auto flex flex-wrap sm:flex-nowrap items-center border rounded-xl gap-2 p-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={handleReduce}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="text-lg font-semibold w-10 text-center">
            {count}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={handleAdd}
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            variant="default"
            size="icon"
            className="flex-grow sm:flex-none h-9 px-4 flex items-center justify-center gap-1 rounded-lg text-sm sm:text-base font-semibold transition hover:scale-105"
            onClick={handleBorrow}
          >
            <ShoppingBag className="w-5 h-5" />
          </Button>
        </div>
      )}
    </>
  );
};

export default BorrowButton;
