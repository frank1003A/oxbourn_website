import { SimpleGrid, Stack } from "@chakra-ui/react";
import PrimaryContainer from "../PrimaryContainer";
import SectionTag from "../SectionTag";
import BlogCard from "../blog/BlogCard";

const LatestArticle = () => {
  return (
    <PrimaryContainer id="#singleblog" name="latestposts">
      <Stack m={"auto"} mb={5} alignItems={"center"}>
        <SectionTag title="Latest Posts" />
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

export default LatestArticle;
