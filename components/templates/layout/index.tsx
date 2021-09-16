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
        <link rel="icon" type="image/svg+xml" href={icon} />
        <link rel="alternate icon" href="/images/DannyLogo.png" />
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
  title: 'Duc Anh Nguyen | Front-end Developer',
  description:
    'Front-end Developer | Javascript | Typescript | React.js | Next.js',
  icon: '/images/danny_logo_noborder.svg',
}

export { Layout }
