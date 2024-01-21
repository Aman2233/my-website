import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from '../css/custom.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="avatar">
            <img className="avatar-img" src="/img/aman.png" alt="Amanueal's Cat Picture" />
          </div>

        </div>

      </header>


      <div>
        <h1 className='avatar-title'>Amanueal Fasil Mamo</h1>
        <p className='avatar-title'> 4th Year student at Flinders University </p>
        <p className='avatar-title'> Currently doing personal projects to boost my outcomes</p>




      </div>




    </>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}