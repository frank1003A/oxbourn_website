import { Box } from "@chakra-ui/react";
import CustomCarousel from "../CustomCarousel";

const Banner = () => {
  return (
    <Box
      // pos={"absolute"}
      bgColor={"white"}
      top={"-50px"}
      h={"100px"}
      px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
      borderBottom={"1px solid"}
      borderBottomColor={"#eee"}
      borderRadius={5}
      overflow={"hidden"}
    >
      <CustomCarousel />
    </Box>
  );
};

export default Banner;
