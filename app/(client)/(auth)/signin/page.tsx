"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { user } from "../../store/validations";

export default function Signin() {
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const parsedData = user.safeParse(data);
    if (parsedData.success) {
      try {
        const result = await signIn("credentials", {
          redirect: false,
          email: parsedData.data.email,
          password: parsedData.data.password,
        });

        if (result?.error) {
          setError("Invalid email or password");
        } else {
          setError(""); 
        }
      } catch (e: any) {
        setError("An unexpected error occurred. Please try again.");
      }
    } else {
      setError("Please check your email and password.");
    }
  }

  return (
    <div className="bg-orange-50">
      <div className="flex justify-center items-center pt-7">
        <Link href="/">
          <img src="/logo.png" className="h-20" />
        </Link>
      </div>
      <div
        className="flex justify-center items-center"
        style={{ height: "calc(100vh - 6.75rem)" }}
      >
        <div className="flex h-2/3 w-1/2 max-w-4xl">
          <div className="flex flex-col border-2 rounded-lg justify-center items-center w-1/2 h-full bg-orange-400 border-black">
            <form
              className="flex flex-col justify-center items-center"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(new FormData(e.currentTarget));
              }}
            >
              <label htmlFor="email" className="font-manga">
                Email
              </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="border-2 border-black rounded-md p-1 mb-5"
                id="email"
                name="email"
                required
              />
              <label htmlFor="password" className="font-manga">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="border-2 border-black rounded-md p-1 mb-3"
                id="password"
                name="password"
                minLength={8}
                required
              />
              {error && <p className="text-red-600 mb-2 font-manga italic">{error}</p>}
              <button
                type="submit"
                className="p-2 rounded-md mb-2 font-manga font-bold hover:bg-orange-50"
              >
                Sign in
              </button>
            </form>
            
            <div className="flex items-center">
  <div className="flex-grow border-t  w-28 border-black"></div>
  <span className="mx-4 font-manga">or</span>
  <div className="flex-grow border-t border-black w-28"></div>
</div>

            <button
              onClick={() => signIn("google")}
              className="rounded-lg  border-2 border-black bg-white mb-7 mt-3 flex justify-center items-center hover:bg-orange-50"
            >
              <img src="/google1.png" className=""></img>
              <p className="px-2 font-manga">Sign in with google</p>
            </button>
            <Link href="/signin" className="font-manga hover:underline mb-1">
              Forgot Password?
            </Link>
            <Link href="/signup" className="font-manga hover:underline">
              Don't have an account?
            </Link>
          </div>
          <div className="border-2 rounded-lg w-1/2 border-black">
            <img
              src="/zoro.png"
              alt="signup"
              className="h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
