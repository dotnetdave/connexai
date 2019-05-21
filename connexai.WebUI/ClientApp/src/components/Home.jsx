import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { projectActions } from '../actions/projectActions';

class Home extends React.Component {
    componentDidMount() {
        this.props.getProjects()
    }

    render() {
        return (<div>
            <h1>Projects</h1>
            {renderProjectsTable(this.props.projects)}
        </div>);
    }
};

function renderProjectsTable(projects) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(forecast =>
                    <tr key={forecast.name}>
                        <td>{forecast.name}</td>
                        <td>{forecast.description}</td>
                        <td>{forecast.company}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default connect(
    state => ({ ...state.project, ...state.counter }),
    dispatch => bindActionCreators({ ...incrementActions, ...projectActions }, dispatch)
)(Home);