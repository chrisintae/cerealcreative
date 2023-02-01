// react hook form contact form
import React from "react";
import { useForm, Resolver } from "react-hook-form";

interface FormValues {
  name: string;
  company: string;
  email: string;
  message: string;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function ConnectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <input {...register("name")} placeholder="Name" />
      {errors?.name && <p>{errors.name.message}</p>}

      <input {...register("email")} placeholder="Email" />

      <input
        {...register("company")}
        placeholder="Company Name, if applicable"
      />

      <input
        {...register("company")}
        placeholder="Company Website, if applicable"
      />

      <input
        {...register("message")}
        placeholder="What's your project details; e.g. creative, website, animations, email marketing, etc"
      />

      <input type="submit" />
    </form>
  );
}
