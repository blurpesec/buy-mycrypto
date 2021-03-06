import React, { FunctionComponent } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'typeface-lato';
import 'typeface-source-code-pro';
import { LEFT_HEADER_ITEMS } from '../../config/navigation';
import Header from '../Header';
import Link from '../Link';
import MetaData from '../MetaData';
import Footer from '../ui/Footer';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby {
    margin: 0;
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.45rem;
    font-family: ${({ theme }) => theme.fontFamily};
    background: ${({ theme }) => theme.background};
  }
`;

const Layout: FunctionComponent = ({ children }) => (
  <StyledLayout>
    <GlobalStyle />
    <MetaData />

    <Header
      left={LEFT_HEADER_ITEMS.map(item => (
        <Link
          key={`navigation-${item.to}`}
          to={item.to}
          external={item.external}
        >
          {item.title}
        </Link>
      ))}
      right={[<></>]}
    />

    {children}

    <Footer />
  </StyledLayout>
);

export default Layout;
