import React, { useEffect, useState } from "react";
import Input from "./Input";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Select,
  Button,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
import { addProduct, updateProduct } from "../redux/Products/action";
import { useSelector, useDispatch } from "react-redux";

const AddProduct = ({ open, handleOpen, editProduct }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    // Initialize state with editProduct values when it is provided
    if (editProduct) {
      setName(editProduct.name || "");
      setCategory(editProduct.category || "");
      setGender(editProduct.gender || "");
      setPrice(editProduct.price || "");
      setDescription(editProduct.description || "");
      setAvatar(editProduct.avatar || "");
    }
  }, [editProduct]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = {
      name,
      category,
      gender,
      price,
      description,
      avatar,
    };
    if (editProduct) {
      dispatch(updateProduct(editProduct._id, productData, token));
    } else {
      dispatch(addProduct(productData, token));
    }
    handleOpen();
  };

  const postDetails = async (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "nyka-dashboard");
      data.append("cloud_name", "u-code");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/u-code/image/upload",
        data
      );
      setAvatar(res?.data?.url);
    }
  };
  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>
        {editProduct ? "Edit Product" : "Add New Product"}
      </DialogHeader>
      <DialogBody>
        <form onSubmit={handleSubmit} className="flex gap-3 flex-col ">
          <Input
            type="text"
            label="Product Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Select
            value={category}
            onChange={(e) => setCategory(e)}
            label="Product Category"
            color="blue"
            size="md"
            ripple="light"
          >
            <Option value="">Select...</Option>
            <Option value="Skincare">Skincare</Option>
            <Option value="Makeup">Makeup</Option>
            <Option value="Haircare">Haircare</Option>
          </Select>
          <Input
            type="text"
            label="Product Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          {/* Product Name */}
          <Select
            value={gender}
            onChange={(e) => setGender(e)}
            label="Product Gender"
            color="blue"
            size="md"
            ripple="light"
          >
            <Option value="">Select...</Option>
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
          </Select>

          {/* Product Description */}
          <Textarea
            type="textarea"
            label="Product Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Input
            type="file"
            label="Product Image"
            name="avatar"
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
          />

          {/* Add other form fields using Input component */}
          <Button color="blue" size="md" type="submit">
            Submit
          </Button>
        </form>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AddProduct;
