import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import FetchRecipe from "../utils/FetchRecipe";
import Footer from "./Footer";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Home = () => {
  const { info, infoFilter } = FetchRecipe();
  const [list1, setList1] = useState([]);
  const [list2, setList2] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setList1(info);
    setList2(info);
  }, [info, infoFilter]);

  const handleFilter = (filterType) => {
    let filteredList = list1;

    switch (filterType) {
      case "vegetarian":
        filteredList = list1.filter((dish) => dish.vegetarian);
        break;
      case "nonVeg":
        filteredList = list1.filter((dish) => !dish.vegetarian);
        break;
      case "veryHealthy":
        filteredList = list1.filter((dish) => dish.veryHealthy);
        break;
      case "dairyFree":
        filteredList = list1.filter((dish) => dish.dairyFree);
        break;
      default:
        filteredList = list1; 
    }

    setList2(filteredList);
  };

 
  const handleSearch = () => {
    const filtered = list1.filter((dish) =>
      dish.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setList2(filtered);
  };

  return (
    <React.Fragment>
      {info.length === 0 ? (
        <div>
          <ShimmerUI />
          <Footer />
        </div>
      ) : (
        <div>
          <div className="max-w-[1300px] mx-auto px-10 my-6">
           
            <div className="flex flex-wrap items-center gap-4 py-4 bg-blue-100 rounded-md px-6">
             
              <button
                className="btn bg-blue-300 px-3 py-1 rounded-md text-white hover:bg-white hover:text-blue-500"
                onClick={() => handleFilter("all")}
              >
                All Dishes
              </button>
              <button
                className="btn bg-blue-300 px-3 py-1 rounded-md text-white hover:bg-white hover:text-blue-500"
                onClick={() => handleFilter("vegetarian")}
              >
                Vegetarian
              </button>
              <button
                className="btn bg-blue-300 px-3 py-1 rounded-md text-white hover:bg-white hover:text-blue-500"
                onClick={() => handleFilter("nonVeg")}
              >
                Non-Veg
              </button>
              <button
                className="btn bg-blue-300 px-3 py-1 rounded-md text-white hover:bg-white hover:text-blue-500"
                onClick={() => handleFilter("veryHealthy")}
              >
                Healthy
              </button>
              <button
                className="btn bg-blue-300 px-3 py-1 rounded-md text-white hover:bg-white hover:text-blue-500"
                onClick={() => handleFilter("dairyFree")}
              >
                Dairy Free
              </button>

            
              <div className="flex items-center gap-2 w-full lg:w-auto">
                <input
                  className="w-full lg:w-64 py-1 px-3 rounded-md border-2 border-gray-400"
                  placeholder="Search Dishes"
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                  onClick={handleSearch}
                  className="btn bg-blue-300 px-3 py-1 rounded-md text-white hover:bg-white hover:text-blue-500"
                >
                  Search
                </button>
              </div>
            </div>

           
            <div className="flex flex-wrap gap-6 justify-evenly mt-6">
              {list2!=null ? (
                list2.map((data) => (
                  <Link to={`/recipe/${data.id}`} key={data.id}>
                    <RecipeCard key={data.id} infoData={data} />
                  </Link>
                ))
              ) : (
                <div className="text-gray-500 font-semibold mt-6">
                  No dishes found. Try adjusting your filters or search criteria.
                </div>
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
