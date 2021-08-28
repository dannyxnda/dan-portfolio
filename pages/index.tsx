import type { NextPage } from 'next'

import { Layout } from 'components/templates/layout'
import { Hello } from 'pageComponents/Home'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hello />
    </Layout>
  )
}

export default Home
