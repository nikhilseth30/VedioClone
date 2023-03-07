import { Card } from 'react-bootstrap';



const MainVideo = ({videoRef})=>{

  if(videoRef===undefined) return <h1>Loading.....</h1>

 console.log(videoRef)
const videoSrc = `https://www.youtube.com/embed/${videoRef.id.videoId}`
    return   <Card className='mt-5'>
   
      {/* <Card.Header>Featured</Card.Header> */}
      <iframe frameBorder="0" height="100%" width="100%" title="VideoTitle" src={videoSrc}/>
      <Card.Body>
        <Card.Title>{videoRef.snippet.channelTitle}</Card.Title>
        <Card.Text>
        {videoRef.snippet.description}
        </Card.Text>
        </Card.Body>
    </Card>
      
    }



export default MainVideo