import type { NextPage } from 'next'

import { Layout } from 'components/templates/layout'
import HomePage from 'pageComponents/Home'

const Home: NextPage = () => {
  return (
    <Layout
      isHeaderShown={false}
      isFooterShown={false}
      description="Nguyen Duc Anh | Danny"
    >
      <HomePage />
    </Layout>
  )
}

export default Home
