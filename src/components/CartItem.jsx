import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleIncrement = () => {
    if (item.quantity < item.stock) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-lg"
          />
        </div>

        <div className="flex-grow">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
              <p className="text-sm text-slate-500">{item.category}</p>
            </div>
            <button
              onClick={handleRemove}
              className="text-slate-400 hover:text-red-600 transition p-1"
              aria-label="Remove item"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
              <button
                onClick={handleDecrement}
                disabled={item.quantity <= 1}
                className="p-1.5 hover:bg-white rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4 text-slate-700" />
              </button>
              <span className="w-8 text-center font-semibold text-slate-900">{item.quantity}</span>
              <button
                onClick={handleIncrement}
                disabled={item.quantity >= item.stock}
                className="p-1.5 hover:bg-white rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4 text-slate-700" />
              </button>
            </div>

            <div className="text-right">
              <div className="text-xl font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</div>
              <div className="text-sm text-slate-500">${item.price.toFixed(2)} each</div>
            </div>
          </div>

          {item.quantity >= item.stock && (
            <p className="text-xs text-amber-600 mt-2">Maximum available quantity reached</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
