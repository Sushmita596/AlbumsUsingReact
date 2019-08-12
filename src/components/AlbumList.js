
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
	
	/*The .then() function will be called once the http request is complete*/
	/*Pass initial empty state to our component*/
	state = { albums: [] };
	
	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}
	
	renderAlbums() {
		return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
	}
	
	render() {
		
		console.log(this.state);
		
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumList;