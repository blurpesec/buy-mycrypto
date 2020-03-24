import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import MoonpayWidget from '../components/MoonpayWidget';
import Container from '../components/ui/Container';
import PageContainer from '../components/ui/PageContainer';
import breakpoint from '../theme/breakpoints';

const HomeContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  ${breakpoint('lg', 'max')`
    flex-direction: column;
  `};
`;

const Index: FunctionComponent = () => (
  <PageContainer>
    <HomeContainer>
      <MoonpayWidget />
    </HomeContainer>
  </PageContainer>
);

export default Index;
