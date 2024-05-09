import logo from './logo.svg';
import './App.css';
import { Divz } from "divz";
function App() {
  const goToUrl = (url) => {
    window.open(url, '_blank');
  }

  return (
    <>

      <div className='size-10 p-3 hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path></svg>
      </div>
      <video autoPlay muted loop id="background-video" className='background'>
        <source src="assets/images/video.mp4" type="video/mp4" />
      </video>
      <div className='absolute top-0 flex flex-col w-full justify-center items-center mt-20 pt-10 '>
        <h1 className='font-bold text-slate-700 text-5xl'>:: Pau Arjalaguer ::</h1><small className='text-2xl'>Projectes destacats</small>
      </div>
      <div className='app dark-mode'>
        <Divz autoPlay={true}
          autoPlayDuration={5000}>
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
