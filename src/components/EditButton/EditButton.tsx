import { Edit, Pencil } from "lucide-react";
import { Link } from "react-router";

interface EditButtonProps {
  id: string;
  details: boolean;
}

const EditButton = ({ details, id }: EditButtonProps) => {
  return details ? (
    <Link
      to={`/edit-book/${id}`}
      className="inline-flex items-center justify-center gap-1 px-4 py-1.5 border border-gray-300 dark:border-none rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 w-full sm:w-auto transition-colors"
    >
      <Pencil className="w-5 h-5" />
      Edit
    </Link>
  ) : (
    <Link to={`/edit-book/${id}`}>
      <Edit className="w-5 h-5 text-blue-600 hover:scale-110 transition-transform cursor-pointer" />
    </Link>
  );
};

export default EditButton;
