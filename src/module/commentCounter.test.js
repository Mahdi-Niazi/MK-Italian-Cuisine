import commentCounter from './commentCounter.js';

global.document = {
  querySelectorAll: jest.fn(),
};

describe('commentCounter', () => {
  test('should return the correct count when there are comments', () => {
    document.querySelectorAll.mockReturnValue([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const result = commentCounter();

    expect(result).toBe(9);
  });

  test('should return zero when there is no comment', () => {
    document.querySelectorAll.mockReturnValue([]);

    const result = commentCounter();

    expect(result).toBe(0);
  });

  test('should throw an error when the selector is invalid', () => {
    document.querySelectorAll.mockImplementation(() => {
      throw new Error('Invalid selector');
    });

    expect(commentCounter).toThrow(Error);
  });
});
