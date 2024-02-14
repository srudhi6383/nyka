import React, { useEffect, useState } from "react";
import {
  Select,
  Option,
  Button,
  Typography,
  Card,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { TABLE_HEAD } from "../constants/dashboard.constants";
import axios from "axios";
import AddProduct from "../components/AddProduct";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../redux/Products/action";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const token = useSelector((state) => state.auth.token);

  const handleOpen = () => {
    setOpen(!open);
  };

  // product operation CRUD

  const handleDelete = (id) => {
    dispatch(deleteProduct(id, token));
  };
  const handleEdit = (product) => {
    setSelectedProduct(product);
    handleOpen();
  };

  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    color: active === index ? "deep-purple" : "gray",

    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 5) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  useEffect(() => {
    dispatch(fetchProducts(active));
  }, [active]);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-3 my-8">
        <Select label="Filter by gender" className="min-w-max">
          <Option>Male</Option>
          <Option>Female</Option>
        </Select>
        <Select label="Filter by gender">
          <Option>Makeup</Option>
          <Option>Skincare</Option>
          <Option>Haircare</Option>
        </Select>
        <Select label="Filter by gender">
          <Option>Accending</Option>
          <Option>Descending</Option>
        </Select>
        <Button className="bg-app-blue text-white" onClick={handleOpen}>
          Add Product
        </Button>
      </div>
      <Card className="p-3">
        <div className="flex justify-between items-center text-dark-blue font-bold">
          <Typography className="font-semibold">Latest Orders</Typography>
          <div className="flex items-center gap-2">
            <Typography className="font-medium">More</Typography>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
        </div>

        <table className="w-full min-w-max table-auto text-left my-3">
          <thead className="">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head.text}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-3"
                >
                  <div className="flex gap-1 items-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium leading-none opacity-70 "
                    >
                      {head.text}
                    </Typography>
                    {head.icon && <ChevronDownIcon className="h-5 w-5" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => (
              <tr key={index}>
                <td className="flex gap-2 items-center">
                  <Avatar
                    src={product?.picture}
                    variant="circular"
                    className="my-1"
                  />
                  <Typography>{product?.name}</Typography>
                </td>
                <td>
                  <Typography>{product?.gender}</Typography>
                </td>
                <td>
                  <Typography>{product?.category}</Typography>
                </td>
                <td>
                  <Typography>{product?.price}</Typography>
                </td>
                <td>
                  <Typography>{product?.description}</Typography>
                </td>
                <td className="">
                  <Typography className="flex gap-3 items-center m-auto">
                    <PencilIcon
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => handleEdit(product)}
                    />
                    <TrashIcon
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => handleDelete(product._id)}
                    />
                    <EllipsisHorizontalIcon className="h-5 w-5 cursor-pointer" />
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div className="flex items-center gap-2 justify-end mt-3">
        <IconButton
          variant="filled"
          className="flex items-center gap-2 rounded-sm"
          onClick={prev}
          color="blue-gray"
          size="sm"
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
        <div className="flex items-center gap-1">
          <IconButton
            {...getItemProps(1)}
            variant="outlined"
            size="sm"
            className="rounded-sm shadow-none border-2"
          >
            1
          </IconButton>
          <IconButton
            {...getItemProps(2)}
            variant="outlined"
            size="sm"
            className="rounded-sm shadow-none border-2"
          >
            2
          </IconButton>
        </div>
        <IconButton
          variant="filled"
          color="blue-gray"
          size="sm"
          className="flex items-center gap-2 rounded-sm"
          onClick={next}
          disabled={active === 5}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </IconButton>
      </div>
      <AddProduct
        open={open}
        handleOpen={handleOpen}
        editProduct={selectedProduct}
      />
    </div>
  );
};

export default Dashboard;
