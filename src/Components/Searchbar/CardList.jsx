import { contextUse } from "../../Context/GlobalContext";




export function CardList() {
  const { data } = contextUse();

  console.log(data);
  function LinguaFilm({ filmLanguage }) {
    let bandiera = "";
    if (filmLanguage === "en") { bandiera = "./public/images/en.png" }
    else if (filmLanguage === "it") { bandiera = "./public/images/it.png" }
    else { bandiera = "./public/images/placeholder.png" }

    return <img src={bandiera} />;
  };
  function CreaStelle({ voto }) {
    // Arrotonda il numero per eccesso
    const votoFinale = Math.ceil(voto / 2);
    const stelleArray = [];
    for (let i = 0; i < 5; i++) {
      (i < votoFinale) ? stelleArray.push(`solid`) : stelleArray.push(`regular`)
    }
    return (
      stelleArray.map((stelle, i) => (
        <i key={i} className={`fa-${stelle} fa-star`}></i>

      )))

  }
  return (
    <>
      {data != undefined ? (
        data.map((curElem) => (
          <div key={curElem.id}>
            <h1>{"title" in curElem ? curElem.title : curElem.name}</h1>
            <h2>
              {"title" in curElem ? curElem.original_title : curElem.original_name}
            </h2>
            <img  src={`http://image.tmdb.org/t/p/w200${curElem.poster_path}`} alt="" />
            <h3>
             
              <LinguaFilm filmLanguage={curElem.original_language} />
              <CreaStelle voto={curElem.vote_average} />
            </h3>
            <div>
              {"vote_average" in curElem ? curElem.vote_average : "N/A"}
            </div>
            
          </div>
        ))
      ) : (
        <h1>Inserisci il titolo del film!</h1>
      )}
    </>
  );
}