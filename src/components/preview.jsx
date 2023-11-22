import '../hoja-estilo/movie.css'

function Preview({imagenUrl, titulo, rating, webchannel}){
    return(
        
            
                <div className='container-second'>
                <div className="preview-image">
                    <img className="image-movie" src="https://static.tvmaze.com/uploads/images/medium_portrait/478/1195717.jpg" alt="Loki foto"></img>

                </div>
                <div className="preview-title">
                    <p>Loki</p>
                </div>
                <div className="preview-rating-webchannel-container">
                    <div className="rating">
                        <p>8.1</p>
                    </div>
                    <div className="webchannel">
                        <p>Web channel</p>
                    </div>
                </div>
                </div>



    )

}
export default Preview;