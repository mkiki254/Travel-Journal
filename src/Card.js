export default function Card(props){
    return(
        <div className="container">
            <div className="app--content">
                <img src={`./images/${props.imgUrl}`} alt="destination icon" className="destination--icon"/>
                <section>
                    <div className="section--location">
                        <img src="./images/location.png" alt="location icon" className="location--icon"/> 
                        <p className="location--name">{props.location}</p>
                        <p><a href={props.google_maps_link} target="_blank">View on Google Maps</a></p>
                    </div>
                    <h1 className="title">{props.title}</h1>
                    <p className="dates">{props.start_date} - {props.end_date}</p>
                    <p>{props.description}</p>
                </section>
            </div>
            <br/>
            <br/>
            <hr/>
        </div>
    )
}