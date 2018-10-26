import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, browserHistory } from 'react-router';
import * as UserActions from './actions/user';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Header render')
        this.props.actions.getUserInfo();
    }

    render() {
        return (
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        {
                            this.props.user && this.props.user.username &&
                            <a className="nav-link" href="#">{ this.props.user.username }</a>
                        }
                    </li>
                </ul>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, UserActions), dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Header));
