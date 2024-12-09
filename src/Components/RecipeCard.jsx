
const RecipeCard = (props) => {
  
  const {infoData} = props;
  const {title, vegetarian, healthScore, image, summary} = infoData;
  // Function to render stars based on the health rating
  const renderStars = (rating) => {
    const fullStar = "★";
    const emptyStar = "☆";
    const stars = (rating/20).toFixed(0);
    return (
      <span className="text-yellow-500">
        {fullStar.repeat(stars) + emptyStar.repeat(5 - stars)}
      </span>
    );
  };

  function summarizeText(summary, maxLength = 120) {
    // Remove HTML tags
    const plainText = summary.replace(/<\/?[^>]+(>|$)/g, "");
    
    // Truncate to the desired length
    const truncatedText = plainText.substring(0, maxLength);
    
    // Ensure we don't cut a word in half
    const finalText = truncatedText.substring(0, truncatedText.lastIndexOf(" ")) + "...";
    
    return finalText;
}

  return (
    <div
  className="max-w-[300px] w-[270px] rounded-lg overflow-hidden shadow-lg bg-gray-50 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
>
  {/* Recipe Image */}
  <img
    className="w-full h-48 object-cover"
    src={image}
    alt={title}
  />
  <div className="p-4">
    {/* Recipe Name */}
    <h2 className="text-lg font-bold text-gray-800">{title}</h2>

    {/* Veg/Non-Veg Tag */}
    <span
      className={`inline-block px-3 py-1 mt-2 rounded-full text-sm font-semibold ${
        vegetarian ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
      }`}
    >
      {vegetarian ? "Veg" : "Non-Veg"}
    </span>

    {/* Short Description */}
    <p className="mt-3 text-gray-600 text-sm line-clamp-2">
      {summarizeText(summary)}
    </p>

    {/* Health Rating */}
    <div className="mt-3 flex items-center">
      <span className="text-sm text-gray-500">Health Rating:</span>
      <span className="ml-2">{renderStars(healthScore)}</span>
    </div>
  </div>
</div>

  );
};

export default RecipeCard;
