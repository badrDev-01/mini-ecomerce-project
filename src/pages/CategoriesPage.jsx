import { useState } from 'react';
import { products as productData, categories as categoryList } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products] = useState(productData);
  const [categories] = useState(categoryList);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  // Group products by category for the "all categories" view
  const productsByCategory = categories.reduce((acc, category) => {
    acc[category] = products.filter(p => p.category === category);
    return acc;
  }, {});

  // Local data - no loading or async errors

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Categories</h1>
        <p className="text-slate-600">Browse products by category</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-5 py-2 rounded-full font-medium transition ${
            !selectedCategory
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              selectedCategory === category
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory ? (
        // Single category view
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">{selectedCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        // All categories view
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">{category}</h2>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900"
                >
                  View All →
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productsByCategory[category].slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;