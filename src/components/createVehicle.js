  import React,{Component} from "react";
  import Form from 'react-bootstrap/Form';
  import Button from "react-bootstrap/Button";

export default class createVehicle extends Component{ 

constructor(props){
    super(props)


    this.onChangeVehicleName= this.onChangeVehicleName.bind(this);
    this.onChangeColorVehicle= this.onChangeColorVehicle.bind(this);
    this.onChangeNumberVehicle= this.onChangeNumberVehicle.bind(this);

    this.onSubmit =this.onSubmit.bind(this);

    this.state ={
        name:'',
        color:'',
        number:''
    }

}

onChangeVehicleName(e)
{
    this.setState({name:e.target.value})
}

onChangeColorVehicle(e)
{
    this.setState({color:e.target.value})
}

onChangeNumberVehicle(e)
{
    this.setState({number:e.target.value})
}

onSubmit(e){
    e.preventDefult();

    console.log('Vehicle added');
    console.log('Vehicle Color : ${this.state.color}');
    console.log('Vehicle Number : ${this.state.number}');

}



    render(){
        return(
        <div className="form-warpper">
            <Form>
                <Form.Group controlId="createVehicle">
                    <Form.Label>Name of the vehicle :</Form.Label>
                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeVehicleName}/>       
                </Form.Group>

                <Form.Group controlId="ColorVehicle">
                    <Form.Label>Color of the vehicle :</Form.Label>
                    <Form.Control type="text" value={this.state.color} onChange={this.onChangeColorVehicle}/>       
                </Form.Group>

                <Form.Group controlId="NumberVehicle">
                    <Form.Label>Number of the vehicle :</Form.Label>
                    <Form.Control type="text" value={this.state.number} onChange={this.onChangeNumberVehicle}/>       
                </Form.Group>

                <Button className="btn btn-primary"  color="black" size="lg" block="black" type="submit">
                    Add Vehicle
                </Button>


            </Form>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <link className="collapse navbar-collapse" id="navbarSupportedContent">
                    React vehicle CRUD
                </link>
                <div className="collapse navbar-collap  se">

                </div>
            </nav> */}
            {/* <div>

            </div>
            <p> hello</p> */}
        </div>
        );
    }
}

//export default createVehicle;