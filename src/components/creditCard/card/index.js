import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styles from './index.module.css';
import { withRouter } from 'react-router-dom';

 class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
        error: '',
    };
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }
    componentWillMount() {
        this.setState({ error: "" });
    }
    checkForError = (e) => {
        e.preventDefault();

        const { name, value } = e.target;

        switch (name) {
            case 'amount':
                let amount =
                    +value <= 0 || isNaN(value)
                        ? 'Amount must be positive number!'
                        : "";

                this.setState({ error: amount });
                break;
            case 'number':
                let number =
                    value.length !== 16
                        ? 'Number of card must contain 16 digits!'
                        : "";
                this.setState({ error: number });
                break;
            // case 'name':
            //     let name =
            //         (/\w+\s\w+/).test(value)
            //             ? 'First and Last name written on card!'
            //             : "";
            //     this.setState({ error: name });
            //     break;
            // case 'expiry':
            //     let expiry =
            //         (/^[0-9]{1,2}\/[0-9]{1,2}$/).test(value)
            //             ? 'Add month / year of expiry!'
            //             : "";
            //     this.setState({ error: expiry });
            //     break;
            case 'cvc':
                let cvc =
                    value.length !== 3
                        ? 'Security must be 3 digits!'
                        : "";
                this.setState({ error: cvc });
                break;
            default:
                break;
        }
    }

    render() {
        if (this.props.clicked && this.state.cvc !== '' && this.state.expiry !== '' && this.state.number !== '' && this.state.name !== '') {
            this.props.history.push('/');
        }
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
                    <br />
                    <b>Donate today!</b>
                </p>

                <form>
                    <div>
                        <input
                            className={styles['first-input']}
                            type="tel"
                            name="amount"
                            onBlur={this.checkForError}
                            placeholder="Amount"
                        />
                        EUR
                    </div>
                    <input
                        type="tel"
                        name="number"
                        placeholder="Card number"
                        onChange={this.handleInputChange}
                        onBlur={this.checkForError}
                        onFocus={this.handleInputFocus}
                    />
                    <div>
                        <input
                            type="tel"
                            name="name"
                            placeholder="Card Name"
                            onChange={this.handleInputChange}
                            onBlur={this.checkForError}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            name="expiry"
                            placeholder="Card Expiry"
                            onChange={this.handleInputChange}
                            onBlur={this.checkForError}
                            onFocus={this.handleInputFocus}
                        />
                    </div>
                    <input
                        type="tel"
                        name="cvc"
                        placeholder="Card cvc"
                        onChange={this.handleInputChange}
                        onBlur={this.checkForError}
                        onFocus={this.handleInputFocus}
                    />
                    {this.state.error ? <div style={{ color: "red" }}>{this.state.error}</div> : null}
                </form>
            </div>
        );
    }
}
export default withRouter(PaymentForm);