import { Flex, Heading } from "@chakra-ui/layout";

interface Props {}

const Footer = (props: Props) => {
  return (
    <Flex
      as="footer"
      background="#1d4ba0"
      justify="center"
      align="center"
      height="5rem"
      mt="5rem"
      shrink={0}
    >
      <Heading color="#fff">Seinfeld</Heading>
    </Flex>
  );
};

export default Footer;
