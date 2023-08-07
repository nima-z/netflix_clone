"use client";
import { ChangeEvent, useState } from "react";
import Input from "./Input";

export default function AuthBox() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signupMode, setSignupMode] = useState<boolean>(false);

  function toggleMode() {
    setSignupMode((prev) => !prev);
  }
  return (
    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
      <h2 className="text-white text-4xl mb-8 font-semibold">
        {signupMode ? "Register" : "Login"}
      </h2>
      <div className="flex flex-col gap-4">
        {signupMode && (
          <Input
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
        )}
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-500 transition">
        Login
      </button>
      <p className="text-neutral-500 mt-12">
        Do not have an account?{" "}
        <span
          className="text-white ml-1 hover:underline cursor-pointer"
          onClick={toggleMode}
        >
          Create an account
        </span>
      </p>
    </div>
  );
}
