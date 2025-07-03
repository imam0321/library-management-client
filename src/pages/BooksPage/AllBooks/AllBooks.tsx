
import { useGetBooksQuery } from "@/redux/features/book/bookApi";
import BookCard from "../BookCard/BookCard";
import type { IBook } from "@/utils/book.interface";

const AllBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  const books: IBook[] = data?.data || []

  const handleEdit = (book: IBook) => {
    console.log("Edit:", book);
  };

  const handleDelete = (id: string) => {
    console.log("Delete:", id);
  };

  const handleBorrow = (book: IBook) => {
    console.log("Borrow:", book);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">All Books</h2>
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
    </div>
  );
};

export default AllBooks;
