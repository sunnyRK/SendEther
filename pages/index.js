import React, { Component } from 'react';
import token from '../ethereum/token';
import web3 from '../ethereum/web3';
import { Button, Form} from 'semantic-ui-react';

class tokenInst extends Component{

    onRegister = async (event) => {
        const accounts = await web3.eth.getAccounts();
        await token.methods.registerAddress(accounts[0]).send({
            from:accounts[0]
        });
    };

    onSubmit = async (event) => {
        const accounts = await web3.eth.getAccounts();
        var lengths = await token.methods.getLengthOfRegister().call();
        var i = 0;
        var myvar = setInterval(async function () {
            if(i == lengths) {
                alert("All transaction completed.");
                clearInterval(myvar);
            } else{
                var rAddress = await token.methods.getAddress(i).call();
                await token.methods.sendEther(rAddress, 1000).send({
                    from: accounts[0],
                    value: '1000'
                });
                i++;
            }
        }, 60000);   
            
    };

    render(){
        return (
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <Button primary>Pay!</Button>
                    </Form>
                    <Form onSubmit={this.onRegister}>
                        <Button primary>Register!</Button>
                    </Form>
                </div>
        );
    }
}
export default tokenInst;