import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

import './GenericLayout.css'

export const GenericLayout = ({children})=>{

    return(
        <div className="contenedor-layout d-flex flex-column align-items-center justify-content-center">
            <Navbar />

            <div style={{minHeight: '87.5vh', width: '100%'}}>
                {children}
            </div>

            <Footer />
        
        </div>

    )
}