import { Card } from "../components/Card"
import { Title } from "../components/Title"


export const Eventos = () => {
  return (
    <>
      <Title titulo="Vuelos" />
      <br />
    <div>
      <Card titulo="Vuelo a..." price="C$800"  img={{ src: "img/vuelo.png", alt: "vuelos" }}/>
      
    </div>
    </>
  )
}