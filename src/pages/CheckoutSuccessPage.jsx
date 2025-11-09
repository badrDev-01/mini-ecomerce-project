import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const CheckoutSuccessPage = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <div className="bg-green-100 w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-lg text-slate-600">
          Your order has been received and will be processed shortly.
        </p>
      </div>

      <Link
        to="/products"
        className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition active:scale-95"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default CheckoutSuccessPage;