import './App.css';
import MainVideo from './components/MainVideo';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import { Container ,Col, Row } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import YouTube from './api/YouTube';
import { useState } from 'react';
import { useEffect } from 'react';



const App =() => {

  const [mainVideo,setMainVideo] = useState (undefined)
  const [videos,setVideos] = useState ([])

  const handleSubmit = async (searchTerm) =>{
    
const response = await YouTube.get('search',{
  params:{
    part:'snippet',
    maxResults:8,
    key:'AIzaSyAaF_uqIrGW7dkVeTi5pCqRYildDbuE23E',
    q:searchTerm
  }
})
  // console.log(response.data)
  setMainVideo(response.data.items[0])
  setVideos(response.data.items)
}

useEffect (()=>{
  handleSubmit('Tom and Jerry')
},[])

  return  <Container>
   

       <SearchBar onSubmit={handleSubmit}/>
      
      <Row>
        <Col sm={8}>
        <MainVideo videoRef={mainVideo}/>
        </Col>

        <Col sm={4}>
        <VideoList videosList={videos} setMainVideo={setMainVideo} /> 
        </Col>

      </Row>
      
     
    </Container>
  
}

export default App;
