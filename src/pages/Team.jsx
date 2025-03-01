import Navbar from "../components/Navbar";
import eduard from '../img/eduard.jpg'; // Import images
import jerome from '../img/jerome.jpg';
import marc from '../img/marc.jpg';
import nico from '../img/nico.jpg';
import more from '../img/more.jpg'

function Team(){
    return (
        <div>
            <div>
                <h1>Meet The Team</h1>
                <div className="team-images">
                    <div>
                        <img src={eduard} alt="Eduard" />
                        <p>Roque</p>
                    </div>
                    <div>
                        <img src={jerome} alt="Jerome" />
                        <p>Yang</p>
                    </div>
                    <div>
                        <img src={marc} alt="Marc" />
                        <p>Soquiat</p>
                    </div>
                    <div>
                        <img src={nico} alt="Nico" />
                        <p>Guevarra</p>
                    </div>
                    <div>
                        <img src={more} alt="More" />
                        <p></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Team;