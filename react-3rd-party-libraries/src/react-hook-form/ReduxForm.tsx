import { useForm, SubmitHandler } from "react-hook-form";
import { connect } from "react-redux";
import updateAction from "./actions";

type FormValues = {
  firstName: string;
  lastName: string;
};

export const ReduxForm = (props: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => props.updateAction(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} defaultValue={props.firstName} />
      <input {...register("lastName")} defaultValue={props.lastName} />
      <input type="submit" />
    </form>
  );
};
