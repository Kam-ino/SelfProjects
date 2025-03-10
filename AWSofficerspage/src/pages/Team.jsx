import React, { useState } from 'react';
import Officer from '../components/Officers';

import Roque from '../img/eduard.jpg';
import Yang from '../img/jerome.jpg';
import Soquiat from '../img/marc.jpg';
import Guevarra from '../img/nico.jpg';
import Comia from '../img/christian.jpg';
import Parungao from '../img/crystal.jpg';
import Nano from '../img/raphael.jpg';
import Lang from '../img/marky.jpg';
import DeGuzman from '../img/johann.jpg';
import Mendoza from '../img/jm.jpg';
import Ventura from '../img/dustin.jpg';
import Lituanas from '../img/kobe.jpg';

import more from '../img/more.jpg';
import './Team.css';
import OfficerPopup from '../components/OfficerPopup';

function Team() {
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedOfficer, setSelectedOfficer] = useState(null);
    const [officer, setOfficer] = useState(null);

    return (
        <div className="team-container">

            <div>
                <h1>Meet The Team</h1>
                <h2>Lorem ipsum odor amet, consectetuer adipiscing elit. Orci scelerisque fermentum enim nullam conubia laoreet? 
                    Quam viverra libero inceptos lacus sed. Egestas hendrerit aliquam at rhoncus adipiscing sem. Quis tempus platea purus quis libero vitae.</h2>
                <div className="team-images">
                    <Officer 
                        name="Roque" 
                        image={Roque} 
                        onClick={() => { setSelectedOfficer('Eduard'); setOfficer(Roque); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Yang" 
                        image={Yang} 
                        onClick={() => { setSelectedOfficer('Jerome');setOfficer(Yang); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Soquiat" 
                        image={Soquiat} 
                        onClick={() => { setSelectedOfficer('Marc');setOfficer(Soquiat); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Guevarra" 
                        image={Guevarra} 
                        onClick={() => { setSelectedOfficer('Nico'); setOfficer(Guevarra); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Comia" 
                        image={Comia} 
                        onClick={() => { setSelectedOfficer('CJ'); setOfficer(Comia); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Parungao" 
                        image={Parungao} 
                        onClick={() => { setSelectedOfficer('Crystal'); setOfficer(Parungao); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Nano" 
                        image={Nano} 
                        onClick={() => { setSelectedOfficer('Raphael'); setOfficer(Nano); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Lang" 
                        image={Lang} 
                        onClick={() => { setSelectedOfficer('Marky'); setOfficer(Lang); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="De Guzman" 
                        image={DeGuzman} 
                        onClick={() => { setSelectedOfficer('Johann'); setOfficer(DeGuzman); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Mendoza" 
                        image={Mendoza} 
                        onClick={() => { setSelectedOfficer('JM'); setOfficer(Mendoza); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Ventura" 
                        image={Ventura} 
                        onClick={() => { setSelectedOfficer('Dustin'); setOfficer(Ventura); setOpenPopup(true); }} 
                    />
                    <Officer 
                        name="Lituañas" 
                        image={Lituanas} 
                        onClick={() => { setSelectedOfficer('Kobe'); setOfficer(Lituanas); setOpenPopup(true); }} 
                    />
                    <div>
                        <img src={more} alt="More" />
                        <p></p>
                    </div>
                </div>
            </div>
            <OfficerPopup  
                open={openPopup} 
                onClose={() => setOpenPopup(false)}
                >
                    <Officer 
                        name={selectedOfficer} 
                        image={officer} 
                    />
                <h2>Details about {selectedOfficer}</h2>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. At senectus enim placerat primis eu ipsum. Magna lacinia potenti ante ex quam mi taciti.
                Facilisi et pulvinar nam aptent dapibus eget bibendum orci hac. Risus posuere rhoncus suspendisse vel interdum ullamcorper tellus suscipit. 
                Suspendisse conubia porttitor mi suscipit efficitur condimentum congue. Lobortis accumsan lacinia, interdum elit metus arcu erat.</p>
            </OfficerPopup>
        </div>
    )
}

export default Team;
