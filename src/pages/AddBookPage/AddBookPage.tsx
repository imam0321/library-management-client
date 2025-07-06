import { useForm, type SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  useAddBookMutation,
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/features/book/bookApi";
import { toast } from "sonner";
import type { IBook } from "@/utils/book.interface";
import BookForm from "@/components/BookForm/BookForm";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useRef } from "react";

const AddBookPage = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = id;

  const { data, isLoading: isFetching } = useGetBookByIdQuery(id!, {
    skip: !id,
  });
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const [addBook, { isLoading: isAdding }] = useAddBookMutation();

  const form = useForm<IBook>({
    defaultValues: {
      title: "",
      author: "",
      genre: "FICTION",
      isbn: "",
      description: "",
      copies: 0,
    },
  });
  const navigate = useNavigate();
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (data?.data) {
      form.reset(data?.data);
    }
  }, [data, form]);

  useEffect(() => {
    const fromEdit = prevPath.current.startsWith("/edit-book");
    const toAdd = location.pathname === "/create-book";

    if (fromEdit && toAdd) {
      form.reset({
        title: "",
        author: "",
        genre: "FICTION",
        isbn: "",
        description: "",
        copies: 0,
      });
    }

    prevPath.current = location.pathname;
  }, [location.pathname, form]);

  const onSubmit: SubmitHandler<IBook> = async (formData) => {
    try {
      if (isEdit) {
        await updateBook({ id: id!, bookData: formData }).unwrap();
        toast.success("Book updated successfully!");
        navigate(`/books/${id}`);
      } else {
        await addBook(formData).unwrap();
        toast.success("Book added successfully!");

        navigate("/books");
      }

      form.reset();
    } catch (error) {
      toast.error(isEdit ? "Failed to update book" : "Failed to add book");
      console.error(error);
    }
  };

  const loading = isEdit ? isFetching || isUpdating : isAdding;

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <Card className="border-2 border-gray-300 dark:border-gray-900">
        <CardHeader>
          <CardTitle className="text-xl">
            {isEdit ? "Update Book" : "Add New Book"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BookForm
            form={form}
            onSubmit={onSubmit}
            isLoading={loading}
            buttonLabel={isEdit ? "Update Book" : "Add Book"}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBookPage;
