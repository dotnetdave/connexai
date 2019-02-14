import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementActions } from '../actions/incrementActions';
import { projectActions } from '../actions/projectActions';

const Home = props => (
    <div>
        <h1>Hello, world!</h1>
        <p>Current count: <strong>{props.count.count}</strong></p>
        <button className="btn btn-primary" onClick={props.increment}>Increment</button>

        <button className="btn btn-primary" onClick={props.getProjects}>Get Projects</button>

        {renderProjectsTable(props.projects)}
    </div>
);

function renderProjectsTable(projects) {
    return (
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                {projects.projects.map(forecast =>
                    <tr key={forecast.name}>
                        <td>{forecast.name}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default connect(
    state => ({ projects: state.project, count: state.counter }),
    dispatch => bindActionCreators({ ...incrementActions, ...projectActions }, dispatch)
)(Home);
