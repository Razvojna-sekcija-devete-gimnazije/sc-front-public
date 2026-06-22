import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1 className="about-main-title">O Našoj Školi</h1>
        <p className="about-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at suscipit neque. Praesent ornare, nibh eget lacinia gravida, urna quam congue orci, sit amet egestas neque libero ac leo. Sed a felis at ante lobortis volutpat. Integer ullamcorper aliquam sapien ac mollis.
        </p>
      </section>

      <hr className="about-divider" />

      <div className="about-content-grid">
        
        <section className="about-section">
          <h2 className="about-section-title">Istorijat i tradicija</h2>
          <p className="about-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at suscipit neque. Praesent ornare, nibh eget lacinia gravida, urna quam congue orci, sit amet egestas neque libero ac leo. Sed a felis at ante lobortis volutpat. Integer ullamcorper aliquam sapien ac mollis. Aenean mollis dui purus, eget maximus risus luctus a. Phasellus non aliquet purus. Ut condimentum non quam sit amet auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec egestas justo. Curabitur a risus viverra, euismod orci id, egestas risus. Phasellus ultricies faucibus neque id convallis. Donec non justo at ex luctus sagittis.
          </p>
        </section>

        <section className="about-cards-grid">
          <div className="about-card">
            <h3 className="about-card-title">Naša Misija</h3>
            <p className="about-card-text">
              Curabitur a risus viverra, euismod orci id, egestas risus. Phasellus ultricies faucibus neque id convallis. Donec non justo at ex luctus sagittis. Donec at suscipit neque. Praesent ornare, nibh eget lacinia gravida, urna quam congue orci, sit amet egestas neque libero ac leo.
            </p>
          </div>
          
          <div className="about-card">
            <h3 className="about-card-title">Naša Vizija</h3>
            <p className="about-card-text">
              Aenean mollis dui purus, eget maximus risus luctus a. Phasellus non aliquet purus. Ut condimentum non quam sit amet auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec egestas justo. Curabitur a risus viverra, euismod orci id, egestas risus.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}