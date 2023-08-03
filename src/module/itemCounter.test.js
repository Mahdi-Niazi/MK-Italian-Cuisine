// Import the items counter function
import itemsCounter from './itemCounter.js';

global.document = {
  querySelectorAll: jest.fn(),
};

describe('itemsCounter', () => {
  test('should return the correct count when there are items', () => {
    document.querySelectorAll.mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const result = itemsCounter();

    expect(result).toBe(9);
  });

  test('should return zero when there are no items', () => {
    document.querySelectorAll.mockReturnValue([]);

    const result = itemsCounter();

    expect(result).toBe(0);
  });

  test('should throw an error when the selector is invalid', () => {
    document.querySelectorAll.mockImplementation(() => {
      throw new Error('Invalid selector');
    });

    expect(itemsCounter).toThrow(Error);
  });
});
