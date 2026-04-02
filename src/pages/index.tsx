import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import IndexSectionCustomComponents1 from '../components/custom-components/IndexSectionCustomComponents1';
import IndexSectionCustomComponents2 from '../components/custom-components/IndexSectionCustomComponents2';
import IndexSectionCustomComponents3 from '../components/custom-components/IndexSectionCustomComponents3';
import IndexSectionCustomComponents4 from '../components/custom-components/IndexSectionCustomComponents4';
import IndexSectionCustomComponents5 from '../components/custom-components/IndexSectionCustomComponents5';
import IndexSectionCustomComponents6 from '../components/custom-components/IndexSectionCustomComponents6';
import IndexSectionCustomComponentsPricing from '../components/custom-components/IndexSectionCustomComponentsPricing';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>BulBAI — Homepage</title>
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/shuffle-for-bootstrap.png'
        />
      </Head>
      <Script src='/js/global-36957.js' strategy='afterInteractive' />
      <IndexSectionCustomComponents1 />
      <IndexSectionCustomComponents2 />
      <IndexSectionCustomComponents3 />
      <IndexSectionCustomComponents4 />
      <IndexSectionCustomComponentsPricing />
      <IndexSectionCustomComponents5 />
      <IndexSectionCustomComponents6 />
    </>
  );
};

export default Index;

