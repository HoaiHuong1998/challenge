import React from 'react';


class BaseTitle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h3 className='title'>{this.props.name}</h3>;
    }
}

export default BaseTitle;