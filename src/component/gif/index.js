const GifAPI = ({url , title}) => {
    return(
        <div>
            <p>{title}</p>
            <img src={url} alt="" />
        </div>
    )
}

export default GifAPI