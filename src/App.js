import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import './App.css';

const REACT_API_KEY = 'AIzaSyCCgUSkJOfyIqkd5Zy5kE4r7grPYFIS0Ks';



class App extends Component {
  constructor(props){
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: REACT_API_KEY, Term: 'Surfboard'}, (videos) =>{
    this.setState({ 
      videos : videos,
      selectedVideo : videos[0] 
      });
    });
  }
  



  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
