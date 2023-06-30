interface Product {
    name: string;
    price: number;
  }
  
  function calculateTotalPrice(products: Product[]): number {
    const totalPrice: number = products.reduce((acc: number, product: Product) => {
      return acc + product.price;
    }, 0);
  
    return totalPrice;
  }

  const products: Product[] = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
  ];
  
  const totalPrice: number = calculateTotalPrice(products);
  console.log(totalPrice);
  
