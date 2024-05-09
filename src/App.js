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
      </video>
      <div className='absolute top-0 flex flex-col w-full justify-center items-center mt-20 '>
        <h1 className='font-bold text-slate-700 text-4xl'>Pau Arjalaguer</h1><small className='text-2xl'>Projectes destacats</small>
      </div>
      <div className='flex justify-center  border-2'>
        <Divz autoPlay={true}
          autoPlayDuration={3000}>
          <div>
            <video autoPlay muted loop onClick={() => { goToUrl("https://apps.apple.com/es/app/club-olesa-pat%C3%AD/id6444639283?l=ca") }} >
              <source src="assets/images/CopApp.mp4" type="video/mp4" />
            </video>

          </div>
          <div>
          <video autoPlay muted loop onClick={() => { goToUrl("http://clubolesapati.cat/v2") }} >
              <source src="assets/images/CopWeb.mp4" type="video/mp4" />
            </video>
          </div>

        </Divz>
      </div>
      {/*  */}

    </>
  );
}

export default App;
