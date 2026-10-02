import dining from "../assets/dining.png";
import living from "../assets/living.png";
import bedroom from "../assets/bedroom.png";

import "./BrowseRange.css";

function BrowseRange() {
  const categories = [
    {
      id: 1,
      image: dining,
      name: "Dining"
    },
    {
      id: 2,
      image: living,
      name: "Living"
    },
    {
      id: 3,
      image: bedroom,
      name: "Bedroom"
    }
  ];

  return (
    <section className="browse-section">

      <div className="browse-title">
        <h2>Browse The Range</h2>

        <p>
          Explore our furniture collection and find something
          perfect for your home.
        </p>
      </div>

      <div className="browse-container">

        <div className="browse-row">

          {categories.map((category) => (
            <div
              className="browse-column"
              key={category.id}
            >

              <div className="category-card">

                <img
                  src={category.image}
                  alt={category.name}
                />

                <h3>{category.name}</h3>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default BrowseRange;