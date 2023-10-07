import { Button } from "@chakra-ui/react";

const PortfolioBtn = ({
  title,
  active,
  handleClick,
}: {
  title: string;
  active: boolean;
  handleClick?: () => void;
}) => {
  return (
    <Button
      pos={"relative"}
      transition={"0.3s"}
      zIndex={1}
      color={active ? "white" : "brand.primary"}
      border={1}
      bg={active ? "brand.primary" : "transparent"}
      w={{ base: "100%", sm: "100%", md: "fit-content" }}
      borderRadius={4}
      borderStyle={active ? "solid" : "dotted"}
      _hover={{
        borderStyle: "solid",
        bg: "brand.primary",
        color: "white",
      }}
      textTransform={"capitalize"}
      onClick={handleClick}
    >
      {title}
    </Button>
  );
};

export default PortfolioBtn;
