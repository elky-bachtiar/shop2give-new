export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1RUZi7R19bsejBdlukMGNHJc',
    name: 'Cross Bracelet',
    description: 'Cross jewelry is a trend that never really goes out of style! So, a cross bracelet is a must-have in your bracelet collection. This gold-colored bracelet features a beautiful minimalist cross charm. You can wear the cross because it holds a special meaning for you—or simply because you think it\'s a beautiful symbol!Have you completely fallen in love with this gold cross bracelet? Then be sure to check out our necklaces too—there\'s a matching necklace available!',
    mode: 'payment'
  }
];