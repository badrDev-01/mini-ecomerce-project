import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900">BH Store</h3>
            <p className="text-sm text-slate-600">Welcome in our Company,<br />Wear your Passion</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-slate-900">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-slate-600 hover:text-slate-900">Shop</Link>
              </li>
              <li>
                <Link to="/categories" className="text-slate-600 hover:text-slate-900">Category</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-800 mb-3">Quick Link</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-slate-900">Contact Us</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-slate-600 hover:text-slate-900">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600">
          <div className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <div>
              Mediona, Casablanca<br />Maroc
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xl">📞</span>
            <div>+212 606726497</div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xl">✉️</span>
            <div>bhstore@gmail.com</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-sm text-slate-600">
          &copy; {currentYear} BH Store - all rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
