import React from 'react'
import Head from 'next/head'
import { StyledLayout } from './index.styled'
import { Header } from '../header'
import { Footer } from '../footer'
import { Main } from '../main'

type Props = {
  isHeaderShown?: boolean
  isFooterShown?: boolean
  title?: string
  description: string
  icon?: string
  children: React.ReactNode
}

const Layout = ({
  isHeaderShown,
  isFooterShown,
  title,
  description,
  icon,
  children,
}: Props) => {
  return (
    <StyledLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon} />
      </Head>

      {isHeaderShown && <Header />}

      <Main>{children}</Main>

      {isFooterShown && <Footer />}
    </StyledLayout>
  )
}

Layout.defaultProps = {
  isHeaderShown: true,
  isFooterShown: true,
  title: 'FunnyFunction.Fun',
  description: 'FunnyFunction.Fun',
  icon: '/images/DannyLogo.png',
}

export { Layout }
