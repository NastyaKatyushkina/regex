import Validator from '../app';

describe('orderByProps function:', () => {
  test('should return false', () => {
    expect(Validator.validateUserName('qw')).toBe(false);
    expect(Validator.validateUserName('Anastasia!')).toBe(false);
    expect(Validator.validateUserName('Anastasia1123Katyushkina')).toBe(false);
    expect(Validator.validateUserName('_Anastasia')).toBe(false);
    expect(Validator.validateUserName('1Anastasia')).toBe(false);
    expect(Validator.validateUserName('Anastasia1')).toBe(false);
    expect(Validator.validateUserName('Anastasia-')).toBe(false);
    expect(Validator.validateUserName('Anastasia_')).toBe(false);
  });

  test('should return true', () => {
    expect(Validator.validateUserName('Anastasia')).toBe(true);
    expect(Validator.validateUserName('anastasia')).toBe(true);
    expect(Validator.validateUserName('Anastasia12_K')).toBe(true);
    expect(Validator.validateUserName('Anastasia-Katyushkina')).toBe(true);
  });
});
