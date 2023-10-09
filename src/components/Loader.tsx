import { AbsoluteCenter, Box, Spinner, Stack, Text } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box width={"100%"} height={"100vh"}>
      <AbsoluteCenter>
        <Stack>
          <Spinner size="xl" thickness="8px" color="brand.primary" />
          <Text>Please wait...</Text>
        </Stack>
      </AbsoluteCenter>
    </Box>
  );
};

export default Loader;
