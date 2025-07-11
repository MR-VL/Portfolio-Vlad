import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
// import Nav from './components/Nav';
import Home from './pages/Home';
import MyProjects from "./pages/MyProjects.tsx";
import Education from "./pages/Education.tsx";
import Certifications from "./pages/Certifications.tsx";
import Experience from "./pages/Experience.tsx";
import WorkContributions from "./pages/WorkContributions.tsx";
import OpenSource from "./pages/OpenSource.tsx";
import Contributions from "./pages/Contributions.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import Nav from './components/nav';
import EventParticipation from "./pages/EventParticipation.tsx";
import Contact from "./pages/Contact.tsx";
import Hobbies from "./pages/Hobbies.tsx";
import Skills from "./pages/Skills.tsx";
import CurrentProjects from "./pages/CurrentProjects.tsx";


function App() {
    const base = '/Portfolio-Vlad';
    return (
        <Router>
            <Nav></Nav>
            <Routes>
                {/* Redirect from root `/` */}
                <Route path="/" element={<Navigate to={`${base}/Home`} replace />} />

                {/* ✅ Redirect from `/Portfolio-Vlad/` to `/Portfolio-Vlad/Home` */}
                <Route path={`${base}/`} element={<Navigate to={`${base}/Home`} replace />} />

                <Route path="/PortfolioVlad/" element={<Navigate to={`${base}/Home`} />} />
                <Route path={`${base}/Home`} element={<Home/>} />
                <Route path={`${base}/Education`} element={<Education/>} />
                <Route path={`${base}/Experience`} element={<Experience/>} />
                <Route path={`${base}/MyProjects`} element={<MyProjects/>} />
                <Route path={`${base}/WorkContributions`} element={<WorkContributions/>} />
                <Route path={`${base}/Certifications`} element={<Certifications/>} />
                <Route path={`${base}/OpenSource`} element={<OpenSource/>} />
                <Route path={`${base}/Contributions`} element={<Contributions/>} />
                <Route path={`${base}/AboutMe`} element={<AboutMe/>} />
                <Route path={`${base}/Contact`} element={<Contact/>} />
                <Route path={`${base}/EventParticipation`} element={<EventParticipation/>} />
                <Route path={`${base}/Hobbies`} element={<Hobbies/>} />
                <Route path={`${base}/Skills`} element={<Skills/>} />
                <Route path={`${base}/CurrentProjects`} element={<CurrentProjects/>} />
            </Routes>
        </Router>
    );
}

export default App;
