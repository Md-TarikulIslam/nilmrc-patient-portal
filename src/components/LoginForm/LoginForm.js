import {
  Card,
  Input,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import img from "../images/2.avif";
import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";
import './LoginForm.css'

const auth = getAuth(app);

export default function LoginForm() {
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login in successful", user);
        alert("Login Successful");
      })
      .catch((error) => console.error("login is not successful", error));
  };

  return (
  <div className="p-0 md:p-10">
      <div className="flex flex-col lg:flex-row justify-between  bg-blue-100 p-20 border rounded-xl my-auto items-center">
      <div>
        <img className="login mb-16 lg:mb-0 lg:w-4/5 xl:w-3/6  rounded-lg shadow-xl" src={img} alt="" />
      </div>
      <div>
        <Card color="transparent" shadow={false}>
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Login
            </Typography>
          </CardHeader>
          <Typography
            color="gray"
            className="my-1 font-bold text-lg text-black tracking-wider text-center"
          >
            Enter your details to login.
          </Typography>
          <form
            onSubmit={handleSignIn}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Email" name="email" required/>
              <Input
                type="password"
                size="lg"
                label="Password"
                name="password"
                required
              />
            </div>

            <Button type="submit" className="mt-6 tracking-wider text-md" fullWidth>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link
                to="/"
                className="font-medium text-blue-500 transition-colors hover:text-blue-900 hover:underline"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  </div>
  );
}
