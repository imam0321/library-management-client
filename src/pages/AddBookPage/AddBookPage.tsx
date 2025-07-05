import { useForm, type SubmitHandler } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAddBookMutation } from "@/redux/features/book/bookApi";
import { toast } from "sonner";
import type { IBook } from "@/utils/book.interface";
import BookForm from "@/components/BookForm/BookForm";
import { useNavigate } from "react-router";

const AddBookPage = () => {
  const [addBook, { isLoading }] = useAddBookMutation();
  const form = useForm<IBook>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IBook> = async (data) => {
    try {
      await addBook(data).unwrap();
      toast.success("Book added successfully!");
      form.reset();
      navigate("/books");
    } catch (error) {
      toast.error("Failed to add book");
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Add New Book</CardTitle>
        </CardHeader>
        <CardContent>
          <BookForm form={form} onSubmit={onSubmit} isLoading={isLoading} />
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBookPage;
