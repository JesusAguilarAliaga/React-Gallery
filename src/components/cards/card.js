const Card = ({name, image}) => {
    return (
        <div className=" w-30 d-flex justify-content-around">
            <div className="card">
                <div className="card-body d-flex flex-column text-center p-0">
                    <a download={image} href={image}><img download src={image} alt="Card" className="card-img-top"/></a>
                    <h5 className=" mx-1 mb-1 rounded-1 flex">{name}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card;