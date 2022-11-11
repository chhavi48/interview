import react, { useState } from "react";
const Todo = () => {
  const [query, setquery] = useState("");
  const [item, setitem] = useState([]);
  const handleChange = (e) => {
    const { value } = e.target;
    setquery(value);
  };
  const handleAdd = () => {
    const payload = {
      title: query,
      status: false
    };
    const newitem = [...item, payload];
    console.log(newitem);
    setitem(newitem);
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <div>
        {item.map((item) => {
          return <div>{item.title}</div>;
        })}
      </div>
    </>
  );
};
export default Todo;
