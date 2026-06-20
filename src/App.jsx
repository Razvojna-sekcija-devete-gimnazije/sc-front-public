import Header from './components/Header.jsx'
import './App.css'
import SkolaImg from "./assets/skola.jpg";

function App() {

  return (
    <>
      <Header />
      <main>
        <h1 id="glavni">Deveta Gimnazija M.P.Alas</h1>
        <section>
          <div>
            <h3>Opis Skole</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat.
              In id cursus mi pretium tellus duis convallis.
              Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere.
              Ut hendrerit semper vel class aptent taciti sociosqu.
              Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div>
            <h3>Top skola</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat.
              In id cursus mi pretium tellus duis convallis.
              Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere.
              Ut hendrerit semper vel class aptent taciti sociosqu.
              Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div>
            <h3>Zasto je djaci vole</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.
              Quisque faucibus ex sapien vitae pellentesque sem placerat.
              In id cursus mi pretium tellus duis convallis.
              Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere.
              Ut hendrerit semper vel class aptent taciti sociosqu.
              Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
          <div>
            <img src={SkolaImg}></img>
          </div>
        </section>
        <br></br>
        <h2>Obavestenja</h2>
        <section className="kartice">
          {/*element koji stvara kartice za obavestenja*/}
          <div className='kartica'>
            <h2>Upis ocena</h2>
            <p>neki tekst bla bla bla</p>
          </div>
          <div className='kartica'>
            <h2>Upis ocena</h2>
            <p>neki tekst bla bla bla</p>
          </div>
          <div className='kartica'>
            <h2>Upis ocena</h2>
            <p>neki tekst bla bla bla</p>
          </div>
          <div className='kartica'>
            <h2>Upis ocena</h2>
            <p>neki tekst bla bla bla</p>
          </div>
          <div className='kartica'>
            <h2>Upis ocena</h2>
            <p>neki tekst bla bla bla</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
