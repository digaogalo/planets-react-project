import './style.css'

function GrayImg(props) {
    return (
       
        <img className={props.gray ? 'gray-img' : 'color-img'} src={props.img_url} alt="planets"></img>
    )
}

export default GrayImg