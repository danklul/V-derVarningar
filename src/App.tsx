import React, { useState, useEffect } from 'react'
import './App.css'
import AlertRow from './components/AlertRow'
import App_Header from './components/App_Header';

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

    const onShowDetail = (id:string) => {
        console.log(id)
        //TODO: Ny vy med yttligare info om just detta id
    }

    const listItems = alerts.map(alert => 
        <AlertRow 
        title={alert.info.headline} 
        onClick={onShowDetail}
        id={alert.identifier}
        date={new Date(alert.sent)}
        key={alert.identifier}/>);

    console.log(alerts)
    return (
        <div className="App">
            <App_Header/>
            <div >
                {listItems} 
            </div>
        </div>
  );
}

export default App;
