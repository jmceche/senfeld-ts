import React from "react";
import { Flex, Heading, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <Flex justify="center" align="center" direction="column">
        <Heading>404</Heading>
        <Text>This page doesn't exist</Text>
        <Link as={RouterLink} to="/" mt="5rem">
          <strong> Go to main page </strong>
        </Link>
      </Flex>
    </Layout>
  );
};

export default NotFound;
