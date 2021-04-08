import Particles from "react-tsparticles";
import conf from "../Config/particles.json";
class ParticlesBackground extends Component {
   constructor(props) {
      super(props);

      this.particlesInit = this.particlesInit.bind(this);
      this.particlesLoaded = this.particlesLoaded.bind(this);
   }

   particlesInit(main) {
      console.log(main);

      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
   }

   particlesLoaded(container) {
      console.log(container);
   }

   render() {
      return (
         <Particles
            id="tsparticles"
            init={this.particlesInit}
            loaded={this.particlesLoaded}
            options={conf}
         />
      );
   }
}
