import BorrowBookForm from "@/components/BorrowBookForm/BorrowBookForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { useBorrowBookMutation } from "@/redux/features/borrow/borrowApi";
import { toast } from "sonner";
import { useGetBookByIdQuery } from "@/redux/features/book/bookApi";

export interface IBorrow {
  book: string;
  quantity: number;
  dueDate: string;
}

const BorrowBook = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const [borrowBook, { isLoading }] = useBorrowBookMutation();
  const { data } = useGetBookByIdQuery(bookId!);
  const copies = data?.data?.copies;

  const form = useForm<IBorrow>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IBorrow> = async (data) => {
    if (copies === 0) {
      toast.error("Book not availability.");
      return;
    }

    if (data.quantity >= copies) {
      toast.error(`Only ${copies} copies are available to borrow.`);
      return;
    }

    const formData = {
      book: bookId,
      quantity: data.quantity,
      dueDate: data.dueDate ? new Date(data.dueDate).toISOString() : "",
    };

    try {
      await borrowBook(formData).unwrap();
      toast.success("Book borrowed successfully!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to borrow book.");
    }
  };

  return (
    <div className="max-w-sm mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Borrow Book</CardTitle>
        </CardHeader>
        <CardContent>
          <BorrowBookForm
            form={form}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default BorrowBook;
