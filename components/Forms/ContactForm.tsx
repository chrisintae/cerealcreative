"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { FaTelegramPlane as SendIcon } from "react-icons/fa";

const schema = object({
  name: string().min(3).max(36).required(),
  email: string().email(),
  company: string().required(),
  projectType: string().required(),
  comments: string().min(3).max(240).required(),
}).required();

export default function ContactForm() {
  const router = useRouter();
  const [isForm, setIsForm] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ data, e }: any) => {
    e.preventDefault();
    const formData: any = new FormData(data);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      setIsForm(true);
      reset({
        name: "",
        email: "",
        company: "",
        projectType: "",
        comments: "",
      });

      setTimeout(() => {
        setIsForm(false);

        router.push("/");
      }, 5000);
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="w-full bg-white rounded drop-shadow-lg p-8 m-4 md:max-w-[600px] md:mx-auto text-center">
        {isForm ? (
          <>
            <h1 className="font-cursive text-2xl mb-2">
              let's drop something dope together.
            </h1>
            <p className="max-w-[90%] px-4 mx-auto mb-6">
              Collab on one. Share one. Spark one. Whatever your joint may be,
              we got your tech. Hit us up. Let's future-proof the cannabis
              industry.
            </p>
            <form
              id="contact-form"
              action="/"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="md:max-w-[420px] mx-auto flex flex-col items-center justify-center gap-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="hidden"
                name="form-name"
                value="General Contact Form"
              />
              <input
                className="text-xl w-full border-2 border-gray-300 rounded p-2"
                {...register("name")}
                type="text"
                placeholder="Enter Name"
                required
              />
              <input
                className="text-xl w-full border-2 border-gray-300 rounded p-2"
                {...register("email")}
                type="email"
                placeholder="Enter Email"
                required
              />
              <input
                className="text-xl w-full border-2 border-gray-300 rounded p-2"
                {...register("company")}
                type="text"
                placeholder="Enter Company"
                required
              />
              <select
                className="text-xl w-full bg-white border-2 border-gray-300 rounded p-2 cursor-pointer"
                {...register("projectType")}
                placeholder="Select"
              >
                <option defaultValue="Select Project Type">
                  Select Project Type
                </option>
                <option value="animations">Animations</option>
                <option value="app">App Development</option>
                <option value="site">Website</option>
                <option value="other">Other/Multiple</option>
              </select>
              <textarea
                className="text-xl w-full border-2 border-gray-300 rounded p-2"
                {...register("comments")}
                placeholder="Enter Message"
                required
              />

              <div className="w-full flex items-center justify-between">
                {errors?.name && <p>{errors.name.message?.toString()}</p>}
                {errors?.email && <p>{errors.email.message?.toString()}</p>}
                {errors?.company && <p>{errors.company.message?.toString()}</p>}
                {errors?.projectType && (
                  <p>{errors.projectType.message?.toString()}</p>
                )}
                {errors?.comments && (
                  <p>{errors.comments.message?.toString()}</p>
                )}
              </div>

              <div className="w-full flex items-center justify-between">
                <Link href="/" className="hover:underline">
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="text-white bg-pink-500 hover:bg-pink-700 py-2 px-6"
                >
                  Next
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="w-full flex flex-col items-center justify-center p-6 font-cursive">
            <SendIcon className="text-4xl mb-6" />
            <span className="text-2xl">Thanks and we'll be in touch.</span>
            <h1 className="text-4xl mt-4">_c</h1>
          </div>
        )}
      </div>
    </>
  );
}
