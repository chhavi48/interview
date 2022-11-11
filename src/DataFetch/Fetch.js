import axios from "axios";
import react, { useEffect, useState } from "react";
const Fetch = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      let res = await axios.get("https://dummyjson.com/products/1");
      console.log(res.data);
      setdata(res.data);
    };
    getdata();
  }, []);
  return (
    <>
      <div>{data.id}</div>
      <div>{data.price}</div>
    </>
  );
};
export default Fetch;
