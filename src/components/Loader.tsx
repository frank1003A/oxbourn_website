import { AbsoluteCenter, Box, Stack, Text } from "@chakra-ui/react";
import { GridLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box width={"100%"} height={"100vh"}>
      <AbsoluteCenter>
        <Stack>
          <GridLoader color="#2F3C7E" />
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
