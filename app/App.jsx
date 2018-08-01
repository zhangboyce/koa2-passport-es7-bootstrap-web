import React, { Component } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <Sidebar />
                    <div className="row">
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                            { this.props.children }
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}
