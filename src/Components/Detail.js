import React from 'react';

const Detail = ({album, artists, name}) => {

    return (
        <div className="offset-md-1" >           
            <div className="row col-sm-12 px-0">
                <div className="card text-dark bg-light mb-3">
                    <div className="card-header"><i className="bi bi-arrow-right-circle-fill"></i>&ensp;<strong>{name}</strong></div>
                    <div className="card-body">
                    <h5 className="card-title"><i>{artists[0].name}</i></h5>
                        <img
                        className="card-img" 
                        src={album.images[0].url}
                        alt={name}>                    
                        </img>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Detail;