import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        isTails: false
    };

    render() {
        let url = this.props.isTails ? 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg' : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg';
        let alt = this.props.isTails ? 'tail' : 'head';
        return (
            <div className='Coin'>
                <img src={url} alt={alt}/>
            </div>
        )
    }
}

export default Coin;