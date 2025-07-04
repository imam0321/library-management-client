import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IBook } from "@/utils/book.interface";


const AddBookPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IBook>();

  const onSubmit = (data: IBook) => {
    console.log("Book Data:", data);
    // TODO: Call API to add book
    reset();
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <Card>
        <CardHeader>
          <CardTitle>Add New Book</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex md:flex-row flex-col justify-between items-center gap-2">
              <div className="md:w-1/2 w-full">
                <Label className="mb-2">Title</Label>
                <Input
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>
              <div className="md:w-1/2 w-full">
                <Label className="mb-2">Author</Label>
                <Input
                  {...register("author", { required: "Author is required" })}
                />
                {errors.author && (
                  <p className="text-red-500 text-sm">
                    {errors.author.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between items-center gap-2">
              <div className="md:w-1/2 w-full">
                <Label className="mb-2">Genre</Label>
                <Select
                  onValueChange={(value) => setValue("genre", value)}
                  defaultValue=""
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="FICTION">Fiction</SelectItem>
                    <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                    <SelectItem value="SCIENCE">Science</SelectItem>
                    <SelectItem value="HISTORY">History</SelectItem>
                    <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                    <SelectItem value="FANTASY">Fantasy</SelectItem>
                  </SelectContent>
                </Select>
                {errors.genre && (
                  <p className="text-red-500 text-sm">{errors.genre.message}</p>
                )}
              </div>

              <div className="md:w-1/2 w-full">
                <Label className="mb-2">ISBN</Label>
                <Input
                  {...register("isbn", { required: "ISBN is required" })}
                />
                {errors.isbn && (
                  <p className="text-red-500 text-sm">{errors.isbn.message}</p>
                )}
              </div>

              <div className="md:w-1/2 w-full">
                <Label className="mb-2">Copies</Label>
                <Input
                  type="number"
                  defaultValue={1}
                  {...register("copies", {
                    required: "Copies is required",
                    min: 1,
                  })}
                />
                {errors.copies && (
                  <p className="text-red-500 text-sm">
                    {errors.copies.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label className="mb-2">Description</Label>
              <Textarea
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full">
              Add Book
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBookPage;
