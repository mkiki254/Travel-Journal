import "./App.css";
import Navbar from './Navbar'
import Card from './Card'
import Data from './Data'

export default function App(){
    const dataitems = Data.map(item => {
        return(
            < Card 
            {...item}
            // title= {item.title}
            // location= {item.location}
            // google_maps_link= {item.google_maps_link}
            // start_date= {item.start_date}
            // end_date= {item.end_date}
            // description= {item.description}
            // imgUrl= {item.imgUrl}
            />
        )
    })
    
    return(
        <div>
            < Navbar />
            {dataitems}
        </div>
    )
}

