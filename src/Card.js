 import './index.css'
 import Card from './Components/Card'; 

function Rick() {
  return (
   <div className='main'>  
        <Card 
     img="https://rickandmortyapi.com/api/character/avatar/147.jpeg" 
     title = "Father Bob"
     desc="Dead - Alien"
     man="Last known location:"
     man1="Nuptia 4"
     ma="First seen in:"
     ma1="Mortynight Run"
     />

       <Card 
     img="https://rickandmortyapi.com/api/character/avatar/147.jpeg" 
     title = "Jan-Michael Vincent"
     desc="Alive - Human"
     man="Last known location:"
     man1="Interdimensional Cable"
     ma="First seen in:"
     ma1="Interdimensional Cable 2: Tempting Fate"
     />
     
       <Card 
     img="https://rickandmortyapi.com/api/character/avatar/147.jpeg" 
     title = "Rick K-22"
     desc="Alive - Human"
     man="Last known location:"
     man1="Earth (Replacement Dimension)"
     ma="First seen in:"
     ma1="The Ricklantis Mixup"
     />
     
       <Card 
     img="https://rickandmortyapi.com/api/character/avatar/147.jpeg" 
     title = "Biblesaurus"
     desc="Alive - Mythological Creature"
     man="Last known location:"
     man1="Mr. Goldenfold's dream"
     ma="First seen in:"
     ma1="Lawnmower Dog"
     />
     
       <Card 
     img="https://rickandmortyapi.com/api/character/avatar/147.jpeg" 
     title = "Scary Brandon"
     desc="Dead - Humanoid"
     man="Last known location:"
     man1="Earth (Replacement Dimension)"
     ma="First seen in:"
     ma1="Rest and Ricklaxation"
     />

       <Card 
     img="https://rickandmortyapi.com/api/character/avatar/147.jpeg" 
     title = "Toxic Morty"
     desc="Alive - Animal"
     man="Last known location:"
     man1="Story Train"
     ma="First seen in:"
     ma1="Never Ricking Morty"
     />
    
     </div>
  );
}

export default Rick;