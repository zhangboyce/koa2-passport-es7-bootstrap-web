import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, browserHistory, Link } from 'react-router';

export default class extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">
                                <span data-feather="home"></span>
                                微信公众号 <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/weibo">
                                <span data-feather="file"></span>
                                微博
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/instagram">
                                <span data-feather="shopping-cart"></span>
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
