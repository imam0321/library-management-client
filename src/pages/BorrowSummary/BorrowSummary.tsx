import Loader from "@/components/Loader/Loader";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
  TableHead as TableHeadCell,
} from "@/components/ui/table";
import { useGetBorrowSummaryQuery } from "@/redux/features/borrow/borrowApi";

interface BorrowSummaryItem {
  totalQuantity: number;
  book: {
    title: string;
    isbn: string;
  };
}

const BorrowSummary = () => {
  const {
    data: response,
    isLoading,
    error,
  } = useGetBorrowSummaryQuery(undefined);

  if (isLoading) return <Loader />;
  if (error)
    return (
      <div className="p-4 text-center text-red-600 dark:text-red-400">
        Error loading borrow summary
      </div>
    );

  const borrowSummary: BorrowSummaryItem[] = response?.data || [];

  return (
    <div className="max-w-4xl bg-white dark:bg-neutral-900 border-2 border-gray-300 dark:border-gray-900 rounded-xl shadow-md lg:p-6 p-4 lg:mx-auto mx-2 my-10">
      <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
        Borrowed Books Summary
      </h2>
      <Table className="border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden">
        <TableHeader className="bg-gray-50 dark:bg-neutral-700">
          <TableRow>
            <TableHeadCell className="p-4 text-left text-gray-900 dark:text-white font-medium">
              #
            </TableHeadCell>
            <TableHeadCell className="p-4 text-left text-gray-900 dark:text-white font-medium">
              Book Name
            </TableHeadCell>
            <TableHeadCell className="p-4 text-left text-gray-900 dark:text-white font-medium">
              ISBN
            </TableHeadCell>
            <TableHeadCell className="p-4 text-left text-gray-900 dark:text-white font-medium">
              Total Books
            </TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {borrowSummary.map((item, index) => (
            <TableRow
              key={item.book.isbn}
              className={
                index % 2 === 0
                  ? "bg-white dark:bg-neutral-900"
                  : "bg-gray-50 dark:bg-neutral-800"
              }
            >
              <TableCell className="p-4 text-gray-900 dark:text-white">
                {index + 1}
              </TableCell>
              <TableCell className="p-4 text-gray-900 dark:text-white">
                {item.book.title}
              </TableCell>
              <TableCell className="p-4 text-gray-900 dark:text-white">
                {item.book.isbn}
              </TableCell>
              <TableCell className="p-4 font-semibold text-gray-900 dark:text-white">
                {item.totalQuantity}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BorrowSummary;
