import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import img from "../images/1.jpg";
import React from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { Link } from "react-router-dom";
import "./SignUpForm.css";

const auth = getAuth(app);

export default function SignUpform() {
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Sign Up Successful");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="p-0 md:p-10 ">
      <div className="flex flex-col lg:flex-row justify-between  bg-blue-100 p-20 border rounded-xl my-auto items-center">
        <div>
          <img
            className="h-full w-full mb-16 lg:mb-0 lg:w-4/5 xl:w-3/6  rounded-lg shadow-xl"
            src={img}
            alt=""
          />
        </div>
        <div>
          <Card color="transparent" shadow={false}>
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign Up
              </Typography>
            
            </CardHeader>
            <Typography color="gray" className="my-1 font-bold text-lg text-black tracking-wider text-center">
                Enter your details to register.
              </Typography>
            <form
              onSubmit={handleSignUp}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input size="lg" label="Name" name="name" required/>
                <Input size="lg" label="Email" name="email" required/>
                <Input
                  type="password"
                  size="lg"
                  label="Password"
                  name="password"
                  required
                  
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-blue-500"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button type="submit" className="mt-6 tracking-wider text-md" fullWidth>
                Register
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-900 hover:underline"
                >
                  Sign In
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
