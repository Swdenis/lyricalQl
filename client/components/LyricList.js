import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'


class LyricList extends React.Component {
	onLike(id) {
		console.log(id)
	}

	renderLyrics() {
		return this.props.lyrics.map(({ id, content }) => {
			return (
				<li key={id} className="collection-item">
					{content}
					<i className="material-icons" onClick={() => this.onLike(id)}>
						thumb_up
					</i>
				</li>
			)
		})
	}

	render() {
		return <ul className="collection">{this.renderLyrics()}</ul>
	}
}

const mutation = gql`
	mutation likeLyric($id: ID!) {
		likeLyric(id: $id) {
		id
		likes
		}
	}
`
export default graphql(mutation)(LyricList)
