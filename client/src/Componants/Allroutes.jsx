import React from 'react'
import Home from '../Pages/Home/Home'
import {

    Routes,
    Route,
    //Link
} from "react-router-dom"
import Library from '../Pages/Library/Library'
import YourVideo from '../Pages/YourVideo/YourVideo'
import WatchHistory from '../Pages/WatchHistory/WatchHistory'
//import { MdWatchLater } from 'react-icons/md'
import WatchLater from '../Pages/WatchLater/WatchLater'
import LikedVideo from '../Pages/LikedVideo/LikedVideo'
import VideoPage from '../Pages/VideoPage/VideoPage'
function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/library' element={<Library />} />
        <Route path='/history' element={<WatchHistory />} />
        <Route path='/watchlater' element={<WatchLater />} />
        <Route path='/likedvideo' element={<LikedVideo />} />
        <Route path='/yourvideos' element={<YourVideo />} />
        <Route path='/videopage/:vid' element={<VideoPage />} />

        


    </Routes>
  )
}

export default Allroutes