import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="PaymentForm">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <form>
                    <div>
                        <input
                            type="tel"
                            name="name"
                            placeholder="Card Name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="expiry"
                            placeholder="Card Expiry"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <input
                        type="tel"
                        name="cvc"
                        placeholder="Card cvc"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />

                </form>
            </div>
        );
    }
}