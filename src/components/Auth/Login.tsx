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
    <div className="flex text-white items-center justify-center w-full h-screen ">
      {/* inner container */}
      <div className="flex sm:flex-row flex-col border-primary w-full mx-4 sm:mx-10 md:w-1/2  h-1/2 shadow-white shadow rounded">
        {/* Right Side */}
        <div className="w-full  p-8 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <div>
              <Label className="mb-4 text-white" htmlFor="email">
                Email
              </Label>
              <Input
                name="email"
                className="mt-2"
                id="email"
                placeholder="email@gamil.com"
                type="text"
              />
            </div>
            <div>
              <Label className="mb-4 text-white" htmlFor="password">
                Password
              </Label>
              <Input
                name="password"
                className="mt-2"
                id="password"
                placeholder="password"
                type="password"
              />
            </div>

            <div className="flex justify-center">
              <button
                disabled={isPending}
                type="submit"
                className="inline-flex px-6 py-2  items-center justify-center rounded-[10px] border  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
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
