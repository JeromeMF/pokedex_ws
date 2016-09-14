let threeNumbersAlwaysFilter = function () {  
    return function(input) {

      let string = "000"+JSON.stringify(input);

      return string.slice(
        JSON.stringify(input).length,
        string.length
      );

    };
};

export default threeNumbersAlwaysFilter;  