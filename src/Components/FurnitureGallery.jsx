import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";

import "./FurnitureGallery.css";

function FurnitureGallery() {

  const images = [
    image1, image2, image3,
    image4, image5, image6,
    image7, image8, image9
  ];

  return (
    <section className="furniture-section">

      <div className="furniture-title">
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>

      <div className="furniture-gallery">
        {images.map((src, index) => (
          <img
            key={index}
            className={`gallery-img-${index + 1}`}
            src={src}
            alt="Furniture"
          />
        ))}
      </div>

    </section>
  );
}

export default FurnitureGallery;