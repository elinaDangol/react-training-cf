import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHeroLists } from '../Actions';

class Heroes extends Component {
    componentDidMount() {
        this.props.dispatch(getHeroLists());
    }

    render() {
        const { list } = this.props;
        const res = list.map(element => {
            return (
                <tr>
                    <td>{element.name}</td>
                    <td>{element.hero_name}</td>
                    <td>{element.power}</td>
                    <td>{element.weakness}</td>
                </tr>
            )
        });

        return (
            <div>
                <table border='1px'>
                    <tr>
                        <th>Name</th>
                        <th>Hero</th>
                        <th>Power</th>
                        <th>Weakness</th>
                    </tr>
                    {res}
                </table>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    list: store.lists
});

export default connect(mapStateToProps)(Heroes);
