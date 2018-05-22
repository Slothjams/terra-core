/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from 'terra-hyperlink/docs/README.md';
import { name } from 'terra-hyperlink/package.json';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import HyperlinkSrc from '!raw-loader!terra-hyperlink/src/Hyperlink';

// Example Files
import HyperlinkDefault from './HyperlinkDefault';
import HyperlinkDefaultSrc from '!raw-loader!./HyperlinkDefault';
import Audio from './Audio';
import AudioSrc from '!raw-loader!./Audio';
import Disabled from './Disabled';
import DisabledSrc from '!raw-loader!./Disabled';
import Document from './Document';
import DocumentSrc from '!raw-loader!./Document';
import External from './External';
import ExternalSrc from '!raw-loader!./External';
import Image from './Image';
import ImageSrc from '!raw-loader!./Image';
import UnderlineHidden from './UnderlineHidden';
import UnderlineHiddenSrc from '!raw-loader!./UnderlineHidden';
import Video from './Video';
import VideoSrc from '!raw-loader!./Video';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default Hyperlink',
        example: <HyperlinkDefault />,
        source: HyperlinkDefaultSrc,
      },
      {
        title: 'Disabled Hyperlink',
        example: <Disabled />,
        source: DisabledSrc,
      },
      {
        title: 'External Hyperlink',
        example: <External />,
        source: ExternalSrc,
      },
      {
        title: 'Audio Hyperlink',
        example: <Audio />,
        source: AudioSrc,
      },
      {
        title: 'Video Hyperlink',
        example: <Video />,
        source: VideoSrc,
      },
      {
        title: 'Image Hyperlink',
        example: <Image />,
        source: ImageSrc,
      },
      {
        title: 'Document Hyperlink',
        example: <Document />,
        source: DocumentSrc,
      },
      {
        title: 'Underline Hidden Hyperlink',
        example: <UnderlineHidden />,
        source: UnderlineHiddenSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Hyperlink',
        componentSrc: HyperlinkSrc,
      },
    ]}
  />
);

export default DocPage;
