import delay from './delay';

const arr = new Array(21)
  .fill(null)
  .map((v,i)=>i + 1);

const popularProducts = arr.map((element, index, array)=>{
  const popularProduct = {
    id: element,
    product_name: 'Product' + '_' + element,
    cover: `product_0.190.190.png`,
    product_discrption: 'product_discrptionproduct_discrptionproduct_discrption',
    price: 500,
    discount_rate: 20,
    discount_price:400,
    heart: 9987,
    star: 3457,
    shipping_free: true,
    categor_type_A: 'popular'
    };

  return popularProduct;
});

class Api {
  static getAllpopularProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], popularProducts));
      }, delay);
    });
  }
}

export default Api;
