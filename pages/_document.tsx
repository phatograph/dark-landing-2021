import React from 'react'
import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html data-version='0.1'>
        <Head>
          {false && (
            <React.Fragment>
              <link rel='preconnect' href='https://fonts.gstatic.com' />

              <link
                href='https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;700&display=block'
                rel='stylesheet'
              />

              <link
                href='https://fonts.googleapis.com/css?family=Roboto+Condensed|Lato:300,700|Oswald|Fjalla+One|Raleway:200&display=block'
                rel='stylesheet'
              />
            </React.Fragment>
          )}
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
