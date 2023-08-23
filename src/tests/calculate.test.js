import calculate from '../logic/calculate';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import { MemoryRouter } from 'react-router-dom';
import Home from '../components/Home';
import Calculator from '../components/Calculator';

// Helper function to mock the behavior of isNumber
function mockIsNumber(item) {
  return true; // Mocked implementation, always returns true
}

// describe('Test the calculate function', () => {
//   it('should calculate correctly when isNumber is true', () => {
//     // Mock the isNumber function
//     const originalIsNumber = calculate.isNumber;
//     calculate.isNumber = mockIsNumber;

//     // Call the calculate function
//     const result = calculate({}, 7);

//     // Assertions
//     expect(result.next).toBe(7);

//     // Restore the original isNumber function
//     // calculate.isNumber = originalIsNumber;
//   });
// });

describe('Test components', () => {
  it('Test Home component', () => {
    const homeComponent = renderer.create(<MemoryRouter><Header /></MemoryRouter>);
    expect(homeComponent).toMatchSnapshot();
  });

  it('Test Header component', () => {
    const headerComponent = renderer.create(<MemoryRouter><Home /></MemoryRouter>);
    expect(headerComponent).toMatchSnapshot();
  });
  it('Test Calculator component', () => {
    const calcComponent = renderer.create(<MemoryRouter><Calculator /></MemoryRouter>);
    expect(calcComponent).toMatchSnapshot();
  });
  it('Test Quote component', () => {
    const quoteComponent = renderer.create(<MemoryRouter><LoadQuote /></MemoryRouter>);
    expect(quote).toMatchSnapshot();
  });
});