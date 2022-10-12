import { useState } from "react";
import "./styles.css";

export default function App() {
  const [val, Setval] = useState("");
  const handleClick = (e) => {
    Setval(val.concat(e.target.name));
  };
  const handleClear = () => {
    Setval("");
  };
  const handleDelete = () => {
    Setval(val.substring(0, val.length - 1));
  };
  const handleResult = () => {
    try {
      Setval(eval(val).toString());
    } catch (err) {
      Setval("Error");
    }
  };
  return (
    <main>
      <form>
        <input value={val} type="text" />
      </form>
      <section className="section">
        <button onClick={handleClear} className="two-col" name="clear">
          C
        </button>
        <button onClick={handleDelete} name="del">
          &larr;
        </button>
        <button onClick={handleClick} className="orange" name="/">
          &divide;
        </button>
        <button onClick={handleClick} name="7">
          7
        </button>
        <button onClick={handleClick} name="8">
          8
        </button>
        <button onClick={handleClick} name="9">
          9
        </button>
        <button onClick={handleClick} className="orange" name="*">
          &times;
        </button>
        <button onClick={handleClick} name="4">
          4
        </button>
        <button onClick={handleClick} name="5">
          5
        </button>
        <button onClick={handleClick} name="6">
          6
        </button>
        <button onClick={handleClick} className="orange" name="-">
          &minus;
        </button>
        <button onClick={handleClick} name="1">
          1
        </button>
        <button onClick={handleClick} name="2">
          2
        </button>
        <button onClick={handleClick} name="3">
          3
        </button>
        <button onClick={handleClick} className="orange" name="+">
          +
        </button>
        <button onClick={handleClick} className="three-col " name="0">
          0
        </button>
        <button onClick={handleResult} className="orange" name="=">
          =
        </button>
      </section>
    </main>
  );
}
