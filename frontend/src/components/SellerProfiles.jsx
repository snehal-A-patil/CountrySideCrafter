const SellerProfiles = ({ sellers }) => (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {sellers.map((seller) => (
        <div key={seller.id} className="bg-white shadow rounded-lg p-4">
          <img
            src={seller.image}
            alt={seller.name}
            className="h-24 w-24 rounded-full mx-auto"
          />
          <h3 className="mt-4 text-center text-lg font-bold">{seller.name}</h3>
          <p className="mt-2 text-center text-gray-500">{seller.bio}</p>
        </div>
      ))}
    </div>
  );
  
  export default SellerProfiles;
  