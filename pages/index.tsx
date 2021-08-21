import type { NextPage } from 'next'

import { DannyLogo } from '../components/atoms/danny'
import { Layout } from 'components/templates/layout'
import { Container } from 'components/atoms/container'
import { DashBoard } from 'components/pages/dashboard'

const Home: NextPage = () => {
  return (
    <Layout>
      <DashBoard />
    </Layout>
  )
}

export default Home
