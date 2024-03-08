import React from 'react';
import '../styles/Services.css';
import careImage from '../../public/image/CareImage.svg'
import ambulance from '../../public/image/Ambulance.svg'
import doctor from '../../public/image/Doctor.svg'


const Services = () => {
    return (
        <div className="cards-container">
            <div className="card-container">
                <div className="card">
                    <div className="img-content">
                    <img src={careImage} alt="Care Icon" className="icon-svg" />
                    </div>
                    <div className="content">
                        <p className="heading">Cuidados Personalizados</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipii
                            voluptas ten mollitia pariatur odit, ab
                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                            necessitatibus dignissimos molestias.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                <div className="img-content">
                    <img src={ambulance} alt="Care Icon" className="icon-svg" />
                    </div>
                    <div className="content">
                        <p className="heading">Servicio de Emergencia</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipii
                            voluptas ten mollitia pariatur odit, ab
                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                            necessitatibus dignissimos molestias.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                <div className="img-content">
                    <img src={doctor} alt="Care Icon" className="icon-svg" />
                    </div>
                    <div className="content">
                        <p className="heading">Personal Calificado</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipii
                            voluptas ten mollitia pariatur odit, ab
                            minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                            necessitatibus dignissimos molestias.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
