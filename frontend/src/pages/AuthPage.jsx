import {
  Card,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import RegisterUser from "../components/authentication/RegisterUser";
import Login from "../components/authentication/Login";

const AuthPage = () => {
  return (
    <div className="w-1/2 m-auto bg-gray-50">
      <Card className="p-4 my-5">
        <Tabs value="register" >
          <TabsHeader>
            <Tab value="register">Register</Tab>
            <Tab value="login">Login</Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="register">
              <RegisterUser />
            </TabPanel>
            <TabPanel value="login">
              <Login />
            </TabPanel>
          </TabsBody>
        </Tabs>
      </Card>
    </div>
  );
};

export default AuthPage;
