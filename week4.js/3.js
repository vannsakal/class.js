const prices = [10, 20, 30, 40];
const discountPrices = prices.map(discount);

function discount(n){
    return n*80/100;
};

discountPrices.forEach(log);

function log(discountPrices){
    console.log(`Discounted Price: $${discountPrices}`);
};
