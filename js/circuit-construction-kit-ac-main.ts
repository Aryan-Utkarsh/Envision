// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */

// Image is required for making toDataURLNodeSynchronous work in the built version
import CCKCOptionsDialogContent from '../../circuit-construction-kit-common/js/view/CCKCOptionsDialogContent.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import soundManager from '../../tambo/js/soundManager.js';
import Tandem from '../../tandem/js/Tandem.js';
import ACVoltageScreen from './ac-voltage/ACVoltageScreen.js';
import circuitConstructionKitAcStrings from './circuitConstructionKitAcStrings.js';
import LabScreen from './lab/LabScreen.js';
import RLCScreen from './rlc/RLCScreen.js';
import '../../scenery/js/nodes/Image.js';

const circuitConstructionKitAcTitleString = circuitConstructionKitAcStrings[ 'circuit-construction-kit-ac' ].title;

// constants
const tandem = Tandem.ROOT;

const simOptions = {
  createOptionsDialogContent: ( tandem: Tandem ) => new CCKCOptionsDialogContent( tandem ),
  credits: {
    leadDesign: 'Amy Rouinfar',
    softwareDevelopment: 'Sam Reid, Denzell Barnett',
    team: 'Michael Dubson, Ariel Paul, Kathy Perkins, Wendy Adams, Carl Wieman',
    qualityAssurance: 'Jaspe Arias, Steele Dalton, Amanda Davis, Alex Dornan, Bryce Griebenow, Ethan Johnson, Liam Mulhall, Ben Roberts, Jacob Romero, Ethan Ward, Kathryn Woessner',
    graphicArts: 'Bryce Gruneich, Mariah Hermsmeyer, Cheryl McCutchan'
  }
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {
  const x: number = 7;
  console.log( 'x=' + x );
  const sim = new Sim( circuitConstructionKitAcTitleString, [
    new ACVoltageScreen( tandem.createTandem( 'acVoltageScreen' ) ),
    new RLCScreen( tandem.createTandem( 'rlcScreen' ) ),
    new LabScreen( tandem.createTandem( 'labScreen' ) )
  ], simOptions );
  sim.start();

  // turn off common UI sounds until a sound design has been done for this sim
  soundManager.setOutputLevelForCategory( 'user-interface', 0 );
} );