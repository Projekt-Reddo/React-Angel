import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ab from './image/image.jpg'


const AnimeRelations = () => {
    const animeL = {
        backgroundImage: `url(${ab})`,
        backgroundSize: 'cover',
        height: '7rem',
        width: '8rem',
        height: '10rem',
        borderRadius: '8px',
        backgroundPosition: "center",
    }

    const frame = {
        backgroundColor: "#19293B",
        borderRadius: "8px",
        fontSize: "0.8rem",
        width: "30rem"
    }



    return (
        <div>
            <h5>This is Relation</h5>
            {/* <div style={frame} >
                <div className="row">
                    <div style={animeL} className="col-4">
                    <div className="col-4">
                        <div className="col-12 text-center">Tit Le</div>
                    </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
}
 
export default AnimeRelations;