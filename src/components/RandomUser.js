import { useEffect, useState } from "react";
import axios from "axios";

const RandomUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [change, setChange] = useState(false);

  useEffect(() => {
    // fetch('https://randomuser.me/api/')
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log("randomuser data".data);
    //     setFirstName(data.results[0].name.first);
    //     setLastName(data.results[0].name.last);
    // });
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log("randomuser res".res);
      setFirstName(res.data.results[0].name.first);
      setLastName(res.data.results[0].name.last);
    });
  }, [change]);

  return (
    <>
      Random User: {firstName} {lastName}
      <button onClick={() => setChange(!change)}>Get Random User</button>
    </>
  );
};

export default RandomUser;
