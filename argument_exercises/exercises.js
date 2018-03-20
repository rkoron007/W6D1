function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

Function.prototype.myBind = function(...args) {
  let obj = args[0];
  let argsF = args.slice(1);
  return (...args2) => {
    this.apply(obj, argsF.concat(args2));
  };
};





function curriedSum(numArgs) {
  let numbers = [];
    return function _curriedSum(args1) {
      numbers.push(args1);
      if  (numbers.length !== numArgs) {
        return _curriedSum;
      }
    let totalsum = 0;
      if (numbers.length === numArgs){
        for (var i = 0; i < numbers.length; i++) {
          totalsum += numbers[i];}
      return totalsum;
      }
    };
}

Function.prototype.curry = function(numArgs){
  let data = [];

    const _curry = (args1) => {
      data.push(args1);
      if (data.length !== numArgs){
        return _curry;
      }else {
        return this.apply(null, data);
      }
    };
    return _curry;
};
