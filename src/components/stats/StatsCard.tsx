import { Stack, Text } from "@chakra-ui/react";

const StatsCard = ({
  stat,
  description,
}: {
  stat: string;
  description: string;
}) => {
  return (
    <Stack align={"center"}>
      <Text
        as={"span"}
        color={"white"}
        fontSize={"69px"}
        fontWeight={"700"}
        lineHeight={1}
      >
        {stat}
      </Text>
      <Text
        as={"span"}
        fontSize={"19px"}
        textTransform={"capitalize"}
        fontWeight={"400"}
        lineHeight={"2.5"}
        color={"white"}
      >
        {description}
      </Text>
    </Stack>
  );
};

export default StatsCard;
