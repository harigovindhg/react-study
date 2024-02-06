import restaurantList from "../utils/restaurantList.json";

const Shimmer = (props) => {
  const restaurantListSkeleton = () => {
    return (
      restaurantList.map((item, index) => (
        <div className="rest-card" key={`shimmer_cardItem_${index}_${item.id}`}>
          <div className="card-content skeleton">
            <div className="rest-details">
              <div className="rest-name skeleton"></div>
              <div className="rest-subdetails skeleton-parent">
                <div className="skeleton"></div>
                <p className="skeleton"></p>
                <p className="skeleton"></p>
              </div>
            </div>
          </div>
        </div>
      ))
    );
  }
  const restaurantMenuSkeleton = () => {
    return (
      <div className="restaurant-data">
        <div className="restaurant-primary-data">
          <div className="rest-core-image skeleton">
            <img />
          </div>
          <div className="restaurant-name-and-details">
            <h2 className="skeleton"></h2>
            <p className="rest-rating skeleton"></p>
            <hr />
            <p className="rest-rating skeleton"></p>
            <p className="rest-rating skeleton"></p>
            <p className="rest-rating skeleton"></p>
          </div>
        </div>
        <hr style={{ borderTopStyle: 'dashed' }} />
        <div className="veg-only-filter">
          <h3 className="skeleton"></h3>
          <label className="switch" >
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="sub-type">
          <h2 className="skeleton"></h2>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
          <div className="food-details-wrapper">
            <div className="food-details">
              <div className="food-details-core">
                <div className='icon-veg' />
                <h4 className="skeleton"></h4>
                <p className="food-description skeleton"></p>
                <p className="food-description skeleton"></p>
                <p className="food-price skeleton"></p>
              </div>
              <div className="food-details-image skeleton">
                <img />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
  const { isRestaurantShimmer } = props;
  return isRestaurantShimmer === true ? (
    restaurantMenuSkeleton()
  ) : (
    restaurantListSkeleton()
  );
};

export default Shimmer;
