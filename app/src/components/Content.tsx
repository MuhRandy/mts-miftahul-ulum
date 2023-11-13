import { Box, Container, Divider, Heading } from "@chakra-ui/react";

type ContentProps = {
  children: any;
  title: string;
  textAlign?: string;
};

type SectionProps = Omit<ContentProps, "textAlign">;

const Content = ({ children, title, textAlign = "left" }: ContentProps) => {
  return (
    <Box>
      <Heading size={{ base: "lg", sm: "xl" }} mb={2} textAlign={textAlign}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <Container>
      <Heading size={{ base: "md", sm: "lg" }}>{title}</Heading>
      <Divider />
      {children}
    </Container>
  );
};

Content.Section = Section;

export default Content;
