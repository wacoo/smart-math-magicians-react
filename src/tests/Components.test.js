import renderer from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import LoadQuotes from '../components/Quotes';
import Key from '../components/Key';

let init = 1;
function handleClick(val) {
  init = val + 1;
  return val + 1;
}

describe('Test components', () => {
  it('Test Header component', () => {
    const homeComponent = renderer.create(<BrowserRouter><Header /></BrowserRouter>);
    expect(homeComponent).toMatchSnapshot();
  });

  it('Test Home component', () => {
    const headerComponent = renderer.create(<BrowserRouter><Home /></BrowserRouter>);
    expect(headerComponent).toMatchSnapshot();
  });
  it('Test Calculator component', () => {
    const calcComponent = renderer.create(<BrowserRouter><Calculator /></BrowserRouter>);
    expect(calcComponent).toMatchSnapshot();
  });
  it('Test Quote component', () => {
    const quoteComponent = renderer.create(<BrowserRouter><LoadQuotes /></BrowserRouter>);
    expect(quoteComponent).toMatchSnapshot();
  });
});

describe('Test interaction', () => {
  it('Tests Calculator keys button to exist', () => {
    const { getByRole } = render(<Key lbl="Hello" onSmash={() => handleClick(11)} />);
    const key = getByRole('button');
    expect(key).toHaveTextContent('Hello');
  });

  it('Tests Key button click', () => {
    const { getByText } = render(<Key lbl="Hello" onSmash={() => handleClick(12)} />);
    const key = getByText('Hello');
    fireEvent.click(key);

    screen.findByRole('button');
    expect(init).toBe(13);
  });
});
