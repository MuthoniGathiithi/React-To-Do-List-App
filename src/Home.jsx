
import {useNavigate} from 'react-router-dom'
import "./App.css";


export default function Home () {
const navigate =useNavigate ();

const handleExploreClick = () => {
    navigate('/explore');
};

return (
<div className="app-container">
<h1>🚀 Embark on Your Galactic Adventure</h1>

<p>Welcome to Team Explore - your ultimate gateway to the cosmos! Discover the mysteries of distant galaxies, visit fascinating planets, and learn about the wonders of space including moons, planets, and brilliant stars that light up the universe.</p>

<button onClick={handleExploreClick}>Let's Explore the Galaxy!</button>

</div>

);

}