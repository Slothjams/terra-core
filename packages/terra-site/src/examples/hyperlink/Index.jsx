/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from 'terra-hyperlink/docs/README.md';
import { version } from 'terra-hyperlink/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import HyperlinkSrc from '!raw-loader!terra-hyperlink/src/Hyperlink';

// Example Files
import DefaultHyperlink from './DefaultHyperlink';
import DefaultHyperlinkSrc from '!raw-loader!./DefaultHyperlink.jsx';

const HyperlinkExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Hyperlink - Default"
      example={<DefaultHyperlink />}
      exampleSrc={DefaultHyperlinkSrc}
    />

    <PropsTable id="props" src={HyperlinkSrc} />
  </div>
);

export default HyperlinkExamples;
