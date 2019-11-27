import React from 'react';
class Account extends React.PureComponent {
    
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.customer.credit.creditno !== this.props.customer.credit.creditno) {
            return true
        }
        return false
    }

    render() {
        console.log(`Credit Render : ${this.props.customer.credit.creditno}`)
        return ( 
            <div >
            <h1> Credit No </h1> 
            <input onChange = {(evt) => this.props.onChange(evt)} placeholder = "Enter a Credit No..."  value={this.props.customer.credit.creditno} />
            </div>
        )
    }
}


export default Account;