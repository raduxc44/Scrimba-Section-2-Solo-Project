function Card() {
    return(
        <div className="card">
            <img src="https://source.unsplash.com/WLxQvbMyfas" alt="placeholder" />
            <div className="card-info">
                <div className="card-upper">
                    <div className="horizontal">
                        <div className="title">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>JAPAN</p>
                        </div>
                        <a href="https://www.google.com/maps/dir//35.360557,138.72767/@35.3628825,138.6573517,12zd" target={'_blank'} rel= 'noreferrer'>View on Google Maps</a>
                    </div>
                    <h2>Mount Fuji</h2>
                </div>
                <div className="card-lower">
                    <h6>12 Jan, 2021 - 24 Jan 2021</h6>
                    <p>Mount Fuji is the tallest mountain in Japan, 
                        standing at 3,776 meters (12,380 feet). 
                        Mount Fuji is the single most popular tourist site in Japan, 
                        for both Japanese and foreign tourists.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card