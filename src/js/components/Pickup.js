    import React, { Component } from "react";
    

      class Pickup extends Component {
        constructor() {
          super();
          this.state = {
            title: ""
          };
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
          this.setState({ [event.target.id]: event.target.value });
        }
        handleSubmit(event) {
          event.preventDefault();
          const { title } = this.state;
          const id = uuidv1();
          this.props.addArticle({ title, id });
          this.setState({ title: "" });
        }
        render() {
          const { title } = this.state;
          return (
            <div className="subtotal"><span><a>Pickup savings</a></span><span>-3.85</span></div>
          );
        }
      }
      export default Pickup;
    
