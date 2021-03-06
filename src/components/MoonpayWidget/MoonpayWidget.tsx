import { Location } from '@reach/router';
import queryString from 'query-string';
import React from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  display: block;
  flex: 1;
  justify-content: center;
  align-items: center;
  outline: none;
  min-height: 675px;
`;

const MoonpayWidgetIFrame = styled.iframe`
  height: 100%;
  width: 100%;
  min-height: 425px;
`;

interface Props {
  search?: queryString.ParsedQuery;
}

// tslint:disable-next-line: no-any
const withLocation = (ComponentToWrap: any) => (props: Props) => (
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
);

const MoonpayWidget = ({ search }: Props) => {
  console.debug('[MoonpayWidget]: search', search)
  let moonpaySrcAddress =
    'https://buy-staging.moonpay.io?apiKey=pk_test_3aM6rCKM7VxglAXwpo6xEm031iQWBbZq&colorCode=%23163150';
  if (search && search.currencyCode && search.walletAddress) {
    moonpaySrcAddress += '&walletAddress=' + search.walletAddress;
    moonpaySrcAddress += '&currencyCode=' + search.currencyCode;
  }
  console.debug('[MoonpayWidget]: moonpaySrcAddress', moonpaySrcAddress)
  return (
    <WidgetContainer tabindex="-1" role="group">
      <MoonpayWidgetIFrame
        allow="accelerometer; autoplay; camera; gyroscope; payment"
        frameBorder={0}
        src={moonpaySrcAddress}
      >
        <p>Your browser does not support iframes.</p>
      </MoonpayWidgetIFrame>
    </WidgetContainer>
  );
};

export default withLocation(MoonpayWidget);
