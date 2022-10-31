import './App.css';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import PresentationCard from './components/Card';
import Footer from './components/Footer';
import CardProject from './components/CardProject';
import Accordion from './components/Accordion';
import Vertical from './components/Vertical';
import ImageAvatars from './components/Avatar';
import tv from "./img/TeamViewer.png";
import brew from "./img/AppBrewery.png";
import th from "./img/Thomann.png";
import ap from "./img/Apple.png";

export default function App() {
  return (

    <div className="App">
      <Header />
      <SubHeader />
      <header className="App-header">
        <PresentationCard />
        <div className="cardbox" >
          <Vertical line="vLine" />
          <Vertical line="dLine" />
        </div>
        <CardProject color="dot" company="App Brewery" charge="Web Development" position="(March-2022 ongoing)" />
        <ImageAvatars img={brew} link="https://appbrewery.com/" />
        <Accordion container="Front and Backend development using React and Node JS"/>
        <CardProject color="redDot" company="Team Viewer" charge="Sales Representative" position=" (March 2021 - Sept 2021)" />
        <ImageAvatars img={tv} link="https://www.teamviewer.com/de/" />
        <Accordion container="Software sales focused on the portuguese market"/>
        <CardProject color="redDot" company="Thomann" charge="Sales Representative" position=" (Apr 2018 - Apr 2020)" />
        <ImageAvatars img={th} link="https://www.thomann.de/intl/index.html" />
        <Accordion container="Sales of music instruments in a B2b and B2C environment"/>
        <CardProject color="redDot" company="Apple" charge="Technical Advisor" position=" (May 2017- Mar 2018)" />
        <ImageAvatars img={ap} link="https://www.apple.com/" />
        <Accordion container="Technical support for a variety of Apple products"/>
      </header>
      <Footer />
    </div>
  );
}



