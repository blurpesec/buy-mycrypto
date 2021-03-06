import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import * as banner from '../../assets/images/banner.png';
import { useSiteMetadata } from '../../hooks';

interface Props {
  title?: string;
  description?: string;
  noIndex?: boolean;
}

const MetaData: FunctionComponent<Props> = ({ title, description, noIndex = false }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <Helmet>
      <title>{`${title ? `${title} | ` : ''}${siteMetadata.title}`}</title>
      <meta name="apple-mobile-web-app-title" content={siteMetadata.title} />
      <meta name="description" content={description ? description : siteMetadata.description} />

      <meta property="og:title" content={title ? title : siteMetadata.title} />
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:description" content={description ? description : siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={`${siteMetadata.baseUrl}${banner}`} />
      <meta property="og:image:alt" content="MyCrypto logo" />

      <meta name="twitter:title" content={title ? title : siteMetadata.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@MyCrypto" />
      <meta name="twitter:creator" content="@MyCrypto" />
      <meta name="twitter:image" content={`${siteMetadata.baseUrl}${banner}`} />
      <meta name="twitter:image:alt" content="MyCrypto logo" />

      <meta name="theme-color" content="#1d334f" />

      <meta name="mobile-web-app-capable" content="yes" />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default MetaData;
