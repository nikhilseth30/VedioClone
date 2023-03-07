import Video from "./Video"

const VideoList = ({videosList,setMainVideo}) =>{ 

        // const video = new Array(8).fill()

    return videosList.length ===0 ? <h1>Loading....</h1>: <div className="mt-5">             
    { videosList.map ((vid, idx)=><Video videoDetail={vid} key={idx} setMainVideo={setMainVideo}/>)}                  

    </div>
}

export default VideoList