import {
  FiFilter,
  FiGrid,
  FiList,
  FiChevronDown
} from "react-icons/fi";

import "./ShopFilter.css";

function ShopFilter() {
  return (
    <section className="shop-filter">

      <div className="shop-filter-container">

        {/* Left side */}

        <div className="filter-left">

          <button className="filter-button">
            <FiFilter />
            <span>Filter</span>
          </button>

          <button className="view-button active">
            <FiGrid />
          </button>

          <button className="view-button">
            <FiList />
          </button>

        </div>


        {/* Divider */}

        <div className="filter-divider"></div>


        {/* Showing results */}

        <div className="showing-results">
          Showing 1–16 of 32 results
        </div>


        {/* Right side */}

        <div className="filter-right">

          <div className="show-control">

            <span>Show</span>

            <button className="number-button">
              16
            </button>

          </div>


          <div className="sort-control">

            <span>Sort by</span>

            <button className="sort-button">
              Default
              <FiChevronDown />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ShopFilter;