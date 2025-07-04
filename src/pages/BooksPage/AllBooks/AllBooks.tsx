import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import BookCard from "../BookCard/BookCard";
import type { IBook } from "@/utils/book.interface";
import CustomPagination from "@/components/CustomPagination/CustomPagination";
import { useState } from "react";

const AllBooks = () => {
  const [page, setPage] = useState(1);
  const limit = 6;

  const { data, isLoading, isError } = useGetBooksQuery({ page, limit });

  const books: IBook[] = data?.data || [];
  const totalPages = data?.meta?.totalPages || 1;
  const currentPage = data?.meta?.page || page;

  const handleEdit = (book: IBook) => {
    console.log("Edit:", book);
  };

  const handleDelete = (id: string) => {
    console.log("Delete:", id);
  };

  const handleBorrow = (book: IBook) => {
    console.log("Borrow:", book);
  };

  if (isLoading)
    return <p className="h-screen text-center mt-10">Loading...</p>;
  if (isError)
    return (
      <p className="text-center mt-10 text-red-600">Error loading books.</p>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">All Books</h2>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onBorrow={handleBorrow}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => {
            setPage(newPage);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}
    </div>
  );
};

export default AllBooks;
