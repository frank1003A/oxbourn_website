import { SimpleGrid, Stack } from "@chakra-ui/react";
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";
import BlogCard from "../blog/BlogCard";

const LatestArticle = () => {
  const blogs = [
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/01/09/18/28/notepad-1130743_1280.jpg",
      tags: ["engineering", "product"],
      title: "navigating uncertainty",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg",
      tags: ["tech", "product"],
      title: "24 reason to adopt trends in tech",
    },
    {
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/01/08/18/26/man-593333_1280.jpg",
      tags: ["writing", "buisness", "plan"],
      title: "10 buisness planning stategies",
    },
  ];
  return (
    <PrimaryContainer
      /**py={{ sm: 10, md: 20, lg: 36 }}
      px={{ sm: 5, md: 10, xl: 32, lg: 16 }} */
      id="#singleblog"
    >
      <Stack m={"auto"} mb={5} alignItems={"center"}>
        <SectionTag title="latest blog posts" />
      </Stack>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        justifyItems={"center"}
        spacing={"2rem"}
        transition={"transform 0.3s ease-in-out"}
      >
        {blogs.map((b, idx) => {
          return <BlogCard key={`${b.title}_${idx}`} {...b} />;
        })}
      </SimpleGrid>
    </PrimaryContainer>
  );
};

export default LatestArticle;

/**<Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Some blog title
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry&apos;s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </Text>
            <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
          arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
          Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
          Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
          arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
          Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
          Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        </Text>
        <Text as="p" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam
          arcu, eu tempus tortor molestie at. Vestibulum pretium condimentum dignissim.
          Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat,
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere.
          Curabitur neque tortor, mattis nec lacus non, placerat congue elit.
        </Text>
      </VStack> */
