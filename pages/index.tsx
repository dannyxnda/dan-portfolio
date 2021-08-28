import type { NextPage } from 'next'

import { Layout } from 'components/templates/layout'
import HomePage from 'pageComponents/Home'

const Home: NextPage = () => {
  return (
    <Layout isHeaderShown={false} isFooterShown={true}>
      <HomePage />
    </Layout>
  )
}

export default Home
