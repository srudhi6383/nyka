import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import {
  ArchiveBoxIcon,
  BanknotesIcon,
  ShoppingCartIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";

const Analytics = () => {
  return (
    <div className="my-8">
      <div className="grid grid-cols-4 gap-5">
        <Card className="bg-app-blue text-white p-3 rounded-md">
          <div className="flex justify-between">
            <Typography className="text-2xl">Products</Typography>
            <ArchiveBoxIcon className="w-8 h-8" />
          </div>
          <Typography className="text-2xl my-2">300</Typography>
        </Card>
        <Card className="bg-orange-700 text-white p-3 rounded-md">
          <div className="flex justify-between">
            <Typography className="text-2xl">Categroy</Typography>
            <SquaresPlusIcon className="w-8 h-8" />
          </div>
          <Typography className="text-2xl my-2">3</Typography>
        </Card>
        <Card className="bg-green-500 text-white p-3 rounded-md">
          <div className="flex justify-between">
            <Typography className="text-2xl">Total</Typography>
            <BanknotesIcon className="w-8 h-8" />
          </div>
          <Typography className="text-2xl my-2">500</Typography>
        </Card>
        <Card className="bg-red-500 text-white p-3 rounded-md">
          <div className="flex justify-between">
            <Typography className="text-2xl">Order</Typography>
            <ShoppingCartIcon className="w-8 h-8" />
          </div>
          <Typography className="text-2xl my-2">50</Typography>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
