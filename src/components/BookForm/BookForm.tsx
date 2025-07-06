import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { IBook } from "@/utils/book.interface";
import type { SubmitHandler, UseFormReturn } from "react-hook-form";

interface PropsType {
  form: UseFormReturn<IBook>;
  onSubmit: SubmitHandler<IBook>;
  isLoading: boolean;
  buttonLabel?: string;
}

const BookForm = ({ form, onSubmit, isLoading, buttonLabel }: PropsType) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex md:flex-row flex-col justify-between items-center gap-2">
          <FormField
            control={form.control}
            rules={{ required: "Title is required" }}
            name="title"
            render={({ field }) => (
              <FormItem className="md:w-1/2 w-full">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    placeholder="Book name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            rules={{ required: "Author is required" }}
            name="author"
            render={({ field }) => (
              <FormItem className="md:w-1/2 w-full">
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    value={field.value || ""}
                    placeholder="Author name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-2">
          <FormField
            control={form.control}
            rules={{ required: "Genre is required" }}
            name="genre"
            render={({ field }) => (
              <FormItem className="md:w-1/2 w-full">
                <FormLabel>Genre</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value || ""}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your Genre" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="FICTION">Fiction</SelectItem>
                    <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                    <SelectItem value="SCIENCE">Science</SelectItem>
                    <SelectItem value="HISTORY">History</SelectItem>
                    <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                    <SelectItem value="FANTASY">Fantasy</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            rules={{
              required: "Copies are required",
              min: {
                value: 0,
                message: "Must be a positive number",
              },
            }}
            name="copies"
            render={({ field }) => (
              <FormItem className="md:w-1/2 w-full">
                <FormLabel>Copies</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    value={field.value ?? 0}
                    placeholder="0"
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      field.onChange(value >= 0 ? value : 0);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* TODO  */}
        <FormField
          control={form.control}
          rules={{
            required: "ISBN is required",
          }}
          name="isbn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ISBN</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value || ""}
                  placeholder="e.g., 987-5879475818"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || ""}
                  placeholder="Add Description"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <>
              <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
              Submitting...
            </>
          ) : (
            buttonLabel || "Add Book"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default BookForm;
