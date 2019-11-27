import React from 'react';
class Card extends React.PureComponent {
    
    render() {
        console.log(`Card Render : ${this.props.card.cardno}`)
        return ( 
            <div >
            <h1> Card No </h1> 
            <input onChange = {(evt) => this.props.onChange(evt)} placeholder = "Enter a Card No..."  value={this.props.card.cardno} />
            </div>
        )
    }
}


export default Card;