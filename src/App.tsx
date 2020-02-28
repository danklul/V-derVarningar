import React, { useState, useEffect } from 'react'
import './App.css'
import AlertRow from './components/AlertRow'
// import Buttons from './components/Buttons';


interface EventCode {
    value: string, 
    valueName: string
}

interface Info { 
    headline: string, 
    event: string, 
    description: string, 
    urgency: string, 
    eventCode: EventCode[],
}

interface AlertData {
    code: string[],
    identifier: string,
    info: Info,
    sent: string,
}



const App = () => {
    const [hasError, setError] = useState(false);
    const [alerts, setAlerts] = useState<AlertData[]>([]);
  
    async function fetchData() {
        const res = await fetch("https://opendata-download-warnings.smhi.se/api/version/2/alerts.json");
        const result = await res.json()
        setAlerts(result.alert)
    }

    useEffect(() => {
        fetchData()
    },  [])

    const listItems = alerts.map(alert => <AlertRow title={alert.info.headline} valueCode={alert.info.eventCode[1].value} date={alert.sent} key={alert.identifier}/>);
    // const listItems = alerts.map(alert => <AlertRow key={alert.identifier} descr ti />);
  
    // const listItems2 = alerts.map(alert => <li key={alert.info.headline}>{alert.info.headline}</li>);
    
    // const listItems3 = alerts.map(alert => <li key={alerts[1].info.event.length}>{alert.info.event}</li>);

    const onButtonClickStart = () => {
        console.log("Start button clicked")
    }
    const onButtonClickWeek = () => {
        console.log("Week button clicked")
    }
    const onButtonClickStats = () => {
        console.log("Statistics button clicked")
    }

    

    console.log(alerts)
    return (
        <div className="App">
            <header className="App-header">
              <h1> Väder varningar </h1>
              <div className="ButtonContainer">
                <button onClick={onButtonClickStart}> Start </button>
                <button onClick={onButtonClickWeek}> This Week </button>
                <button onClick={onButtonClickStats}> Statistics </button>
              </div>
            </header>
            
            <div >
                {/* <AlertRow title={}/> */}
                 { listItems } 
                {/* <p> { listItems2 } </p>
                <p> { listItems3 } </p> */}
            </div>
        </div>
  );
}

export default App;
