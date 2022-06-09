const humanCatDogYears = number => {
  if (number === 1) { return [1, 15, 15];}
  if (number === 2) { return [2, 24, 24];}
  return [number, 24 + (number-2)*4 , 24 + (number-2)*5];
  
};
module.exports = humanCatDogYears;
