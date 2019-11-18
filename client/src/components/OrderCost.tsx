import React from 'react';
import './receipt.scss';
import priceConverter from '../utils/priceConverter';

interface ReceiptProps {
  priceObject: {
    salesTax: number;
    total: number;
    subTotal: number;
  };
}
const OrderCost: React.FC<ReceiptProps> = (props: ReceiptProps) => {
  const { total, subTotal, salesTax } = props.priceObject;
  return (
    <div className="receipt">
      <div className="receipt-list">
        <div className="receipt-item">
          <div className="receipt-label">Subtotal</div>
          <div className="receipt-value">{`${priceConverter(subTotal)}$`}</div>
        </div>
        <div className="receipt-item">
          <div className="receipt-label">Sales Tax (8.75%)</div>
          <div className="receipt-value">{`${priceConverter(salesTax)}$`}</div>
        </div>
        <div className="receipt-item">
          <div className="receipt-label">Total</div>
          <div className="receipt-value">{`${priceConverter(total)}$`}</div>
        </div>
      </div>
    </div>
  );
};

export default OrderCost;
