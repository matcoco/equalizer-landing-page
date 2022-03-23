const Image = ({path, alt, cln}) => {
    return(
        <div className={`container-${cln}`}>
            <img className={`${cln}-img`} src={path} alt={alt}/>
        </div>
    )
}

export default Image;