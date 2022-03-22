const Image = ({path, alt, cln}) => {
    return(
        <div className={`container-${cln}`}>
            <div className={`container-${cln}-img`}>
                <img src={path} alt={alt}/>
            </div>
        </div>
    )
}

export default Image;