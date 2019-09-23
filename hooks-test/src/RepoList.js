import React, {Component} from 'react';

class RepoList extends Component {
    state = {
        repositories: []
    }

    async componentWillMount() {
        const response = await fetch('https:api.github.com/users/Daniel-Quirino/repos')
        const data = await response.json();

        this.setState({repositories: data});
    }

    render() {
        return (
            <ul>
                {this.state.repositories.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
            </ul>
        )
    }
}

export default RepoList;