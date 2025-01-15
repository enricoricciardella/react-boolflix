import { contextUse } from "../../Context/GlobalContext";
import { handleSearch } from "../../Services/Api";
import { useState } from "react";

export default function Searchbar(props) {
  const { setData } = contextUse();

  const [input, setInput] = useState();

  function callBackInput(event) {
    setInput(event.target.value);
  }

  function callBackApi() {
    handleSearch(input, setData);
  }
  return (
    <>
      <input type="text" value={input} onChange={callBackInput} />
      <button onClick={callBackApi}>Submit</button>
    </>
  );
}
