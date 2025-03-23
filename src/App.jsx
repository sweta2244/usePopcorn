import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Component/Homepage";

export default function App() {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      // setLoading(true);
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?i=tt0372784&apikey=76f6573d"
        );
        const json=await response.json();
        setData(json);
        // setLoading(false);
        console.log("fetehced Data:", json);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!data ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        <div>
          <Homepage data={data} />
        </div>
      )}
    </>
  );
}
