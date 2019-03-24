import React from 'react';

import { HomeHeader } from '../components/header';
import About from '../components/about';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout header={<HomeHeader title="sando" />}>
    <SEO title="About" />
    <About />
  </Layout>
);

export default AboutPage;
