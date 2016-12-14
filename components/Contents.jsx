import React from 'react';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Card from 'grommet/components/Card';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

const contents = () => (
  <content>
    <Header fixed={false} float={false} splash={false} style={{ paddingLeft: '1rem' }}>
      <Heading>Grommet Boilerplate</Heading>
      <Box flex justify="end" direction="row" responsive={false} />
    </Header>

    <Hero backgroundImage="https://grommet.github.io/img/carousel-1.png">
      <Box colorIndex="grey-2-a" style={{ padding: '1rem' }}>
        <Headline size="small">Hi there.</Headline>
        <Card
          label="Sample Label"
          heading="Sample Heading"
          description="Sample description providing more details."
        />
      </Box>
    </Hero>

    <Footer justify="between">
      <Paragraph margin="none">© 2016 example.com</Paragraph>
    </Footer>
  </content>
);

export default contents;
