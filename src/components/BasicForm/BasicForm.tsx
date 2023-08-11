import { useState } from "react";
import { useForm } from "react-hook-form";

interface IBasicForm {
  name: string;
  age: number;
}

export const BasicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IBasicForm>({
    mode: "all",
  });
  const [isSaved, setIsSaved] = useState(false);
  const onSubmit = (data: IBasicForm) => {
    console.log("data submitted", data);
    setIsSaved(true);
  };
  return (
    <div>
      <div>Basic Form</div>
      {isSaved && <div data-testid="dataSavedMessage">Data was saved </div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 space-y-4">
          <div>
            <label htmlFor="name-input">Name</label>
            <input
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              id="name-input"
              placeholder="Enter your name"
              className="block border w-full"
            />
            {errors.name && (
              <div className="text-xs text-red-400">{errors.name.message}</div>
            )}
          </div>
          <div>
            <label htmlFor="age-input">Age</label>
            <input
              {...register("age", {
                required: { value: true, message: "Age is required" },
              })}
              id="age-input"
              placeholder="Enter your age"
              className="block border w-full"
            />
            {errors.age && (
              <div className="text-xs text-red-400">{errors.age.message}</div>
            )}
          </div>
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
            disabled={!isValid}
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
