import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import Document from './Document.jsx';

export const render = () => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(<Document />));
  const styleTags = sheet.getStyleTags();
  return styleTags + html;
};