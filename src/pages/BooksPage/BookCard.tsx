import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IBook } from "@/utils/book.interface";
import { Edit, Eye, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router";

interface BookCardProps {
  book: IBook;
  onEdit: (book: IBook) => void;
  onDelete: (id: string) => void;
  onBorrow: (book: IBook) => void;
}

const BookCard = ({ book, onEdit, onDelete, onBorrow }: BookCardProps) => {
  return (
    <Card className="w-full sm:w-[350px] rounded-xl shadow-md hover:shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{book.title}</CardTitle>
          <div className="flex items-center gap-2">
            <Edit
              className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform cursor-pointer"
              onClick={() => onEdit(book)}
            />
            <Trash2
              className="w-5 h-5 text-red-500 hover:scale-110 transition-transform cursor-pointer"
              onClick={() => onDelete(book._id)}
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {book.description}
        </p>
      </CardHeader>

      <CardContent className="text-sm">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground font-bold">
            Copies: {book.copies}
          </span>
          <Badge
            variant="outline"
            className={`text-xs px-3 py-1 rounded-full border ${
              book.available
                ? "border-green-500 text-green-600 dark:text-green-400"
                : "border-red-500 text-red-600 dark:text-red-400"
            }`}
          >
            {book.available ? "Available" : "Not Available"}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-1">
        <Link
          to={`/books/${book._id}`}
          className="inline-flex items-center justify-center gap-1 px-4 py-1.5 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 w-full sm:w-auto transition-colors"
          onClick={() => onBorrow(book)}
        >
          <Eye className="w-4 h-4" />
          Details
        </Link>
        <Button
          variant="default"
          size="sm"
          className="w-full sm:w-auto flex items-center justify-center gap-1 py-1.5"
          onClick={() => onBorrow(book)}
          disabled={book.copies === 0}
        >
          <ShoppingBag className="w-4 h-4" />
          Borrow
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
