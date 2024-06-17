import React from "react";


export default function Card({id,title,image,description,price,url}){
    return(
        <div className="card text-center bg-dark">
            <div className="card-body text-light">
                
                <img src={image}  alt=""></img>
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">Descripcion: {description}</p>
                <p>Precio: {price}</p>
                <a href={url} className="btn btn-outline-secondary rounded-0">Ver más</a>
                
            </div>
        </div>
    )
}