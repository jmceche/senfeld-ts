import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Flex minHeight="100vh" direction="column">
      <Navbar />
      <Flex as="main" flex="1" justify="center" align="center">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Layout;
