import { Container, Divider, Heading } from "@chakra-ui/react";

type ContentProps = {
  children: any;
  title: string;
  textAlign?: string;
};

type SectionProps = {
  children: any;
  title: string;
};

const Content = ({ children, title, textAlign = "left" }: ContentProps) => {
  return (
    <Container>
      <Heading size={"lg"} mb={2} textAlign={textAlign}>
        {title}
      </Heading>
      {children}
    </Container>
  );
};

const Section = ({ children, title }: SectionProps) => {
  return (
    <Container>
      <Heading size={"md"}>{title}</Heading>
      <Divider />
      {children}
    </Container>
  );
};

Content.Section = Section;

export default Content;
