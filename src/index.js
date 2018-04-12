import _ from 'lodash'; 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//components
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
 
//Api key
const API_KEY = 'AIzaSyCjUMN-vLAcstl5sMUTt8ZMRIAiLqtdKoU';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null,
            term: "hacking"
        };
        this.videoSeach("hacking");
    };
    videoSeach(term) {
        YTSearch({key:API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSeach = _.debounce((term) => {this.videoSearch(term)}, 300); 
    return ( 
        <div>
            <SearchBar onSearchTermChange = {term => this.videoSeach(term)} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect ={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
        );
    }
};

ReactDOM.render(<App />, document.querySelector(".container"));