import { useState } from 'react';
import { products as productData } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';

const ShopPage = () => {
  const [products] = useState(productData);
  const [sortBy, setSortBy] = useState('newest'); // newest, price-low, price-high

  const sortProducts = (list) => {
    switch (sortBy) {
      case 'price-low':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...list].sort((a, b) => b.price - a.price);
      case 'newest':
      default:
        return list;
    }
  };

  const sortedProducts = sortProducts(products);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Shop All Products</h1>
        <p className="text-slate-600">Browse our complete collection</p>
      </div>

      <div className="mb-6 flex justify-end">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {sortedProducts.length === 0 ? (
        <div className="text-center py-12 text-slate-600">
          No products available.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopPage;