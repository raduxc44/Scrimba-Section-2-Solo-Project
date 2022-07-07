function Card(props) {
    return(
        <div className="card">
            <img src={props.imageUrl} alt="placeholder" />
            <div className="card-info">
                <div className="card-upper">
                    <div className="horizontal">
                        <div className="title">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>{props.title}</p>
                        </div>
                        <a href="https://www.google.com/maps/dir//35.360557,138.72767/@35.3628825,138.6573517,12zd" target={'_blank'} rel= 'noreferrer'>View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                </div>
                <div className="card-lower">
                    <h6>{props.startDate} - {props.endDate}</h6>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card