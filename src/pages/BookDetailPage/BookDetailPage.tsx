import { Badge } from "@/components/ui/badge";
import { useGetBookByIdQuery } from "@/redux/features/book/bookApi";
import type { IBook } from "@/utils/book.interface";
import { useParams, Navigate } from "react-router";
import EditButton from "@/components/EditButton/EditButton";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import BorrowButton from "@/components/BorrowButton/BorrowButton";
import Loader from "@/components/Loader/Loader";

const BookDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetBookByIdQuery(id!);

  const book: IBook = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  if (!book) {
    return <Navigate to="/" />;
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
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <EditButton id={book._id!} details={true} />
            <DeleteButton id={book._id!} details={true} />
          </div>
          <BorrowButton id={book._id!} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
