
import React from 'react'
import GrayImg from '../../shared/gray_img' 
import DescriptionWithLink from '../../shared/description_with_link/index'
import Planets from "./planets"

class Planet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            planet: []
        }
    }

    render() {
        return (

        <div onClick={() => props.clickOnPlanet(props.name)}>
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <Planets planets={this.state.planet}/>
            <hr/>
        </div>           
    )
  }
}


export default Planet


