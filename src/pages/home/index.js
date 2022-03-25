import GifAPI from "../../component/gif"
import gifss from "../../gifs"

const ratings = gifss.filter(gif => gif.rating === 'g');

function Dashboard() {
    return(

        

        <div className="Dashboard">
            <h2>Module 2 Session 2</h2>
            <input type="text" placeholder="Search Here"></input>
            <button>Search</button>
            <div className="Gif">
                { ratings.map(({id, title, url}) => <GifAPI key={id} title={title} url={url} /> ) }
            </div>
        </div>
        
    )
}

export default Dashboard