import React, { Fragment } from 'react'
import Planet from './planet'

function clickOnPlanet(name) {
    return (
        console.log(`Você clicou no planteta ${name}`)
    )
}

function Planets() {
    return (
        <Fragment>
            <h3>Planets List</h3>
            <hr/>
            <Planet name='Mercúrio'
            description='Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. '
            img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg'
            link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
            clickOnPlanet={clickOnPlanet}
            />
            <Planet name='Marte'
            description="Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem a divindade romana da guerra, muitas vezes é descrito como o Planeta Vermelho"
            img_url='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg'
            link="https://pt.wikipedia.org/wiki/Marte_(planeta)"
            clickOnPlanet={clickOnPlanet}
            />   
                
        </Fragment>
        
    )
}

export default Planets