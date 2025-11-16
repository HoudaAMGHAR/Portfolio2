import React, {useState, useEffect} from "react";
import Navigation from "./components/Navigation";
import Expertise from "./components/Expertise";
import ExperienceTimeline from "./components/ExperienceTimeline";           
import FadeIn from './components/FadeIn';
import './index.scss';
 
function App() {
    const [mode, setMode] = useState('dark'); // ✅ Correction ici
 
    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }
 
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
 
    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <ExperienceTimeline/>
                <Timeline/>
                <Project/>
                <Contact/>
            </FadeIn>
            <Footer />
        </div>
    );
}
 
export default App;