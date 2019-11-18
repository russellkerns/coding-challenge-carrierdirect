import React from 'react';
import { createGlobalStyle } from 'styled-components';
import theme from '../utils/Theme';
import { media } from '../utils/media';
import './layout.scss';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 100%
    @media(max-width: 350px){
      font-size: 62.5%
    }
  }
  body {
    background: #fff5e7;
    font-size: 90%;
    color: ${theme.colors.grey.default};

  }
  a{
    text-decoration: none
  }

  h1, h2, h3, h4 {
    color: ${theme.colors.blue.light};
  }
  a.chosen, a.chosen:hover{
    border-bottom: 1px solid #F14B31;
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
  .checkbox {
    display: flex;
    cursor: pointer;
    font-size: 0.75rem
}

.checkbox > span {
    color: ${theme.colors.blue.light}
    padding: 0.5rem 0.25rem;
}

.checkbox > input {
    height: 25px;
    width: 25px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid ${theme.colors.pink}
    border-radius: 4px;
    outline: none;
    transition-duration: 0.3s;
    background-color: ${theme.colors.yellow}
    cursor: pointer;
  }

.checkbox > input:checked {
    border: 1px solid ${theme.colors.pink}
    background-color: ${theme.colors.blue.light}

}

.checkbox > input:checked + span::before {
    display: block;
    text-align: center;
    color: #41B883;
    left: 0.7rem;
    top: 0.2rem;
}

.checkbox > input:active {
    border: 2px solid #34495E;
}
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <>
        <GlobalStyle />
        {children}
      </>
    );
  }
}
