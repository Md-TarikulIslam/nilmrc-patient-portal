import { Card, Input, Button, Typography } from "@material-tailwind/react";
import img from "../images/1.jpg";
import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";

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
        alert('Login Successful')
      })
      .catch((error) => console.error("login is not successful", error));
  };

  return (
    <div className="form flex flex-col pt-16 lg:flex-row items-center justify-evenly lg:pt-48">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign In
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to login.
          </Typography>
          <form
            onSubmit={handleSignIn}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Email" name="email" />
              <Input
                type="password"
                size="lg"
                label="Password"
                name="password"
              />
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              Login
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Don't have an account?{" "}
              <Link
                to="/"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
}
