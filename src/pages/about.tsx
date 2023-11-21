import React from 'react'
import HomepageFeatures from '../components/HomepageFeatures'
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const about = ({children}) => {
    return (
        <Layout title="New Page Title">
          <main>
            {/* Your content for the new page goes here */}
            <Heading as={'h1'}>New Page Content</Heading>
          </main>
        </Layout>
      );
}

export default about

