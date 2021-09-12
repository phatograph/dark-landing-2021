import React from 'react'
// import className from 'classnames'
import Head from 'next/head'
import {useRouter} from 'next/router'
import smoothscroll from 'smoothscroll-polyfill'
// import Link from 'next/link'
import {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

// import {_t} from '@lib/helpers'

// import Nav from '@components/Nav'
// import LayoutAdmin from '@components/LayoutAdmin'

import '../css/app.scss'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MyApp = ({Component, pageProps}: AppProps) => {
  React.useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  const title = 'Dark Landing by AR Shakir'
  const description = 'https://dribbble.com/arshakir'

  // const router = useRouter()
  // const t = _t(router.locale)

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <meta
          name='viewport'
          // content='width=device-width, initial-scale=1, maximum-scale=1'
          content='width=1300, viewport-fit=cover'
        />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/images/og.png' />

        <link rel='icon' type='image/png' href='/images/logo.png' />

        {false && (
          <React.Fragment>
            <script
              async
              src='https://www.googletagmanager.com/gtag/js?id=G-'
            />

            <script
              dangerouslySetInnerHTML={{
                __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-');
          `,
              }}
            />
          </React.Fragment>
        )}
      </Head>

      <Component
        {...{
          ...pageProps,
        }}
      />

      {false && (
        <React.Fragment>
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </React.Fragment>
      )}
    </QueryClientProvider>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
