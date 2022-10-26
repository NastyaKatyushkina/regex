import Validator from '../app';

describe('orderByProps function:', () => {
  test('should return false', () => {
    expect(Validator.validateUserName('qw')).toBe(false);
    expect(Validator.validateUserName('Elena!')).toBe(false);
    expect(Validator.validateUserName('Elena1123Kechina')).toBe(false);
    expect(Validator.validateUserName('_Elena')).toBe(false);
    expect(Validator.validateUserName('1Elena')).toBe(false);
    expect(Validator.validateUserName('Elena1')).toBe(false);
    expect(Validator.validateUserName('Elena-')).toBe(false);
    expect(Validator.validateUserName('Elena_')).toBe(false);
  });

  test('should return true', () => {
    expect(Validator.validateUserName('Elena')).toBe(true);
    expect(Validator.validateUserName('elena')).toBe(true);
    expect(Validator.validateUserName('Elena12_K')).toBe(true);
    expect(Validator.validateUserName('Elena-Kechina')).toBe(true);
  });
});
