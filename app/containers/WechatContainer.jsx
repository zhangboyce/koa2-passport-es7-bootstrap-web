'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, browserHistory, Link } from 'react-router';
import * as WechatActions from '../actions/wechat';

class WechatContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.wechatFeedsources();
    }

    render() {
        let tds = this.props.wechatFeedsources.map(fd => {
            return (
                <tr>
                    <td>{ fd.id }</td>
                    <td>{ fd.name }</td>
                    <td>{ fd.from }</td>
                    <td>{ (f.tags && f.tags.join(',')) || '' }</td>
                    <td>
                        <button type="button" rel="${f._id}" class="crawl btn btn-primary">立即抓取</button>
                        <button type="button" rel="${f._id}" class="shelves btn btn-${f.status == -1 ? 'success':'default'}">
                            ${fd.status == -1 ? '上架' : '下架'}
                        </button>
                    </td>
                </tr>
            )
        });

        return (
            <div>
                <h2>微信订阅号</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>From</th>
                            <th>Tags</th>
                            <th>Operate</th>
                        </tr>
                        </thead>
                        <tbody>{ tds }</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        wechatFeedsources: state.wechatFeedsources
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Object.assign({}, WechatActions ), dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(WechatContainer));