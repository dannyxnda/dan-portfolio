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
  icon,
  altIcon,
  children,
}: Props) => {
  const { NEXT_PUBLIC_DOMAIN } = process.env
  return (
    <StyledLayout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" type="image/svg+xml" href={icon} />
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
  title: 'Duc Anh Nguyen | Front-end Developer',
  description:
    'Front-end Developer | Javascript | Typescript | React.js | Next.js',
  icon: '/images/danny_logo_noborder.svg',
  altIcon: '/images/danny_logo_noborder.png',
}

export { Layout }
