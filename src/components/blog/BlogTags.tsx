import { HStack, Tag } from "@chakra-ui/react";

interface Props {
  marginTop?: number;
  tags: any[];
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props;

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            rounded={"sm"}
            variant="solid"
            bgColor={"brand.primary"}
            key={tag}
          >
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default BlogTags;
