const priceConverter = (priceInCents: number | string): string => {
  priceInCents = Number(priceInCents) / 100;
  return priceInCents.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export default priceConverter;
