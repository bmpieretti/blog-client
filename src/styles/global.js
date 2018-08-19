import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';

injectGlobal`
  ${styledNormalize}

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
    color: #333;
  }

  #root {
    display: flex;
    background-color: #bdccd4;
    font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 300;
    margin: 0;
  }

  a {
    color: #339bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style-type: none;
  }
`;
