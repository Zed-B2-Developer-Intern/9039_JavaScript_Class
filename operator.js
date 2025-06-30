var SP=199
var LP=799

var discount=((LP-SP)/LP * 100)

console.log(discount)

displayDiscountPercentage=Math.round(discount)
console.log("Discount Amount in Percentage",displayDiscountPercentage,"%")

var result=LP>SP;
console.log(result);
console.log(typeof result);