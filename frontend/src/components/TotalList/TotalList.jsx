/* Core 라이브러리 */
import React, { Component } from "react";
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import ChannelList from './ChannelList';
/* FontAwesomeIcon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons/faArrowCircleRight";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons/faCaretUp";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";

class TotalList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      data1: [],
      selectedVideo : null,
      selectedChannel : null
    };
    //YJH YT API KEY
    const API_KEY="AIzaSyDWz2h2y3h0kuE0c_Mnb3HFxFLC230BYQ4";
   
    //video
    YTSearch({
      key:API_KEY,
    }, 

    data =>{
      console.log(data);
      this.setState({data:data, selectedVideo : data[0]});
    });
    
    //channel
    YTSearch({
      key:API_KEY,
    }, 

    data1 =>{
      console.log(data1);
      this.setState({data1:data1, selectedChannel : data1[0]});
    });


  }
  render() {
    return( 
      <div>
          <div>TotalList_videos
            <VideoList videos = {this.state.data}/>
          </div>
          <div>TotalList_channels
            <ChannelList channels = {this.state.data1}/>
          </div>
      </div>
    );
  }
}

export default TotalList;
