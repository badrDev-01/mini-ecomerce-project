/*
  Local product data (generated)

  IMPORTANT: Place your product images in the public folder so they are
  served statically at runtime. Expected layout (project root):

    public/
      assets/
        Products/
          Hoodies/
            hoodie(1).png
            hoodie(2).png
            ...
          Accessoire/
            accessoire(1).png
            ...
          Jackets/
          Jeans/
          Tshirts/
          Shoes/
          Varsity/

  At runtime images will be available at URLs like
    /assets/Products/Hoodies/hoodie(1).png

  This file programmatically builds a products array using the counts you
  provided. Adjust names or prices below if you want specific values.
*/

// const categorySpecs = [
//   { name: 'Hoodies', count: 14, filePrefix: 'hoodie ', basePrice: 49 },
//   { name: 'accessories', count: 19, filePrefix: 'accessorie ', basePrice: 15 },
//   { name: 'Jackets', count: 2, filePrefix: 'jacket ', basePrice: 119 },
//   { name: 'Jeans', count: 3, filePrefix: 'jean ', basePrice: 69 },
//   { name: 'Shoes', count: 16, filePrefix: 'shoe ', basePrice: 79 },
//   { name: 'Tshirts', count: 13, filePrefix: 'tshirt ', basePrice: 29 },
//   { name: 'Varsity', count: 7, filePrefix: 'varsity ', basePrice: 89 }
// ];

// let idCounter = 1;
// export const products = categorySpecs.flatMap((spec) => {
//   const items = [];
//   for (let i = 1; i <= spec.count; i++) {
//     const id = idCounter++;
//     const name = `${spec.name} ${i}`;
//     const price = +(spec.basePrice + (i % 5) * 5).toFixed(2);
//     const image_url = `/Products/${spec.name}/${spec.filePrefix}(${i}).png`;



//     const stock = Math.max(0, 20 - i); // simple stock pattern

//     items.push({
//       id,
//       name,
//       description: `High quality ${spec.name.toLowerCase()} - model ${i}`,
//       price,
//       category: spec.name,
//       image_url,
//       stock
//     });
//   }
//   return items;
// });

// // Export helper data
// export const categories = categorySpecs.map((s) => s.name);

// export const getProductsByCategory = (category) => {
//   return products.filter((p) => p.category === category);
// };

// export const getProductById = (id) => products.find((p) => p.id === id);



// const categorySpecs = [
//   { name: 'Hoodies', count: 14, folder: 'Hoodies', filePrefix: 'hoodie', basePrice: 49 },
//   { name: 'accessories', count: 19, folder: 'accessories', filePrefix: 'accessorie', basePrice: 15 },
//   { name: 'Jackets', count: 2, folder: 'Jackets', filePrefix: 'jacket', basePrice: 119 },
//   { name: 'Jeans', count: 3, folder: 'Jeans', filePrefix: 'jean', basePrice: 69 },
//   { name: 'Shoes', count: 16, folder: 'Shoes', filePrefix: 'shoe', basePrice: 79 },
//   { name: 'Tshirts', count: 13, folder: 'Tshirts', filePrefix: 'tshirt', basePrice: 29 },
//   { name: 'Varsity', count: 7, folder: 'Varsity', filePrefix: 'varsity', basePrice: 89 }
// ];

// let idCounter = 1;
// export const products = categorySpecs.flatMap((spec) => {
//   const items = [];
//   for (let i = 1; i <= spec.count; i++) {
//     const id = idCounter++;
//     const name = `${spec.name} ${i}`;
//     const price = +(spec.basePrice + (i % 5) * 5).toFixed(2);
//     const image_url = `/Products/${spec.folder}/${spec.filePrefix} (${i}).png`;

//     const stock = Math.max(0, 20 - i);

//     items.push({
//       id,
//       name,
//       description: `High quality ${spec.name.toLowerCase()} - model ${i}`,
//       price,
//       category: spec.name,
//       image_url,
//       stock
//     });
//   }
//   return items;
// });

// export const categories = categorySpecs.map((s) => s.name);

// export const getProductsByCategory = (category) => {
//   return products.filter((p) => p.category === category);
// };

// export const getProductById = (id) => products.find((p) => p.id === id);


// const categorySpecs = [
//   { name: 'Hoodies', count: 14, folder: 'Hoodies', filePrefix: 'hoodie', basePrice: 49 },
//   { name: 'accessories', count: 19, folder: 'accessories', filePrefix: 'accessorie', basePrice: 15 },
//   { name: 'Jackets', count: 2, folder: 'Jackets', filePrefix: 'jacket', basePrice: 119 },
//   { name: 'Jeans', count: 3, folder: 'Jeans', filePrefix: 'jean', basePrice: 69 },
//   { name: 'Shoes', count: 16, folder: 'Shoes', filePrefix: 'shoe', basePrice: 79 },
//   { name: 'Tshirts', count: 13, folder: 'Tshirts', filePrefix: 'tshirt', basePrice: 29 },
//   { name: 'Varsity', count: 7, folder: 'Varsity', filePrefix: 'varsity', basePrice: 89 }
// ];

// let idCounter = 1;
// export const products = categorySpecs.flatMap((spec) => {
//   const items = [];
//   for (let i = 1; i <= spec.count; i++) {
//     const id = idCounter++;
//     const name = `${spec.name} ${i}`;
//     const price = +(spec.basePrice + (i % 5) * 5).toFixed(2);
//     const image_url = `badr.png`; // ✅ matches your working path

//     const stock = Math.max(0, 20 - i);

//     items.push({
//       id,
//       name,
//       description: `High quality ${spec.name.toLowerCase()} - model ${i}`,
//       price,
//       category: spec.name,
//       image_url,
//       stock
//     });
//   }
//   return items;
// });

// export const categories = categorySpecs.map((s) => s.name);

// export const getProductsByCategory = (category) =>
//   products.filter((p) => p.category === category);

// export const getProductById = (id) =>
//   products.find((p) => p.id === id);

const categorySpecs = [
  { name: 'Hoodies', count: 10, folder: 'Hoodies', filePrefix: 'hoodie ', basePrice: 49 },
  { name: 'accessories', count: 19, folder: 'accessories', filePrefix: 'accessorie ', basePrice: 15 }, // ✅ fixed spelling
  { name: 'Jackets', count: 2, folder: 'Jackets', filePrefix: 'jacket ', basePrice: 119 },
  { name: 'Jeans', count: 3, folder: 'Jeans', filePrefix: 'jean ', basePrice: 69 },
  { name: 'Shoes', count: 16, folder: 'Shoes', filePrefix: 'shoes ', basePrice: 79 },
  { name: 'Tshirts', count: 13, folder: 'Tshirts', filePrefix: 'tshirt ', basePrice: 29 },
  { name: 'Varsity', count: 7, folder: 'Varsity', filePrefix: 'varsity ', basePrice: 89 }
];

let idCounter = 1;
export const products = categorySpecs.flatMap((spec) => {
  const items = [];
  for (let i = 1; i <= spec.count; i++) {
    const id = idCounter++;
    const name = `${spec.name} ${i}`;
    const price = +(spec.basePrice + (i % 5) * 5).toFixed(2);
    const image_url = `/Products/${spec.folder}/${spec.filePrefix}(${i}).png`; // ✅ includes space and parentheses
    
    
    const stock = Math.max(0, 20 - i);

    items.push({
      id,
      name,
      description: `High quality ${spec.name.toLowerCase()} - model ${i}`,
      price,
      category: spec.name,
      image_url,
      stock
    });
  }
  return items;
});

export const categories = categorySpecs.map((s) => s.name);

export const getProductsByCategory = (category) =>
  products.filter((p) => p.category === category);

export const getProductById = (id) =>
  products.find((p) => p.id === id);


