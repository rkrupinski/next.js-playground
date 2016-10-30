import React, { Component } from 'react';

import Head from 'next/head';
import Link from 'next/link';

export default class Test extends Component {

  static getInitialProps() {
    return new Promise(function (resolve) {
      setTimeout(() => resolve({ foo: 'bar '}), 1000);
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>Test</title>
          <style>{'body { color: green; }'}</style>
        </Head>
        <p>Test</p>
        <p>
          <img src="/static/doge.jpg" />
        </p>
        <p>{this.props.foo}</p>

        <Link href="/">Back</Link>
      </div>
    );
  }

}
