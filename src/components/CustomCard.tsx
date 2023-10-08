import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const CustomCard = ({
  icon,
  heading,
  description,
}: {
  icon: React.JSX.Element;
  heading: string;
  description: string;
}) => {
  const cardRef = useRef(null);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    let card = cardRef.current as HTMLDivElement;

    card.addEventListener("mouseenter", () => {
      setIsOver(true);
    });
    card.addEventListener("mouseleave", () => {
      setIsOver(false);
    });

    return () => {
      card.removeEventListener("mouseenter", () => {
        setIsOver(true);
      });
      card.removeEventListener("mouseleave", () => {
        setIsOver(false);
      });
    };
  }, []);
  return (
    <Box data-aos="fade-up">
      <Card
        ref={cardRef}
        p={"42px 25px 32px 25px"}
        transition={"0.5s"}
        borderRadius={"5px"}
        pos={"relative"}
        zIndex={1}
        textAlign={"center"}
        overflow={"hidden"}
        shadow={"none"}
        _before={{
          content: `""`,
          pos: "absolute",
          h: isOver ? "100%" : "6%",
          w: isOver ? "100%" : "6%",
          right: 0,
          bottom: 0,
          borderRadius: "5px",
          zIndex: -1,
          bg: "brand.primary",
          transition: "0.5s",
        }}
      >
        <CardBody p={"0px"}>
          <Stack align={"center"}>
            <Box>
              <Box
                bgColor={isOver ? "white" : "#f3f1fb"}
                borderRadius={"5px"}
                color={"brand.primary"}
                p={"1rem"}
                fontSize={"2rem"}
              >
                {icon}
              </Box>
            </Box>
            <Box w="100%" margin={"19px 0 11px 0"}>
              <Heading
                as={"h2"}
                fontSize={"22px"}
                fontWeight={700}
                transition={"0.5s"}
                lineHeight={"28px"}
                color={isOver ? "white" : "brand.heading"}
              >
                {heading}
              </Heading>
            </Box>
            <Box w="100%">
              <Text
                fontSize={"16px"}
                fontWeight={400}
                textAlign={"center"}
                transition={"0.5s"}
                lineHeight={"29px"}
                color={isOver ? "white" : "brand.text"}
                noOfLines={3}
              >
                {description}
              </Text>
            </Box>
            <Link
              href={"#"}
              style={{
                fontSize: "16px",
                color: isOver ? "white" : "#2F3C7E",
                textDecoration: "underline",
              }}
            >
              Learn More
            </Link>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CustomCard;
