import { useState } from "react";

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [

    {
      image: "/gallery/Core cutting works.jpeg",
      category: "Core Cutting",
      title: "Core Cutting Work",
      desc: "Precision concrete core cutting work using professional equipment."
    },

    {
      image: "/gallery/core-cutting-2.jpeg",
      category: "Core Cutting",
      title: "Core Cutting Opening",
      desc: "Accurate circular concrete cutting for structural openings."
    },

    {
      image: "/gallery/rcc-cutting-1.jpeg",
      category: "RCC Work",
      title: "RCC Cutting Work",
      desc: "Controlled RCC cutting and concrete breaking work."
    },

    {
      image: "/gallery/rcc-cutting-2.jpeg",
      category: "RCC Work",
      title: "Concrete Breaking Work",
      desc: "Professional concrete breaking and dismantling work."
    },

    {
      image: "/gallery/rcc-structural-work.jpeg",
      category: "RCC Work",
      title: "RCC Structural Work",
      desc: "Reliable RCC structural modification and construction work."
    },

    {
      image: "/gallery/Rebaring works.jpeg",
      category: "Rebaring",
      title: "Rebaring Work",
      desc: "Professional rebaring work for structural strengthening and modifications."
    },

    {
      image: "/gallery/rebaring.jpeg",
      category: "Rebaring",
      title: "Rebaring & Reinforcement",
      desc: "Quality reinforcement and rebaring work for construction projects."
    }

  ];

  return (

    <section className="gallery" id="gallery">

      <span className="section-tag">
        OUR PROJECTS
      </span>

      <h2 className="section-title">
        Our Recent Project Work
      </h2>

      <p className="section-text">
        Take a look at some of our completed construction,
        core cutting, RCC cutting and rebaring projects.
      </p>

      <div className="gallery-grid">

        {projects.map((project, index) => (

          <div className="gallery-card" key={index}>

            <div
              className="gallery-image"
              onClick={() => setSelectedImage(project)}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="gallery-overlay">
                <span>View Image</span>
              </div>

            </div>

            <div className="gallery-content">

              <span className="gallery-category">
                {project.category}
              </span>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.desc}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* IMAGE LIGHTBOX */}

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image"
          >
            ×
          </button>

          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            onClick={(e) => e.stopPropagation()}
          />

          <div
            className="lightbox-caption"
            onClick={(e) => e.stopPropagation()}
          >

            <strong>
              {selectedImage.title}
            </strong>

            <span>
              {selectedImage.category}
            </span>

          </div>

        </div>

      )}

    </section>

  );
}

export default Gallery;