import { Input, InputProps } from "@chakra-ui/react";

interface CustomInputProps extends InputProps {}

const CustomInput = ({ ...rest }: CustomInputProps) => {
  return (
    <Input
      placeholder={"Your email address"}
      bg={"whiteAlpha.800"}
      border={1}
      borderStyle={"solid"}
      borderColor={"brand.primary"}
      _focus={{
        bg: "whiteAlpha.300",
      }}
      {...rest}
    />
  );
};

export default CustomInput;
