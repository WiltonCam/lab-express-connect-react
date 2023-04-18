import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Show.css"

//import ShowLogs from "./ShowLogs";

export default function Show() {
  
    const {index} = useParams();
    const [oneLog, setoneLog] = useState({});
    
    // const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios
        .get(`http://localhost:3333/logs/${index}`)
        .then((res) => {
            setoneLog(res.data);
         
        })
        .catch((err) => console.log(err));
    }, [index]);

    return (
        <section className="florence">
            <h2>{oneLog.captainName}</h2>
            <h2>{oneLog.daysSinceLastCrisis}</h2>
            <h2>{oneLog.mistakesWereMadeToday ? "true" : "false"}</h2>
            <h2>{oneLog.post}</h2>
            <h2>{oneLog.title}</h2>
            <button className="botones">
            <Link to="/logs">Back</Link>
            </button>
            <button className="botones">
            <Link to="/logs">Edit</Link>
            </button>
            <button className="botones">
            <Link to="/logs">Delete</Link>
            </button>
         
        </section>
    );
  
}