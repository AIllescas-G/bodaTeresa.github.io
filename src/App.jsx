import { useState } from "react";
import Header from "./04-components/00-header/Header";
import SectionHeader from "./04-components/01-info/SectionHeader";
import Baile from "./04-components/02-bailar/Baile";
import Itinerario from "./04-components/03-itinerario/Itinerario";
import Semaforo from "./04-components/04-semaforo/Semaforo";
import Form from "./04-components/05-form/Form";
import Escaleras from "./04-components/06-escaleras/Escaleras";
import Viaje from "./04-components/07-viaje/Viaje";
import { Hotel } from "./04-components/08-hotel/Hotel";
import MainMenu from "./04-components/mainMenu/MainMenu";
import Museo from "./04-components/09-museo/Museo";
import Transporte from "./04-components/10-trasporte/Transporte";




function App() {

  return (
    <>
      <div className="container-boda main-menu">

        <MainMenu />
        <Header />
        <SectionHeader />
        <Baile />
        <Itinerario />
        <Semaforo />
        <Form />
        <Escaleras />
        <Viaje />
        <Hotel />
        <Museo/>
        <Transporte/>

      </div>
    </>
  )
}

export default App
