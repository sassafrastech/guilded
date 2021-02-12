import React from 'react';

// Docs: https://github.com/react-static/react-static/blob/master/docs/config.md
export default {
  plugins: ['jss-provider'],

  siteRoot: 'https://adoring-ptolemy-192a27.netlify.app',
  // TODO: Make it something official like 'https://guilded.usworker.coop'

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
      </Head>

      <Body>{children}</Body>
    </Html>
  ),
  /* eslint-enable */
};
