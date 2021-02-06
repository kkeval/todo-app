import { Route } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import TodoApp from './Component/TodoApp';
import Footer from "./Component/Footer";


function App() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            
            <main>
                <div className="container main">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/TodoApp" component={TodoApp} />
                    <Route path="/About" component={About} />
                </div> 
            </main>  
                                 
            <Footer />            
        </div>


    )
}

export default App;
