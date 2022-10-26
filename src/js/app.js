class Validator {
    static validateUserName(name) {
      const isTrueChar = /^[\w-]{3,}$/.test(name);
      const isNotThreeNumber = !/\d{3}/.test(name);
      const isStartCharCorrect = !/^[\d_-]/.test(name);
      const isEndCharCorrect = !/[\d_-]$/.test(name);
  
      return (
        isTrueChar && isNotThreeNumber && isStartCharCorrect && isEndCharCorrect
      );
    }
  }
  
  export default Validator;
  