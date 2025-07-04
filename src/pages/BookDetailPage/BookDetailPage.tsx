import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetBookByIdQuery } from "@/redux/features/book/bookApi";
import type { IBook } from "@/utils/book.interface";
import { useParams, useNavigate } from "react-router";
import { Pencil, ShoppingBag, Trash2 } from "lucide-react";

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading } = useGetBookByIdQuery(id!);

  const book: IBook | undefined = data?.data;

  const handleEdit = () => {
    if (book?._id) {
      navigate(`/books/edit/${book._id}`);
    }
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this book?")) {
      console.log("Deleting book with ID:", book?._id);
      // Call your delete mutation here
      navigate("/books");
    }
  };

  const handleBorrow = () => {
    console.log("Borrowing book:", book);
    // Trigger borrow mutation/modal
  };

  if (isLoading) {
    return (
      <p className="h-screen flex items-center justify-center text-lg font-medium">
        Loading book details...
      </p>
    );
  }

  if (!book) {
    return <p className="text-center text-red-500 mt-10">Book not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white dark:bg-neutral-900 border-2 border-gray-300 dark:border-gray-900 shadow-lg rounded-2xl p-8 space-y-8">
        {/* Title and Author */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            {book.title}
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            by <span className="italic font-medium">{book.author}</span>
          </p>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4">
          <Badge className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
            Genre: {book.genre}
          </Badge>
          <Badge className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
            ISBN: {book.isbn}
          </Badge>
          <Badge className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
            Copies: {book.copies}
          </Badge>
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

        {/* Description */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Description
          </h3>
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide">
            {book.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition hover:bg-gray-100 dark:hover:bg-neutral-800"
              onClick={handleEdit}
            >
              <Pencil className="w-5 h-5" />
              Edit
            </Button>
            <Button
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-white text-base font-semibold transition bg-rose-500  hover:bg-rose-600 hover:text-white"
              onClick={handleDelete}
            >
              <Trash2 className="w-5 h-5" />
              Delete
            </Button>
          </div>

          <Button
            variant="default"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition hover:scale-105"
            onClick={handleBorrow}
            disabled={!book.available}
          >
            <ShoppingBag className="w-5 h-5" />
            Borrow
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
