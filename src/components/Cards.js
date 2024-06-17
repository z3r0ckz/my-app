import React from "react";
import Card from "./Card";
import image1 from '../assets/img3.jpg'
import image2 from '../assets/img2.jpg'
import image3 from '../assets/img1.jpg'

const cards = [
    {
        id: 1,
        title: "Docker",
        Image: image1,
        description: "Curso de Docker",
        price: "$1000.00",
        url: "http://www.docker.com"
    },
    {
        id: 2,
        title: "NGNiX",
        Image: image2,
        description: "Curso de NGNiX",
        price: "$1200.00",
        url: "http://www.nginx.com"
    },
    {
        id: 3,
        title: "Java",
        Image: image3,
        description: "Curso de java",
        price: "$1500.00",
        url: "http://www.java.com"
    },
    
]

export default function Cards(){
    console.log(cards)
    return(
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className="row">
              {
                cards.map(c => (
                    <div className='col-md-4' key={cards.id}>
                        <Card
                            key={c.id}
                            id={c.id}                        
                            title={c.title}
                            image={c.Image}
                            description={c.description}
                            price={c.price}
                            url={c.url}
                        />
                    </div>
                  
                ))
              }
            </div>
        </div>
    )
}