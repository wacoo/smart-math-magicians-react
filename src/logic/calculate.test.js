import calculate from './calculate';

describe('Test the calculate and perate functions', () => {
  it('test addition', () => {
    const obj = {
      total: 2,
      next: 5,
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('7');
  });
  it('test subtruction', () => {
    const obj = {
      total: 6,
      next: 5,
      operation: '-',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('1');
  });
  it('test division', () => {
    const obj = {
      total: 6,
      next: 3,
      operation: '÷',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('2');
  });
  it('test multiplication', () => {
    const obj = {
      total: 6,
      next: 2,
      operation: 'x',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('12');
  });
});