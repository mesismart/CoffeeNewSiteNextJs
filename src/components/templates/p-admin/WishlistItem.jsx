function WishlistItem({ product, onRemove }) {
  const handleRemove = () => {
    if (typeof onRemove === "function") {
      onRemove(product.id);
    }
  };

  return (
    <div className="bg-white p-3 shadow rounded-lg  w-56">
      <img
        src={product.imgURl}
        alt={product.title}
        className="w-full h-22 object-cover rounded-lg"
      />
      <h2 className="text-sm font-bold mt-2">{product.title}</h2>
      <div className="flex items-center justify-between text-sm mt-1">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i < Math.round(product.score || 0);
            return (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
                fill={filled ? "currentColor" : "none"}
                stroke="currentColor"
              >
                <path
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            );
          })}
        </div>
        <div className="text-gray-600 font-bold">
          {Number(product.price).toFixed(0)} ریال
        </div>
      </div>
      <button
        type="button"
        onClick={handleRemove}
        className="mt-3 w-full bg-red-900 text-white py-1 rounded hover:bg-red-600 transition"
      >
        حذف محصول
      </button>
    </div>
  );
}

export default WishlistItem;
