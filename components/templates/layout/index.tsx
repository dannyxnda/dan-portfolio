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
  altIcon?: string
  children: React.ReactNode
}

const Layout = ({
  isHeaderShown,
  isFooterShown,
  title,
  description,
  // icon,
  altIcon,
  children,
}: Props) => {
  const { NEXT_PUBLIC_DOMAIN } = process.env
  return (
    <StyledLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link rel="icon" href={icon} /> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="alternate icon" href={altIcon} />

        <meta property="og:url" content={NEXT_PUBLIC_DOMAIN} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${NEXT_PUBLIC_DOMAIN}${altIcon}`} />
        <meta property="og:locale" content="vi" />
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
  title: 'Duc Anh Nguyen | dannyxnda',
  description: 'Duc Anh Nguyen - Danny | Front-end Developer',
  // icon: '/images/danny_logo_noborder.png',
  altIcon: '/images/danny_logo_noborder.png',
}

export { Layout }
