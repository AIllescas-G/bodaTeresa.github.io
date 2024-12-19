import { useState } from "react";


export default function MainMenu() {



    

    const [none, setNone] = useState(true)

    const onClickHome = () => {
        window.location.href = "#home";
        setNone(!none);
    };

    const onClickItinerario = () => {
        window.location.href = "#itinerario";
        setNone(!none);
    };

    const onClickConfirma = () => {
        window.location.href = "#confirma";
        setNone(!none);
    };

    const onClickPlanea = () => {
        window.location.href = "#planea";
        setNone(!none);
    };

    const onClickHotel = () => {
        window.location.href = "#hotel";
        setNone(!none);
    };



    const toggleMenu = () => {
        setNone(!none);
    };

    return (



        <div className={` main-menu layout-background   ${none ? 'none-menu' : ''}`}>

            <div className="main-button ">
                <div className=" flex flex-col mt-9 text-left gap-6 justify-start items-start ml-6 text-2xl">
                    <button onClick={onClickHome}> Home </button>
                    <button onClick={onClickItinerario}> Itinerario  </button>
                    <button onClick={onClickConfirma}> Confima asistencia  </button>
                    <button onClick={onClickPlanea}> Planea vieje  </button>
                    <button onClick={onClickPlanea}> Hospedaje </button>
                </div>
            </div>
            <button className="button-menu" onClick={toggleMenu}>
               
            </button>

        </div>
    )

}
