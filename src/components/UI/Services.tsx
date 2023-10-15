import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BiMailSend, BiServer } from "react-icons/bi";
import { FaStackExchange } from "react-icons/fa";
import CustomCard from "../CustomCard";
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";

const Services = () => {
  return (
    <PrimaryContainer
      /** py={{ base: 5, md: 10, lg: "65px" }}
      px={{ base: 5, sm: 5, md: 10, xl: 32, lg: 16 }} */
      bgColor={"#ebeaf9"}
      bgImage={"url('/assets/footer.png')"}
      bgRepeat={"no-repeat"}
      bgSize={"center"}
      id="#services"
    >
      <Stack align={"center"}>
        <SectionTag title="our services" />
        <Stack
          align={"center"}
          m={"auto"}
          textAlign={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "center",
          }}
          mb={"35px"}
        >
          <Box data-aos="zoom-in-up">
            <Heading
              fontFamily={"inherit"}
              fontSize={{ base: 25, sm: 25, md: 36, lg: 36 }}
              color={"brand.heading"}
              lineHeight={"1.2"}
              fontWeight={700}
            >
              We Provide The Best Service For You
            </Heading>
          </Box>
          <Box data-aos="zoom-in-up">
            <Text
              fontSize={{ base: 14, sm: 14, md: 16, lg: 16 }}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "53%" }}
              margin={"12px auto 0"}
              fontWeight={400}
              color={"brand.text"}
            >
              At Oxbourn Consulting, excellence is our commitment. Our dedicated
              team goes above and beyond to deliver tailored solutions, ensuring
              that you receive nothing less than the best service, every time.
            </Text>
          </Box>
        </Stack>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3 }} gap={5}>
          <CustomCard
            icon={<BiMailSend />}
            heading="Operational Efficiency Optimization"
            description="We specialize in optimizing operations for enhanced productivity and cost savings."
          />
          <CustomCard
            icon={<FaStackExchange />}
            heading="Strategic Planning and Advisory"
            description="We offer expert guidance in developing comprehensive strategic plans that align with a company's goals."
          />
          <CustomCard
            icon={<BiServer />}
            heading="Market Research and Analysis"
            description="Oxbourn Consulting delivers data-driven insights for smart decision-making and effective marketing."
          />
        </SimpleGrid>
      </Stack>
    </PrimaryContainer>
  );
};

export default Services;
