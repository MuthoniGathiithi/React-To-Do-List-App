import  {BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";

export default function App () {
return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<Explore />} />  
</Routes>
</BrowserRouter>

);
}
