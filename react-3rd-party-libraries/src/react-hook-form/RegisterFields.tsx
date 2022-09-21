import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  gender: "female" | "male" | "other";
};
export const RegisterFields = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      <input type="submit" />
    </form>
  );
};
