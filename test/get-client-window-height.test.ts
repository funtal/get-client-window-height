import { getClientWindowHeight } from '../src';

describe('getClientWindowHeight function', () => {
  it('should return window height if window is supported', () => {
    const result = getClientWindowHeight();
    expect(result).toBe(768);
  });
});
