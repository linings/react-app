import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styles from './index.module.css'

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
            <div id="PaymentForm" className={styles['payment-form']}>
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />

                <p className={styles.thankyou}>
                    Your gift will change a pet's life!
                    We work every day to find homes for dogs and cats in crisis.
                    We're committed to providing the best possible care for their specific needs
                    while they wait. You can create hope for them: your donation provides healthy
                    food, comfortable bedding, vital enrichment, training and medical intervention.
                    <br/>
                   <b>Donate today!</b> 
                </p>

                <form>
                    <div>
                        <input
                            className={styles['first-input']}
                            type="tel"
                            name="amount"
                            placeholder="Amount"
                        />
                        EUR
                    </div>
                    <input
                        type="tel"
                        name="number"
                        placeholder="Card number"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                    />
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