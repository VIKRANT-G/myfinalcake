import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";



class Details extends Component {    
    constructor(props) {
        super(props)
        this.state = {}
    }
    registers = () => {
             
        //   const history = new useHistory();
        var cartCake = {
            cakeid: this.props.cakedata.cakeid,
            name: this.props.cakedata.name,
            image: this.props.cakedata.image,
            weight: this.props.cakedata.weight,
            price: this.props.cakedata.price,
        };
        console.log(cartCake);    
        
        axios.post("https://apifromashu.herokuapp.com/api/addcaketocart",cartCake,{
            headers: { "authtoken":localStorage.getItem("token")}
        }).then((res) => {
            console.log("helloresss", res);
            
           if( res.data !== "Session Expired"){
               toast("Added to cart");
              
            }
           else {
               toast("Please Login Your ID");
            }
            
            
        }, ((err) => {
            console.log("hello",err);
          }))  
    }
    render() {
        console.log("state,", this.props)
        return (
            <div style={{width:"100vw",height:"97vh"}}>
            <div class="card mb-3" style={{ maxWidth: "75vw" ,marginLeft:"10em" ,marginTop:"10em",border:"none" ,}}>
                    <Link to={`/cakedetails/${this.props.cakedata.cakeid}`} style={{textDecorationColor:"#F0F3F4 "}}>                    
            <div  class="card detail-card" style={{marginBottom:"2em",backgroundColor:"#F0F3F4 "}}>
              <div class="row no-gutters" >
                <div class="col-md-4" style={{width:"100%", marginTop:"2em",marginBottom:"6em"}}>
                <img src={this.props.cakedata.image} style={{height:"100%",marginLeft:"2em" ,width:'23vw'}}class="card-img-top cakeImg " alt="..."></img>
              
                </div>
                <div class="col-md-8">
                  <div class="card-body" >
                      <h1 class="card-title" style={{color:"black",marginTop:"1em",}}>{this.props.cakedata.name}</h1>                
                            <p class="card-text" style={{color:"#F3B818",fontSize:"1.5em"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill"style={{marginTop:"-7px"}} viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>  {this.props.cakedata.ratings}</p>
                            <p class="card-text" style={{fontSize:"1.2em",marginTop:"-1em",color:"black"}}>{this.props.cakedata.reviews}  reviews</p>
                            <p class="card-text" style={{fontSize:"1.4em",color:"black"}}>{this.props.cakedata.description}</p>
                            <p class="card-text"style={{fontSize:"2em",color:"#F3B818"}}><span style={{color:"black",}}>CURRENT PRICE : </span>${this.props.cakedata.price}</p> 
                            <p class="card-text"style={{fontSize:"2em",marginTop:"-0.5em",color:"black",}}>Weight : {this.props.cakedata.weight} kg</p>
                            <p class="card-text"style={{fontSize:"2em",color:"#F3B818"}}><span style={{color:"black",}}>FLAVOUR : </span>{this.props.cakedata.flavour}</p>
                            <p class="card-text" style={{color:"black",fontSize:"1.4em"}}>Type </p>
                            <p class="card-text" style={{marginTop:"-1em",fontSize:"1.4em",color:"black",}}>{this.props.cakedata.type}</p>        
                            <button onClick={(e) => {
                                e.preventDefault()                
                                this.registers();                 
                                        }} type="button" class="btn btn-warning" style={{color:"white"}} >Add To Cart</button>
                                        
                                        
                  </div>            
                                </div>
                                
                    </div>
                    </div>
                </Link>                
                </div>                
                </div>
        )
    }
}
export default Details;