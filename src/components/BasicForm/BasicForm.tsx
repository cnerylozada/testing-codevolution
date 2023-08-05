import { useForm } from "react-hook-form";

interface IBasicForm {
  name: string;
  age: number;
}

export const BasicForm = () => {
  const { register, handleSubmit } = useForm<IBasicForm>({
    mode: "all",
  });
  const onSubmit = (data: IBasicForm) => {
    console.log("data submitted", data);
  };
  return (
    <div>
      <div>Basic Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 space-y-4">
          <input
            {...register("name")}
            placeholder="Name"
            className="block border w-full"
          />
          <input
            {...register("age")}
            placeholder="Age"
            className="block border w-full"
          />
        </div>
        <div className="space-x-4">
          <button
            type="button"
            onClick={() => {
              console.log("mock button");
            }}
            className="bg-gray-300"
          >
            Mock button
          </button>
          <button
            type="submit"
            className="bg-green-300"
            data-testid="submitButton"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
