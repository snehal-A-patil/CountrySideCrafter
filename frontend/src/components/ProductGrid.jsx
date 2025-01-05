const ProductGrid = ({ products }) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500 mt-2">${product.price}</p>
            <button className="mt-4 w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default ProductGrid;
  