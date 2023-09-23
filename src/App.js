import './App.css';
import { HashRouter as  Router, Routes, Route} from 'react-router-dom'

import {  useState } from "react";

import Portfolio from './Portfolio';

import Header from './Header';
import Body from './Body';
import About from './About';
import Footer from './Footer'

function App() {
    // if (Portfolio) {
    //     return (
    //         <Router>
    //             <div className="App">
    //                 {/* {Body && <Header/>}
    //                     <Header /> */}
    //                 <Routes>
    //                     <Route path="/portfolio" element={<Portfolio />} />
    //                 </Routes>
    //                 <Footer />
    //             </div>
    //         </Router>
    //     );

    // }else{
    // return (
    //     <Router>
    //         <div className="App">
    //             {/* {Body && <Header/>}
    //                     <Header /> */}
    //             <Header />
    //             <Routes>
    //                 <Route exact path="/" element={<Body />} />
    //                 <Route path="/about" element={<About />} />
    //                 {/* <Route path="/portfolio" element={<Portfolio />} /> */}
    //             </Routes>
    //             <Footer />
    //         </div>
    //     </Router>
    // );
    // }
    // const [portfolio, setPortfolio] = useState(false)
    // const toggleRoute = () => {
    //     setPortfolio(true)}
    //     else {
    //     setPortfolio(false)
        
    // }
    // console.log(portfolio)


    return (
        <Router>
            <div className="App">
                {/* <Header/> */}
                <Routes>
                    <Route exact path="/" element={<Body />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
