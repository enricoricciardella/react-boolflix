import { contextUse } from "../../Context/GlobalContext";

export function CardList() {
  const { data } = contextUse();

  return (
    <>
      {data != undefined ? (
        data.map((curElem) => (
          <div>
            <h1>{curElem.title}</h1>
          </div>
        ))
      ) : (
        <h1>Inserisci il titolo del film!</h1>
      )}
    </>
  );
}
