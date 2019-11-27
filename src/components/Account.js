import React from 'react';
class Account extends React.PureComponent {
    
    render() {
        console.log(`Account Render : ${this.props.accountno}`)
        return ( 
            <div >
            <h1> Account No </h1> 
            <input onChange = {(evt) => this.props.onChange(evt)} placeholder = "Enter a Account No..."  value={this.props.accountno} />
            </div>
        )
    }
}


export default Account;