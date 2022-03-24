import GifAPI from "../../component/gif"
import TitleAPI from "../../component/title"
function Dashboard() {
    return(
        <div className="Dashboard">
            <div className="Title">
                <TitleAPI/>
            </div>
            <h2>Module 2 Session 2</h2>
            <input type="text" placeholder="Search Here"></input>
            <button>Search</button>
            <div className="Gif">
                <GifAPI/>
            </div>
        </div>
        
    )
}

export default Dashboard