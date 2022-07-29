import React, { useState } from "react";

function TrafficLight()

{const [light, setLight] = useState("red")
   { return (
        <div className="trafficpole">
            <div className="trafficbox">
                <div className={"red light " + (selectedLight === 'red' ? 'selected' : '')} onClick={() => setLight('red')}></div>
                <div className={"yellow light " + (selectedLight === 'yellow' ? 'selected' : '')} onClick={() => setLight('yellow')}></div>
                <div className={"green light " + (selectedLight === 'green' ? 'selected' : '')} onClick={() => setLight('green')}></div>
            </div>
        </div>
    )
   }


}
export default TrafficLight