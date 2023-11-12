import { VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Content from "./Content";
import Article from "./Article";

const Articles = () => {
  return (
    <Content title="Artikel" textAlign="center">
      <Wrap justify={"center"}>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
        <WrapItem>
          <Article />
        </WrapItem>
      </Wrap>
    </Content>
  );
};

export default Articles;
