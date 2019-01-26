import { injectGlobal } from 'styled-components';
import { ColorScheme } from './styleConstants';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Questrial');
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${ColorScheme.mainText};
    line-height: 200%
  }

  h4, h5, h6 {
    font-family: 'Questrial', sans-serif;
  }

  hr {
    width: 50%;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${ColorScheme.secondary};
    transition: all .3s ease;
    font-family: 'Questrial', sans-serif;
    &:hover {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
    &:focus {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
  }

  input[type=text], textarea {
    border-style: groove;
    border-width: 1px;
    padding: 1px;
  }

  button {
    text-decoration: none;

    padding: 5px 10px;
    background: 0 0;
    border: 2px solid ${ColorScheme.secondary};
    border-radius: 3px;
    display: block;
    margin: 0 auto;;
    color: ${ColorScheme.secondary};
    font-family: 'Questrial', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    transition: all .3s ease;
    &:hover {
      background: ${ColorScheme.primary};
      color: #fff;
      border-color: ${ColorScheme.primary};
    }
  }

`;