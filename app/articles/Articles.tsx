import { Wrap, WrapItem } from '@chakra-ui/react';
import Content from '../src/components/Content';
import Article from '../src/components/Article';

const Articles = () => {
  return (
    <Content title="Artikel">
      <Wrap justify={'center'}>
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
