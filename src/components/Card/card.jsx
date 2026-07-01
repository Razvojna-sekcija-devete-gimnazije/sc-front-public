function Kartice (slika, opis, ime)
{
 return (
    <div className="kartica">
      <img className="kartica" src={slika} alt={naslov} />
      <div className="kartica-tekst">
        <h3 className="kartica-naslov">{naslov}</h3>
        <p className="kartica-opis">{opis}</p>
      </div>
    </div>)

}