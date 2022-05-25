import { useEffect, useState } from "react";
import { get } from "axios";
import Card from "../cards/card";

const Gallery = ({petition}) => {
    
    const [images, setImages] = useState()

    useEffect(() => {
        get(`${process.env.REACT_APP_URL_API}${petition}`)
            .then(({ data }) => setImages(data))
            .catch(error => console.log(error))
    }, [petition]);

    return (
    <>
        <div className="d-flex justify-content-between w-100 flex-wrap  gap-5 px-5 py-5 mt-5">
            {
                images ? 
                (images.map(({url, name, id}) => <Card key={id} image={url} name={name}/>)) 
                :(<span className="span"></span>)
            }
        </div>
    </>
    )
}

export default Gallery;