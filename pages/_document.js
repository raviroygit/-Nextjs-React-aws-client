
import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
import {ServerStyleSheet} from 'styled-components'
import flush from 'styled-jsx/server'
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-KT8TBFLLH2');
        `
      };
    }
  }

  static getInitialProps({renderPage}) {
		// Step 1: Create an instance of ServerStyleSheet
		const sheet = new ServerStyleSheet()

		// Step 2: Retrieve styles from components in the page
		const page = renderPage((App) => (props) =>
			sheet.collectStyles(<App {...props} />),
		)

		// Step 3: Extract the styles as <style> tags
		const styleTags = sheet.getStyleElement()
		const styles = flush()

		// Step 4: Pass styleTags as a prop
		return {...page, styleTags, styles}
	}

  render() {
    const shouldRenderScripts =
    this.props.unstable_runtimeJS || process.env.NODE_ENV !== 'production'
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          {this.props.styleTags}
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/css/styles.css" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KT8TBFLLH2"></script>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            <link rel="shortcut icon" href="/static/images/favicon.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/images/apple-touch-icon.png" />
        </Head>
        <body>
          <Main />
          {shouldRenderScripts ? <NextScript /> : null}
          {/* <NextScript /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

