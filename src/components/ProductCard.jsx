import { ShoppingCart, Check } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';
import { useState } from 'react';

const ProductCard = ({ product }) => {
  const { addItem, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const isInCart = items.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Only {product.stock} left
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0 || justAdded}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              justAdded
                ? 'bg-green-600 text-white'
                : product.stock === 0
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
