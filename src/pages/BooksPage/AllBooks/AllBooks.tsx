
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
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
  );
};

export default AllBooks;
