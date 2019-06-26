import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalFlips: 0,
            totalHeads: 0,
            totalTails: 0,
            isTails: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    flip() {
        const randBool = Math.random() >= 0.5;
        this.setState( curState => {
            return ({
                isTails: randBool,
                totalFlips: curState.totalFlips + 1,
                totalHeads: curState.totalHeads + (randBool ? 0 : 1),
                totalTails: curState.totalTails + (randBool ? 1 : 0)
            });
        });
    }

    handleClick(e) {
        this.flip();
    }

    render() {
        return (
            <div className='CoinFlipper'>
                <Coin isTails={this.state.isTails} />
                <button className='CoinFlipper-btn' onClick={this.handleClick}>Flip!</button>
                <p>
                    Out of {this.state.totalFlips} flips, there have been {this.state.totalHeads} heads and {this.state.totalTails} tails
                </p>
            </div>
        )
    }
}

export default CoinFlipper;