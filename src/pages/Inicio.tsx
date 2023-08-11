import { useEffect } from "react";
import { Title } from "../components/Title";
import { Card } from "../components/Card";

export const Inicio = () => {
  useEffect(() => {
    void fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <>
      <Title titulo="Hoteles" />
      <br />
      <br />
    <div>
      <Card titulo="hotel 1" price="C$1000" img={{ src: "img/hotel1.png", alt: "Nicaragua" }}/>
<br />
<br />
      <Card titulo="hotel 2" price="C$1500"  img={{ src: "img/hotel2.png", alt: "Nicaragua" }}/>

    </div>
    </>
   
  );
};