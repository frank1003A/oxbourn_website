import { Container, ContainerProps } from "@chakra-ui/react";
import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";

interface PrimaryContainerProps extends ContainerProps {
  name: string;
}
const PrimaryContainer = ({
  children,
  id,
  name,
  ...rest
}: PrimaryContainerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  return (
    <Container
      ref={ref}
      id={id}
      as={"section"}
      py={{ base: 5, sm: 20, md: 20, lg: "100px" }}
      px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
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
