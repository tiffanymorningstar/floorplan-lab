
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Bedroom from './Bedroom';
import Bath from './Bath';
const FloorPlan = (props) => {
  return ( 
    <div>
    <Kitchen />
    <LivingRoom />
    <Bedroom bedNum={1}/>
    <Bedroom bedNum={2}/>
    <Bedroom bedNum={3}/>
    <Bath size='Full'/>
    <Bath size='Half' />

    </div>
   );
}
 
export default FloorPlan;