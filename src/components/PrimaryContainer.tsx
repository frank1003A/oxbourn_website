import { Container, ContainerProps } from "@chakra-ui/react";

interface PrimaryContainerProps extends ContainerProps {}
const PrimaryContainer = ({ children, ...rest }: PrimaryContainerProps) => {
  return (
    <Container
      as={"section"}
      py={{ base: 5, sm: 20, md: 20, lg: "100px" }}
      px={{ base: 5, sm: 8, md: 20, xl: 32, lg: 16 }}
      margin={0}
      width={"100%"}
      pos={"relative"}
      maxW={"none"}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default PrimaryContainer;
