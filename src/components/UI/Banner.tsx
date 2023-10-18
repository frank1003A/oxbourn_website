import { Box } from "@chakra-ui/react";
import CustomMarquee from "../CustomMarquee";

const Banner = () => {
  return (
    <Box
      // pos={"absolute"}
      bgColor={"brand.primary"}
      color={"white"}
      top={"-50px"}
      h={"100px"}
      px={{ base: 5, sm: 5, md: 20, xl: 32, lg: 16 }}
      borderBottom={"1px solid"}
      borderBottomColor={"#eee"}
      overflow={"hidden"}
      bgImage={"/assets/footer.png"}
      bgPos={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
      <CustomMarquee />
    </Box>
  );
};

export default Banner;
