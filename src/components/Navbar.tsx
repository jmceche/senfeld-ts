import { Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <Flex
      as="nav"
      background="#1d4ba0"
      maxW="100vw"
      justify="center"
      align="center"
      mb="2rem"
      height="5rem"
    >
      <Heading color="#fff">
        <Link to="/">Seinfeld</Link>
      </Heading>
    </Flex>
  );
};

export default Navbar;
