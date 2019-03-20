import React from 'react';
import { Link } from 'gatsby';

import { HomeHeader } from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout header={<HomeHeader title="sando" />}>
    <SEO title="About" />
    <div className="pure-u-padding-one">
      <h3>The website:</h3>
      <p>
        The humble egg salad sando (short for sandwich). So simple yet so
        delicious.
      </p>
      <br />
      <h3>The author:</h3>
      <p>Software engineer by trade, but I'm also a serial dabbler.</p>
    </div>
  </Layout>
);

export default AboutPage;
