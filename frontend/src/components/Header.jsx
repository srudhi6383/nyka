import React from "react";
import { Avatar, Badge } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:8000";

const Header = () => {
  const token = useSelector((state) => state.auth.token);
  const [user, setUser] = useState({});
  const fetchUser = async () => {
    const res = await axios.get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser(res?.data?.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  console.log(user);

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 items-center w-2/4 px-2 border-b-2 border-gray-600 shadow-gray-200">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          placeholder="Search"
          className="p-2 outline-none bg-transparent w-full"
        />
      </div>
      <div className="flex gap-5">
        <Badge content="5">
          <div className="p-2 bg-blue-500 flex items-center px-4 rounded-md">
            <FontAwesomeIcon icon={faBell} />
          </div>
        </Badge>
        <Avatar src={user?.avatar} alt="avatar" variant="rounded" />
      </div>
    </div>
  );
};

export default Header;
