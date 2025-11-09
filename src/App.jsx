import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Navbar from './components/Navbar.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CartPage from './pages/CartPage.jsx';
import ShopPage from './pages/ShopPage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-slate-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Routes>
              <Route path="/" element={<Navigate to="/products" replace />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
            </Routes>
          </main>
          {/* Footer */}
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
