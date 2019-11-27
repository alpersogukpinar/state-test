import React from 'react';
import Account from './Account';
import Card from './Card';
import Credit from './Credit';
import produce from 'immer'
class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            customer: {
                account:{
                    accountno: 0,
                    accountName: "xxx"
                },
                card: {
                    cardno: 0,  
                    cardname: "yyy"      
                },
                credit: {
                    creditno: 0,  
                    creditname: "zzzz"      
                }
            }
        }
        this.handleAccountNoChange = this.handleAccountNoChange.bind(this);
        this.handleCardNoChange = this.handleCardNoChange.bind(this);
        this.handleCreditNoChange = this.handleCreditNoChange.bind(this);
    }
    
    logChangeStatus = (nextState) => {
        console.log (`***Change Status***
        Account : ${nextState.customer.account !== this.state.customer.account}
        Card : ${nextState.customer.card !== this.state.customer.card}
        Credit : ${nextState.customer.credit !== this.state.customer.credit}
    `)
    }


    handleAccountNoChange (evt) {                
        const nextState = produce(this.state, draft => {
            draft.customer.account.accountno = evt.target.value;
        });       
        this.logChangeStatus(nextState)
        this.setState(nextState) 
    }


    handleCardNoChange (evt) {                
        const nextState = produce(this.state, draft => {
            draft.customer.card.cardno = evt.target.value;
        });
        this.logChangeStatus(nextState)
        this.setState(nextState) 
    }

    handleCreditNoChange (evt) {        
        const nextState = produce(this.state, draft => {
            draft.customer.credit.creditno = evt.target.value;
        });    
        this.logChangeStatus(nextState)    
        this.setState(nextState) 
    }

    render() {
        console.log('Container Render')
        return ( 
            <div >
                <Account accountno={this.state.customer.account.accountno} onChange = {this.handleAccountNoChange}/>
                <Card cardno={this.state.customer.card.cardno} onChange = {this.handleCardNoChange}/>
                <Credit customer={this.state.customer} onChange = {this.handleCreditNoChange}/>
            </div>
        )
    }
}


export default Container;