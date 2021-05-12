import React from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'

class SongDetail extends React.Component {
	render() {
		console.log(this.props.data)
		const { song } = this.props.data
		if (!song) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<h3>{song.title}</h3>
				<h2></h2>
			</div>
		)
	}
}

export default graphql(fetchSong, {
	options: (props) => {
		return { variables: { id: props.params.id } }
	}
})(SongDetail)
