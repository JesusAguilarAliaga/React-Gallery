import { get } from "axios";
import { useEffect } from "react";

const AboutUs = ({ petition }) => {

    useEffect(() => {
        get(`${process.env.REACT_APP_URL_API}${petition}`)
        .then(({ data }) => console.log(data[1]));
    }, [petition]);	



    return (
        <>
            <p>Hola</p>
        </>
    )
}

export default AboutUs;