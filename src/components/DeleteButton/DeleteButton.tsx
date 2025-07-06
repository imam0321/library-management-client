import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useDeleteBookMutation } from "@/redux/features/book/bookApi";
import { toast } from "sonner";
import DynamicAlertDialog from "../DynamicAlertDialog/DynamicAlertDialog";
import { useState } from "react";

interface DeleteButtonProps {
  id: string;
  details: boolean;
}

const DeleteButton = ({ details, id }: DeleteButtonProps) => {
  const [deleteBook] = useDeleteBookMutation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast.success("Book deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete the book. Please try again.");
    }
  };

  return (
    <>
      <DynamicAlertDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        title="Delete Book?"
        description="Are you sure you want to delete this book?"
        confirmText="Delete"
        cancelText="Cancel"
        confirmClassName="text-white bg-rose-600 hover:bg-rose-700"
        onConfirm={() => handleDelete(id)}
      />
      {details === true ? (
        <Button
          className="flex justify-center items-center gap-2 rounded-lg px-6 py-2 text-white text-base font-semibold transition bg-rose-500 hover:bg-rose-600 hover:text-white w-full sm:w-auto"
          onClick={() => setIsDialogOpen(true)}
        >
          <Trash2 className="w-5 h-5" />
          Delete
        </Button>
      ) : (
        <Trash2
          onClick={() => setIsDialogOpen(true)}
          className="w-5 h-5 text-red-500 hover:scale-110 transition-transform cursor-pointer"
        />
      )}
    </>
  );
};

export default DeleteButton;
