import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroById } from '../../selectors/getHeroById';

// Hook que extrae los parámetros que van por el URL

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    // Validation - si el argumeno qe recbo por url no se encuentra, saco al usuario 
    if (!hero) {
        return <Redirect to="/" />;
    }

    // Regresar a la página anterior
    const handleReturn = () => {
        if (history.length <= 2) {  //validación
            history.push('/');      //regresa a la página principal 
        } else {
            history.goBack();
        }
        history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`./assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3> {superhero} </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> {alter_ego} </li>
                    <li className="list-group-item"> <b> Publisher: </b> {publisher} </li>
                    <li className="list-group-item"> <b> First appearance: </b> {first_appearance} </li>
                </ul>

                <h5> Characters </h5>
                <p> {characters} </p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>

        </div>
    )
}
