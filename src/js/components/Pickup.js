    import React, { Component } from "react";
    

    class Pickup extends Component {
    constructor() {
        super();
        this.state = {
        show: false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ show: !this.state.show });
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <div className="subtotal savings"><span><a onClick={this.handleChange}>Pickup savings</a></span><span>-3.85</span></div>
                <div className="pickup_tooltip" style={{display: show ? 'block': 'none'}}>
                    <div className="triangle-with-shadow"></div>
                    <div><p>Pick up your order in the store helps cut cost, and we pass the savings on to you</p></div>
                </div>
            </div>
        );
    }
    }
    export default Pickup;
    
