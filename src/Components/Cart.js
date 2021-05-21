import { Component } from "react";
import axios from 'axios';
import CartCake from "./CartCake";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import './CartStyle.css';


class Cart extends Component {    
    constructor(props) {
        super(props);
        this.state={
            cakes:[]
        }
      }
      componentDidMount() {
        axios.post("https://apifromashu.herokuapp.com/api/cakecart",{},{
            headers:{"authtoken":localStorage.token}     
        }).then((Response)=>{
            console.log(Response);
            this.props.dispatch({
                type: "Oder",
                payload: Response.data
           })
            this.cakes = Response.data.data
            // console.log(this.cakes[0].name);            
            this.setState({
                cakes: Response.data.data
            })
                    
        },(error)=>{
            console.log("error from signup api",error)    
        })

      };

    render() {        
          return (
            
              <div class="cartContainer">    
              {this.state.cakes.length <= 0 ?"":<div>
                          <Link to="/route"><button type="button" class="btn btn-success">CheckOut</button></Link>
                      </div>
                      }            
                 <div>
                <div>
                {   this.state.cakes.map((each, index) => {
                      console.log(each,index)
                       return <CartCake key={index} cakedata={each} />                                    
                     })                             
                          }                          
                          {
                             this.state.cakes.length <= 0 && <div>
                              <div class="card"></div>
                              </div>
                          }                          
                  </div>
                      
                  </div>
            </div>
        )
    }
}
export default connect((state, props) => {
    // console.log(state)
    return {
      Oder: state["oderplace"]
    }
  })(Cart);