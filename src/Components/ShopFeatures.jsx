import {
  FaTrophy,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset
} from "react-icons/fa";

import "./ShopFeatures.css";

function ShopFeatures() {

  const features = [
    {
      id: 1,
      icon: <FaTrophy />,
      title: "High Quality",
      description: "crafted from top materials"
    },
    {
      id: 2,
      icon: <FaShieldAlt />,
      title: "Warranty Protection",
      description: "Over 2 years"
    },
    {
      id: 3,
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Order over 150 $"
    },
    {
      id: 4,
      icon: <FaHeadset />,
      title: "24 / 7 Support",
      description: "Dedicated support"
    }
  ];

  return (
    <section className="shop-features">

      <div className="shop-features-container">

        {features.map((feature) => (

          <div
            className="shop-feature"
            key={feature.id}
          >

            {/* Icon */}
            <div className="shop-feature-icon">
              {feature.icon}
            </div>

            {/* Text */}
            <div className="shop-feature-text">

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ShopFeatures;