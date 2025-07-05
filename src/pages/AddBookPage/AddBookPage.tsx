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
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";

const AddBookPage = () => {
  const { id } = useParams<{ id: string }>();
  const isEdit = id;

  const { data, isLoading: isFetching } = useGetBookByIdQuery(id!, {
    skip: !id,
  });
  const [updateBook, { isLoading: isUpdating }] = useUpdateBookMutation();
  const [addBook, { isLoading: isAdding }] = useAddBookMutation();

  const form = useForm<IBook>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data) {
      form.reset(data?.data);
    }
  }, [data, form]);

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
      <Card>
        <CardHeader>
          <CardTitle>Add New Book</CardTitle>
        </CardHeader>
        <CardContent>
          <BookForm
            form={form}
            onSubmit={onSubmit}
            isLoading={loading}
            buttonLabel="Update Book"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBookPage;
