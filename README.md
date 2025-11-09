# 🛍️ Mini Boutique 

## 1. Project Summary (Short)
**Mini Boutique** is a front-end e-commerce application built with **React**, styled with **Tailwind CSS**, and uses React Context + `useReducer` to manage a shopping cart. The app is single-page (client-side routing) using **React Router**. Products are loaded from a local data file and the checkout is simulated (no backend payment processing).

---

## 2. How to run (commands)
```bash
# install dependencies
npm install

# run in development (Vite / Create React App scripts may vary)
npm run dev      # or npm start if using CRA

# build for production
npm run build
```
> The repo uses Tailwind CSS for styling and React Router for navigation.

---

## 3. High level architecture & data flow
- `App.jsx` sets up React Router and wraps the app with `<CartProvider>` (global state provider).
- `data/products.js` contains local product data generated from a configuration (category specs).
- UI is built from small components (`Navbar`, `ProductCard`, `CartItem`, `Footer`) and pages composed from those components (`ProductsPage`, `ShopPage`, `CartPage`, `CheckoutPage`, `CategoriesPage`).
- Cart state is global and accessible via `useCart()` hook (wrapper around `useContext`).

---

## 4. Explanation of important technologies
### React
A library for building UI with **components** (reusable pieces). Components return JSX (looks like HTML inside JavaScript).

### Tailwind CSS
Utility-first CSS framework that uses class names (e.g., `p-4`, `bg-slate-900`) to style elements quickly and consistently.

### React Router DOM
Client-side routing: lets the app have multiple "pages" (`/products`, `/cart`, `/checkout`) without full page reloads.

### React Context + useReducer
- **Context** provides a way to pass data (cart state) through the component tree without props drilling.
- **useReducer** is a predictable way to manage state transitions (similar to Redux reducers but local to the provider).

### Lucide React
Icon library providing vector icons as React components (e.g., `<ShoppingCart />`).

---

## 5. `data/products.js` — generation using `flatMap` (explain in plain terms)
Inside `data/products.js` the products array is generated programmatically from a `categorySpecs` configuration. The code uses `Array.prototype.flatMap()`.

### What is `flatMap`?
`flatMap` does two things in one step:
1. Maps each element of an array into another array (like `map`).
2. Flattens the resulting arrays by one level (like `flat(1)`).

**Simple example**
```js
const arr = [1,2];
const result = arr.flatMap(x => [x, x * 2]); // -> [1, 2, 2, 4]
```

**How the project uses it**
```js
export const products = categorySpecs.flatMap((spec) => {
  const items = [];
  for (let i = 1; i <= spec.count; i++) {
    items.push({
      id: idCounter++,
      name: `${spec.name} ${i}`,
      price: ...,
      image_url: `/Products/${spec.folder}/${spec.filePrefix}(${i}).png`,
      stock: Math.max(0, 20 - i),
      description: `High quality ${spec.name.toLowerCase()} - model ${i}`,
      category: spec.name,
    });
  }
  return items; // each call returns an array of items
});
```
So `flatMap` concatenates all arrays returned for each category into one large `products` array.

---

## 6. Global state: CartContext (detailed)
File: `src/context/CartContext.jsx`

### Purpose
Provide a global cart (items, total, itemCount) and functions to manipulate it: `addItem`, `removeItem`, `updateQuantity`, `clearCart`.

### Key parts
- `initialState = { items: [], total: 0, itemCount: 0 }`
- `cartReducer(state, action)` handles actions:
  - `'ADD_ITEM'`: if product already in cart, increment quantity; else add with `quantity: 1`.
  - `'REMOVE_ITEM'`: remove by `id`.
  - `'UPDATE_QUANTITY'`: set explicit quantity for an item (and remove items with `quantity <= 0`).
  - `'CLEAR_CART'`: empty the cart.

### Calculation helpers
- `calculateTotal(items)` returns `sum(item.price * item.quantity)`.
- `calculateItemCount(items)` returns `sum(item.quantity)`.

### Provided values via context
```js
{
  items,
  total,
  itemCount,
  addItem,
  removeItem,
  updateQuantity,
  clearCart
}
```

---

## 7. Hooks used in the project — explained for a non-React teacher
### `useState`
- Purpose: local component state (e.g., form input values, UI toggles).
- Behavior: returns a variable and setter function. When setter called, React re-renders component.

### `useContext`
- Reads value from React Context (here `CartContext`).
- Simplifies access to shared state across components.

### `useReducer`
- For complex state logic (used inside `CartProvider`).
- Handles actions with `type` and `payload`.

### `useNavigate` (from React Router)
- Used to redirect programmatically (e.g., after checkout success).

---

## 8. Components — what each does
### Navbar.jsx
Top navigation bar with links to pages and a cart badge showing item count.

### Footer.jsx
Displays brand info, navigation, and contact information.

### ProductCard.jsx
Shows a single product card: image, name, price, and an "Add to cart" button. Handles stock limits and visual feedback when item added.

### CartItem.jsx
Renders each cart entry with +/− quantity controls and remove button. Prevents exceeding stock or dropping below 1.

### Pages
- **ProductsPage.jsx:** Shows product grid + category filter.
- **ShopPage.jsx:** Adds sorting (by price, newest).
- **CategoriesPage.jsx:** Organizes by categories with View All per category.
- **CartPage.jsx:** Displays full cart and total summary.
- **CheckoutPage.jsx:** Shipping form simulation and order total.
- **CheckoutSuccessPage.jsx:** Thank-you confirmation page.

---

## 9. Important logic
### Adding an item
```js
dispatch({ type: 'ADD_ITEM', payload: product });
```
If exists, quantity increases; otherwise new product added.

### Updating quantity
```js
dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
```
Updates and removes zero-quantity items.

### Totals
```js
total = sum(price * quantity);
itemCount = sum(quantity);
```

---

## 10. Accessibility & UX
- Buttons use icons and labels.
- Form fields have labels.
- Focus rings visible with Tailwind `focus:ring`.
- Responsive layout for mobile and desktop.

---

## 11. For a non-React teacher (summary)
- **Components** = modular UI blocks (like small functions returning HTML).
- **State** = local memory (example: current quantity).
- **Context** = shared memory (cart across all components).
- **Reducer** = defines how memory changes (add/remove/update rules).
- **Routing** = switching visible pages without reloading.

---

## 13. Developer
**Badr El Harchy**  
📍 Casablanca, Morocco  
📧 bhstore@gmail.com  
