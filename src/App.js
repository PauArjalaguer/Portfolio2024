import logo from './logo.svg';
import './App.css';
import { Divz } from "divz";
function App() {
  const goToUrl = (url) => {
    window.open(url, '_blank');
  }

  return (
    <>
      <video autoPlay muted loop id="background-video" className='background'>
        <source src="assets/images/video.mp4" type="video/mp4" />
      </video> <div className='flex justify-center mt-20'>
        <h1 className='font-bold text-slate-700 text-4xl'>Pau Arjalaguer</h1>
      </div>
      <Divz autoPlay={true}
        autoPlayDuration={10000}>

        <div>
          <video autoPlay muted loop onClick={() => { goToUrl("http://www.clubolesapati.cat") }} >
            <source src="assets/images/Shot_01.mp4" type="video/mp4" />
          </video>
         
        </div>
        <div>
          <img src="http://clubolesapati.cat//images/dynamic/newsImages/70.jpg" />
        </div>
        
      </Divz>

    </>
  );
}

export default App;
