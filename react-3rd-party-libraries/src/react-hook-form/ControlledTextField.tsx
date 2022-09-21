import { TextField } from "@mui/material";
import { useController, useForm, UseControllerProps } from "react-hook-form";

type FormValues = {
  FirstName: string;
  LastName: string;
};

const Input = (props: UseControllerProps<FormValues>) => {
  const { field, fieldState } = useController(props);

  return (
    <>
      <TextField {...field} placeholder={props.name} />
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{fieldState.invalid ? "invalid" : "valid"}</p>
    </>
  );
};

export const ControlledTextField = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      FirstName: "",
      LastName: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="FirstName" rules={{ required: true }} />
      <Input control={control} name="LastName" rules={{ required: true }} />
      <input type="submit" />
    </form>
  );
};
