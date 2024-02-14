import React, { useState } from "react";
import Input from "../Input";
import { Button } from "@material-tailwind/react";
import { signup } from "../../constants/images";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/Auth/action";
import axios from "axios";

const RegisterUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
    password: "",
  });

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const postDetails = async (pics) => {
    try {
      if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "nyka-dashboard");
        data.append("cloud_name", "u-code");

        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/u-code/image/upload",
          data
        );
        setUser({ ...user, avatar: res?.data?.url });
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(user.name, user.email, user.password, user.avatar));
  };

  return (
    <div className="w-full h-full m-auto my-4">
      <div className="p-3 m-auto flex flex-col items-center gap-3">
        <div className="p-3 bg-app-blue/25 w-full flex flex-col items-center rounded-lg">
          <img src={signup} className="w-[5rem] h-[5rem]" alt="signup" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <Input
            type="text"
            label="Name"
            name="name"
            value={user.name}
            onChange={handleOnChange}
            required
          />
          <Input
            type="text"
            label="Email"
            name="email"
            value={user.email}
            onChange={handleOnChange}
            required
          />
          <Input
            type="file"
            label="Your Image"
            name="avatar"
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={user.password}
            onChange={handleOnChange}
            required
          />
          <Button color="blue" size="md" type="submit" disabled={loading}>
            Register
          </Button>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
