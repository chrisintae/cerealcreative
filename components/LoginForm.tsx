"use client";
import { useState } from "react";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";
import { CiLock } from "react-icons/ci";



type FormValues = {
  email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.email ? values : {},
    errors: !values.email
      ? {
        email: {
          type: "required",
          message: "This is required.",
        },
      }
      : {},
  };
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-[600px] md:mx-auto text-center">
      <CiLock className="text-6xl mx-auto" />
      <span className="block w-full text-xl font-semibold my-6">Enter Email to Continue</span>
      <form
        className="md:max-w-[420px] mx-auto flex flex-col items-center justify-center gap-8"
        onSubmit={onSubmit}
      >
        <input
          className='text-xl w-full border-2 border-gray-300 rounded p-2'
          {...register("email")} type="email" placeholder="Enter Email" required />

        <div className="w-full flex items-center justify-between">
          <Link href='/' className="hover:underline">Cancel</Link>
          <button type="submit" className="text-white bg-pink-500 hover:bg-pink-700 py-2 px-6">Next</button>
        </div>
      </form>
    </div>
  );
}
