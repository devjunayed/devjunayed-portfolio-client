/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { FormEvent, useEffect } from "react";
import { useUserLogin } from "@/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
import { CircleLoader } from "react-spinners";
import { useUser } from "@/context/user.provider";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const Login = () => {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const router = useRouter();
  const { mutate: handleLogin, isPending, isSuccess } = useUserLogin();
  const { user } = useUser();

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    handleLogin(data);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      }
      if (user) {
        router.push("/");
      }
    }
  }, [isPending, isSuccess, user]);

  return (
    <div className="flex items-center justify-center w-full h-screen ">
      {/* inner container */}
      <div className="flex sm:flex-row flex-col border-primary w-full mx-4 sm:mx-10 md:w-1/2  h-1/2 shadow-white shadow rounded">
        {/* Right Side */}
        <div className="w-full  p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="mb-4" htmlFor="email">Email</Label>
            <Input name="email" id="email" placeholder="email@gamil.com" type="text" />
          </div>
          <div>
            <Label className="mb-4" htmlFor="password">Password</Label>
            <Input name="password" id="password" placeholder="password" type="password" />
          </div>
           
            <div className="flex justify-center">
              <button
                disabled={isPending}
                type="submit"
                className="inline-flex mx h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                {isPending ? (
                  <CircleLoader size={24} color="white" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
