import { useState } from "react";
const data = [
    {
       titel: "Animali",
       image: "cow",
       image1: "tigers",
       image2: "lions",
       image3: "camale",
    },

     {
       titel: "Flowers",
           image: "gulab",
       image1: "chameli",
       image2: "champo",
       image3: "karen",
    },

     {
       titel: "Food",
           image: "dal-bati",
       image1: "manchuriyan",
       image2: "pavbhaji",
       image3: "bhel",
    },

     {
       titel: "Color",
          image: "red",
       image1: "green",
       image2: "pink",
       image3: "black",
    },
]

function Animal(){
    
const [img, setimg] = useState(" ");

    return(
        <div>
           { data.map((item,index) => (
<button key={index} style={{margin: "10px", padding: "3px"}} onClick={() => setimg(item)}>{item.titel}</button>
            ))}
             <div>
                <h2>{img.image}</h2>
                <h2>{img.image1}</h2>
                <h2>{img.image2}</h2>
                <h2>{img.image3}</h2>
                
             </div>
        </div>
    );
}
export default Animal;