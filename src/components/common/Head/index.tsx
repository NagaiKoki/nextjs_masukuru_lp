import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
  description: string
  keyword: string
  image: string
  url: string
}

const HtmlHead = (props: Props) => {
  const { title, description, keyword, image, url } = props
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tcr_jp" />
      <meta name="twitter:url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href="/logo.png" />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-30K392XMJ3"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-30K392XMJ3', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </Head>
  )
}

export default HtmlHead