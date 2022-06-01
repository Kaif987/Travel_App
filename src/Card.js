const Card = (props) => {
    return ( 
        <div className="card--section">
            <div className="card--image">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="card--content">
                <div className="card--location">
                    <img src="./Images/gps.png" alt="" />
                    <h6>{props.location}</h6>
                    <a href= {props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3>{props.title}</h3>
                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
 
export default Card;