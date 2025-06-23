import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
// import Nav from './components/Nav';
import Home from './pages/Home';
import MyProjects from "./pages/MyProjects.tsx";
import Education from "./pages/Education.tsx";
import Certifications from "./pages/Certifications.tsx";
import Experience from "./pages/Experience.tsx";
import WorkContributions from "./pages/WorkContributions.tsx";
import Organizations from "./pages/Organizations.tsx";
import Contributions from "./pages/Contributions.tsx";
import AboutMe from "./pages/AboutMe.tsx";

function App() {
    const base = '/PortfolioVlad';
    return (
        <Router>
            {/*<Nav />*/}
            <Routes>
                <Route path="/PortfolioVlad/" element={<Navigate to={`${base}/Home`} />} />
                <Route path={`${base}/Home`} element={<Home/>} />
                <Route path={`${base}/Education`} element={<Education/>} />
                <Route path={`${base}/Experience`} element={<Experience/>} />
                <Route path={`${base}/MyProjects`} element={<MyProjects/>} />
                <Route path={`${base}/WorkContributions`} element={<WorkContributions/>} />
                <Route path={`${base}/Certifications`} element={<Certifications/>} />
                <Route path={`${base}/Organizations`} element={<Organizations/>} />
                <Route path={`${base}/Contributions`} element={<Contributions/>} />
                <Route path={`${base}/AboutMe`} element={<AboutMe/>} />
            </Routes>
        </Router>
    );
}

export default App;
