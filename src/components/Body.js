import { useEffect, useState, useContext } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // When state variables update, react triggers a reconciliation cycle(re-renders the component)

  // if no dependency array => useEffect is called on every render
  // if the dependency array is empty = [] => useEffect is called on initial render (only once)
  // if dependency array is [btNameReact] => called everytime btnNameReact is updated

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7367504&lng=76.7866626&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you're offline!! Please check your internet connection
      </h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // searchText

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              setListOfRestaurants(
                listOfRestaurants.filter((res) => res.info.avgRating > 4)
              );
            }}
          >
            Top Rated Restaurant
          </button>
          <div className="m-4 p-4 flex items-center">
            <label>UserName:</label>
            <input
              className="border border-black p-2"
              onChange={(e) => setUserName(e.target.value)}
              value={loggedInUser}
            />
          </div>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
