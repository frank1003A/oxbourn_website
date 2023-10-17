import { AbsoluteCenter, Box, Stack, Text, useToken } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const GridLoader = dynamic(
  () => import("../../node_modules/react-spinners/GridLoader"),
  {
    ssr: false,
  }
);
const Loader = () => {
  const [brandColor] = useToken("colors", ["brand.primary"]);
  return (
    <Box width={"100%"} height={"100vh"}>
      <AbsoluteCenter>
        <Stack>
          <GridLoader color={brandColor} />
          <Text
            fontFamily={"inherit"}
            margin={"25px 0 0 0"}
            fontSize={"14px"}
            color={"brand.text"}
          >
            Please wait...
          </Text>
        </Stack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Loader;
