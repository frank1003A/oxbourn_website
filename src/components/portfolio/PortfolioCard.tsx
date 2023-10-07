import { addAlpha } from "@/utils";
import {
  AbsoluteCenter,
  Box,
  Card,
  CardBody,
  Circle,
  Stack,
  Text,
  useToken,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaLink } from "react-icons/fa";

interface PortfolioCardProps {
  img: string;
  category: string;
  alt: string;
}

const PortfolioCard = ({ img, category, alt }: PortfolioCardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isOver, setIsOver] = useState(false);
  const [brandColor] = useToken("colors", ["brand.primary"]);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }

    const card = cardRef.current as HTMLDivElement;
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
    <motion.div layout>
      <Card
        transition={"all 0.5s"}
        borderRadius={"0px"}
        pos={"relative"}
        textAlign={"center"}
        overflow={"hidden"}
        shadow={"none"}
        position={"relative"}
        zIndex={1}
        maxW={{ base: "240px", sm: "300px", md: "none", lg: "none" }}
        maxH={{ base: "100%", sm: "none", md: "none", lg: "none" }}
        w={350}
        h={240}
        minH={"100px"}
        role="group"
      >
        <CardBody
          p={0}
          w={"100%"}
          h={"100%"}
          transition={"all .5s"}
          overflow={"hidden"}
        >
          <Box
            ref={cardRef}
            w={"100%"}
            h={"100%"}
            zIndex={2}
            bgColor={"transparent"}
            overflow={"hidden"}
            _before={{
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              background: addAlpha(brandColor, 0.5) as string,
              left: "0",
              right: "0",
              opacity: 0,
              zIndex: "2",
              transition: "background-color .5s",
            }}
            bgImage={img}
            bgSize={"cover"}
            bgPosition={"center"}
            transition={"all .5s"}
            _groupHover={{
              transform: "scale(1.2)",
              _before: {
                opacity: 1,
              },
            }}
            cursor={"pointer"}
          >
            <AbsoluteCenter zIndex={3}>
              <Stack
                align={"center"}
                opacity={isOver ? 1 : 0}
                transition={".5s"}
                transform={isOver ? "translateY(0)" : "translateY(50px)"}
              >
                <Circle
                  bgColor={"white"}
                  rounded={"full"}
                  p={4}
                  color={"brand.primary"}
                >
                  <FaLink />
                </Circle>
                <Text
                  as={"span"}
                  color={"white"}
                  fontWeight={500}
                  textTransform={"capitalize"}
                >
                  {category}
                </Text>
                <Text
                  as={"span"}
                  color={"white"}
                  fontWeight={600}
                  textTransform={"capitalize"}
                >
                  {alt}
                </Text>
              </Stack>
            </AbsoluteCenter>
          </Box>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;
