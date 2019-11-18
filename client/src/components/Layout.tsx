import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../utils/Theme';
import { media } from '../utils/media';
import './layout.scss';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 100%
  }
  ::selection {
    color: ${theme.colors.blue.light};
    background: ${theme.colors.blue.dark};
  }
  body {
    background: ${theme.colors.bg};
    font-size: 90%;
    color: ${theme.colors.grey.default};
    @media ${media.phone} {
      font-size: 14px;
    }

  }
  a {
    color: ${theme.colors.grey.dark};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.blue.light};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.blue.light};

  }

  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProvider>
    );
  }
}
