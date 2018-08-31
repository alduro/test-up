import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'grid-styled';
import Space from 'styled-space';
import Container from 'ui/Container';
import Routes from 'routes';

import theme from 'theme/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Flex alignItems="center">
      <Container>
        <Space mx={3} my={[2, 3]}>
          <Routes />
        </Space>
      </Container>
    </Flex>
  </ThemeProvider>
);
export default App;
