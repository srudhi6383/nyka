import React from "react";
import Input from "../Input";
import { Button } from "@material-tailwind/react";
import { signin } from "../../constants/images";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/Auth/action";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };
  console.log(loading, token);
  return (
    <div>
      <div className="w-full h-full m-auto my-4">
        <div className="p-3 m-auto flex flex-col items-center gap-3">
          <div className="p-3 bg-app-blue/25 w-full flex flex-col items-center rounded-lg">
            <img src={signin} className="w-[5rem] h-[5rem]" />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <Input
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button color="blue" size="md" type="submit">
              Login
            </Button>
          </form>
          <Button
            color="red"
            size="md"
            className="w-full"
            onClick={() => {
              setEmail("guest@example.com");
              setPassword("guest@123");
            }}
          >
            Get Guest User Credentials
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
