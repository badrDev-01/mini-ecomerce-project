import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

const Navbar = () => {
  const { itemCount } = useCart();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/products" className="flex items-center gap-2 group">
            <div className="bg-slate-900 p-2 rounded-lg group-hover:bg-slate-800 transition">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">Mini Boutique</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/products"
              className={`font-medium transition ${
                isActive('/products')
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Products
            </Link>
            <Link
              to="/cart"
              className={`relative flex items-center gap-2 font-medium transition ${
                isActive('/cart')
                  ? 'text-slate-900'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              Cart
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
