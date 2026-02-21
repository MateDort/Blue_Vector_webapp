Name Blue Vector

Project Description

Our project explores a new model of maritime transport that leverages natural ocean currents and wind patterns to dramatically reduce propulsion energy. Instead of continuously fighting fluid resistance with high fuel consumption, we develop an intelligent routing algorithm that allows autonomous vessels to ride large-scale ocean circulation systems and apply minimal propulsion only for steering.

The core innovation lies in the algorithm.

We ingest real operational ocean current and wind datasets and model the ocean as a dynamic vector field. The vessel’s motion is simulated as the sum of environmental drift and bounded steering propulsion. Using receding-horizon optimization, the system continuously selects steering directions that minimize energy usage while maintaining a target arrival window. This transforms maritime routing from a shortest-path problem into a minimum-energy path problem in a time-dependent fluid environment.

The long-term application of this system is low-energy shipping for non-time-sensitive goods between consistent global trade routes. By aligning with prevailing currents rather than opposing them, the system has the potential to significantly reduce fuel consumption and emissions over long-distance routes.

For the purposes of the hackathon and early-stage validation, we propose deploying the algorithm in a scientific data-collection context. Instead of cargo, the autonomous vessel would carry environmental sensors to:

Collect ocean current measurements

Track marine animal movement patterns

Gather water temperature and salinity data

Map seasonal circulation behavior

This serves two purposes:

It allows real-world testing of the routing intelligence in a low-risk application.

It contributes valuable oceanographic and ecological data while validating energy-efficient navigation.

By using environmental monitoring as a proving ground, we demonstrate that intelligent current-aware routing can operate autonomously, adapt to changing ocean conditions, and generate meaningful scientific insight — all while minimizing propulsion energy.

This approach reframes the ocean not as an obstacle to overcome, but as an energy system to collaborate with.

If you want a slightly sharper hackathon pitch version:

We are building an energy-minimizing maritime routing algorithm that uses real ocean current and wind data to navigate autonomous vessels through dynamic fluid environments. Rather than fighting the ocean, our system continuously adapts steering decisions to exploit prevailing flows.

While the long-term vision is low-energy shipping for consistent global trade routes, we will validate the system in the near term through autonomous scientific missions, collecting marine life and ocean current data. This allows us to test real-world adaptability, generate environmental value, and prove the viability of current-assisted navigation.

colors ocean blue and white 
tech stack 
- React 

UI
- main page 
   - bg ann ocean and ocean current and wind animation 
   - red dots as markers for the boats one of them is going to be live gps location from a phone 
   - dots are clickable and open up a page 
page for the boat infomation and research 
   - show the boat from an uppear angle with motor and elements and if they are healthy or not (for know mock data)
   - and then infomration it found in the ocean with picture or videos it took and feed it to an llm that can make research data out of it (for now it can be mocked)for the boat that is getting the live gps location and the others data for shipping information like eta and eveyrhitng we need to receive and can receive and current information of boat health 