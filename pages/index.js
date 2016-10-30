import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default props => (
  <div>
    <Head>
      <title>Home</title>
      <style>{'body { color: red; }'}</style>
    </Head>
    <p>Home</p>
    <button onClick={() => props.url.pushTo('/test')}>Test</button>
    {' '}
    <Link href="/test">Test</Link>
    {' '}
    <Link href="/nested/nested">Nested route</Link>
  </div>
);
