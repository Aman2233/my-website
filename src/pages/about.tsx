import React from 'react'
import HomepageFeatures from '../components/HomepageFeatures'
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

const about = ({children}) => {
    return (
        <Layout title="About Me">
          <main>
            {/* Your content for the new page goes here */}
            <Heading as={'h1'}> Work </Heading>

            <Heading as={'h1'}> Studies </Heading>

            <Heading as= {'h1'}> Projects </Heading>
          </main>
        </Layout>
      );
}

export default about

