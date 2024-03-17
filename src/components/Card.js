import React from "react";

export default function Card(props) {
    
    return (
        <div className="card">
            <div className="card-image">
                <img src={`${props.item.image}`} alt="" className="image" />
            </div>
            <div className="card-info">
                <div className="local">
                    <img src="./images/location.png" alt="" className="location-img" />
                    <span className="card-location">{props.item.location}</span>
                    <span className="card-map">{props.item.googleMapsUrl}</span>
                </div>
                <h3 className="card-title">{props.item.title}</h3>
                <div className="date">
                    <span className="start-date">{props.item.startDate}</span> -   
                    <span className="end-date"> {props.item.endDate}</span>
                </div>
                <p className="card-description">{props.item.description}</p>
            </div>
        </div>
    )
}