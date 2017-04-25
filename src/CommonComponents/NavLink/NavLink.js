/**
 * Created by Ashwin on 25/04/17.
 */
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return <Link {...this.props} activeClassName="active"/>
    }
})