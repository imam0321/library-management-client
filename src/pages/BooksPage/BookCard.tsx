import BorrowButton from "@/components/BorrowButton/BorrowButton";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton/EditButton";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IBook } from "@/utils/book.interface";
import { Eye } from "lucide-react";
import { Link } from "react-router";

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Card className="w-full sm:w-[350px] rounded-xl shadow-md hover:shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold">{book.title}</CardTitle>
          <div className="flex items-center gap-2">
            <EditButton id={book._id!} details={false} />
            <DeleteButton id={book._id!} details={false} />
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {book.description}
        </p>
      </CardHeader>

      <CardContent className="text-sm flex-grow">
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
          className="inline-flex justify-center items-center gap-1 px-4 py-1.5 rounded-md text-sm font-medium 
          bg-neutral-800 hover:bg-gray-700 text-white dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 transition-colors w-full sm:w-auto"
        >
          <Eye className="w-4 h-4" />
          Details
        </Link>

        <BorrowButton id={book._id!} />
      </CardFooter>
    </Card>
  );
};

export default BookCard;
