import Image from "next/image"

export default function Service(props) {
    return(
        <div className="service">
            <Image src={props.img} alt="digital"/>
            <h1 className="service-h1">{props.title}</h1>
            <h1 className="service-h2">{props.description}</h1>
        </div>
    )
}