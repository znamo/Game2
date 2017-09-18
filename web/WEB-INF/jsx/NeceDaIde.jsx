// https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr/

import React from 'react';

class NeceDaIde extends React.Component {

    constructor(props) {
        super(props);
        this.state = {likesCount : 0};
        this.kome = props.kome;
        this.onLike = this.onLike.bind(this);
    }

    onLike () {
        let newLikesCount = this.state.likesCount + 2;
        this.setState({likesCount: newLikesCount});
    }

    render() {
        return (
            <div>
                Likes : <span>{this.state.likesCount}</span> {this.kome}
                <div><button onClick={this.onLike}>Like Me</button></div>
            </div>
        );
    }

}

export default NeceDaIde;