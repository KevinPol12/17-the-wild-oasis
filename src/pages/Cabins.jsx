import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([]);

  useEffect(function () {
    async function execute() {
      const cabins = await getCabins();

      console.log(cabins);
      setCabins(cabins);
    }
    execute();
  }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <ul>
        List of Cabins
        {cabins.map((cabin) => (
          <li key={cabin.id}>
            <h2>{cabin.name}</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Price: {cabin.regularPrice}</p>
              <p>Discount: {cabin.discount}</p>
              <p>Description: {cabin.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Cabins;
