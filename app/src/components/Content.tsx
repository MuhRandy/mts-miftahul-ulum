import { Container, Divider, Heading } from "@chakra-ui/react";

type ContentProps = {
  children: any;
  title: string;
};

type SectionProps = {
  children: any;
  title: string;
};

function Content({ children, title }: ContentProps) {
  return (
    <Container>
      <Heading size={"lg"} mb={2}>
        {title}
      </Heading>
      {children}
    </Container>
  );
}

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
