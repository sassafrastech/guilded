import React from 'react';

// Docs: https://github.com/react-static/react-static/blob/master/docs/config.md
export default {
  plugins: ['jss-provider'],

  siteRoot: 'https://users.guilded.coop/',

  getRoutes: () => [
    {
      path: '/',
      template: 'src/components/App/component',
    },
  ],

  /* eslint-disable react/prop-types */
  Document: ({ Html, Head, Body, children }) => (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />

        <title>Guilded</title>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff9f00" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Body>{children}</Body>
    </Html>
  ),
  /* eslint-enable */

  devServer: {
    // Allow connecting via proxy URLs like `http://my-site.test`
    disableHostCheck: true,
  },
};
