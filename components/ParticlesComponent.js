import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 


const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  
  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {     
  //     await loadSlim(engine);     
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, 1000); // Delay initialization by 100 milliseconds
  
    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
      // background: {
      //   color: {
      //     value: "#1E2F97",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        // events: {
        //   onClick: {
        //     enable: true,
        //     mode: "repulse",
        //   },
        //   onHover: {
        //     enable: true,
        //     mode: 'grab',
        //   },
        // },
        modes: {
          push: {
            enable: false,
            // distance: 200,
            // duration: 15,
          },
          // grab: {
          //   distance: 150,
          // },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          // color: "#FFFFFF",
          // distance: 150,
          // enable: true,
          // opacity: 0.3,
          // width: 1,
          enable: false,
        },
        move: {
          direction: "top", 
          enable: true,
          outModes: {
            default: "out",
          },
          straight: true,
          random: false,
          speed: 1,
        },
        number: {
          density: {
            enable: true,
          },
          value: 150,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 1,
        },
      },
      detectRetina: true,
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;