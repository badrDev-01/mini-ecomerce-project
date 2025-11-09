import { useCart } from '../context/CartContext.jsx';
import CartItem from '../components/CartItem.jsx';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const { items, total, itemCount, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-96 text-center">
        <div className="bg-slate-100 p-8 rounded-full mb-6">
          <ShoppingBag className="w-16 h-16 text-slate-400" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <p className="text-slate-600 mb-8">Add some products to get started</p>
        <Link
          to="/products"
          className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition"
        >
          Browse Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const tax = total * 0.08;
  const shipping = total > 100 ? 0 : 10;
  const grandTotal = total + tax + shipping;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Shopping Cart</h1>
          <p className="text-slate-600">
            {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
        <button
          onClick={clearCart}
          className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition font-medium"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-50 rounded-xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Tax (8%)</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? (
                    <span className="text-green-600">FREE</span>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </span>
              </div>
              {total < 100 && (
                <p className="text-xs text-slate-500 italic">
                  Add ${(100 - total).toFixed(2)} more for free shipping
                </p>
              )}
              <div className="border-t border-slate-300 pt-4">
                <div className="flex justify-between text-slate-900">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold">${grandTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-slate-900 text-white py-4 rounded-lg font-semibold hover:bg-slate-800 transition active:scale-95 flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              to="/products"
              className="block text-center mt-4 text-slate-600 hover:text-slate-900 font-medium transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
