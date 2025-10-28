const { FaStar, FaStarHalf, FaRegStar } = require("react-icons/fa");

const RateStar = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex pl-2 text-yellow-400">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={"full-" + i} className="text-xl mx-[1px]" />
        ))}

      {hasHalfStar && <FaStarHalf className="text-xl mx-[1px]" />}

      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={"empty-" + i} className="text-xl mx-[1px]" />
        ))}
    </div>
  );
};

export default RateStar;
