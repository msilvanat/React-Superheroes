import React from 'react';
import { Link } from 'react-router-dom';
import './HeroCard.css';

export const HeroCard = ({   // props
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    return (
        <Link to={`./hero/${id}`} className="my-card">
            <img src={`./assets/heroes/${id}.jpg`} className="img img-responsive" alt={superhero} />
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                (alter_ego !== characters)
                                && <p>{characters}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default HeroCard;


    // return (
    //     <div className="card ms-3" style={{ maxWidth: 540 }}>
    //         <div className="row no-gutters">
    //             <div className="col-md-4">
    //                 <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero} />
    //             </div>
    //             <div className="col-md-8">

    //                 <div className="card-body">
    //                     <h5 className="card-title"> {superhero} </h5>
    //                     <p className="card-text"> {alter_ego} </p>

    //                     {
    //                         (alter_ego !== characters)
    //                         && <p className="card-text"> {characters} </p>
    //                     }

    //                     <p className="card-text">
    //                         <small className="text-muted"> {first_appearance} </small>
    //                     </p>

    //                     <Link to={`./hero/${id}`}>
    //                         More...
    //                     </Link>

    //                 </div>

    //             </div>

    //         </div>
    //     </div>
    // )


