import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { IBook } from "@/utils/book.interface";
import { BookOpen, Pencil, Trash2 } from "lucide-react";

interface BookCardProps {
  book: IBook;
  onEdit: (book: IBook) => void;
  onDelete: (id: string) => void;
  onBorrow: (book: IBook) => void;
}

const BookCard = ({ book, onEdit, onDelete, onBorrow }: BookCardProps) => {
  return (
    <Card className="w-full sm:w-[300px] shadow-md hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-lg">{book.title}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {book.description}
        </p>
      </CardHeader>

      <CardContent>
        <p className="text-sm">
          <strong>Author:</strong> {book.author}
        </p>
        <p className="text-sm">
          <strong>Genre:</strong> {book.genre}
        </p>
        <p className="text-sm">
          <strong>ISBN:</strong> {book.isbn}
        </p>
        <p className="text-sm">
          <strong>Copies:</strong> {book.copies}{" "}
          <span className={book.copies > 0 ? "text-green-600" : "text-red-500"}>
            ({book.copies > 0 ? "Available" : "Unavailable"})
          </span>
        </p>
      </CardContent>

      <CardFooter className="flex justify-between gap-2 mt-2">
        <Button variant="outline" size="sm" onClick={() => onEdit(book)}>
          <Pencil className="w-4 h-4 mr-1" />
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(book._id)}
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Delete
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={() => onBorrow(book)}
          disabled={book.copies === 0}
        >
          <BookOpen className="w-4 h-4 mr-1" />
          Borrow
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
