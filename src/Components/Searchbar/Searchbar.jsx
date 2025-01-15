import { contextUse } from "../../Context/GlobalContext";
import { handleSearch } from "../../Services/Api";
import { useState } from "react";

export default function Searchbar(props) {
  const { setData } = contextUse();

  const [input, setInput] = useState("");

  function callBackInput(event) {
    setInput(event.target.value);
  }

  async function callBackApi() {
    const movieResults = await handleSearch(input, "movie");
    const tvResults = await handleSearch(input, "tv");
  
    // Combina i risultati e aggiorna lo stato
    setData([...movieResults, ...tvResults]);
  }
  return (
    <>
      <input type="text" value={input} onChange={callBackInput} />
      <button onClick={callBackApi}>Submit</button>
    </>
  );
}


