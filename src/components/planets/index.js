import React, { Fragment } from 'react'
import Planet from './planet'

function Planets() {
    return (
        <Fragment>
            <h3>Planets List</h3>
            <hr/>
            <Planet name='Mercúrio'
            description='Mercurio es el planeta del sistema solar, más cercano al Sol y es el de menor tamaño. No es mucho lo que se sabe de él, además de que es un planeta terrestre (al contrario de los planetas gaseosos), es decir que tiene una superficie sólida.'
            img_url='https://tvazteca.brightspotcdn.com/dims4/default/b6788aa/2147483647/strip/true/crop/1280x800+0+0/resize/1500x938!/format/jpg/quality/80/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F77%2F94%2F781491c94c0b9fdf332e20e7529c%2Fmercurio-visible-como.jpg'
            />
           
        </Fragment>
        
    )
}

export default Planets