import { React, useState, useEffect } from 'react'
import './addfood.css'
import img1 from "../../media/img1.jpg"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'
import L from 'leaflet';
import axios from 'axios'
import Points from './Points'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Addfood = () => {

    const [users, setUsers] = useState([]);
    const l1 = localStorage.getItem('latitude')
    const l2 = localStorage.getItem('longitude')
    console.log(l1, l2)

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://triptifoundation.herokuapp.com/getneedhelp");
        setUsers(result.data);
    }
    console.log(users)


    return (<>
        <p className="addfood-h lead">Select a nearby location to help</p>
        <MapContainer className="addfood-map" style={{ height: '75vh' }} center={[l1, l2]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                users.map((item) =>
                    <Points key={item.id} lat={item.latitude} lon={item.longitude} add1={item.address1} add2={item.address2} city={item.city} id={item._id} />
                )}

        </MapContainer>
    </>

    )
}

export default Addfood

        // <div className="main-container">
        //     <center>
        //     <Image src={img1} className="img1-el" alt="image here" />
        //     </center>
        //     <div id="form-id" className="about">
        //         <Form className="form-el form-1 about">
        //             <div className="addfood container">
        //                 <Form.Group className="address-el form" controlId="formGridAddress1">
        //                     <Form.Label>Address</Form.Label>
        //                     <Form.Control className="control-el" placeholder="1234 Main St ,Apartment, studio, or floor" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group as={Col} className="zipcode-el form" controlId="formGridZip">
        //                     <Form.Label>Zip Code</Form.Label>
        //                     <Form.Control className="control-el" placeholder="400000" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group className="whatfood-el form" controlId="exampleForm.ControlTextarea1">
        //                     <Form.Label>What type of food you will donate?</Form.Label>
        //                     <Form.Control as="textarea" className="control-el" rows={3} placeholder="Rice, cury, vegetable, chapati" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group as={Col} className="howMuchfoodel form" controlId="formGridZip">
        //                     <Form.Label>How much you will donate?(in kg)</Form.Label>
        //                     <Form.Control className="control-el" placeholder="" />
        //                 </Form.Group>
        //             </div>

        //             <div className="addfood container">
        //                 <Form.Group className="checkbox-el form" controlId="formBasicCheckbox">
        //                     <Form.Check type="checkbox" label="I assure you that food is fresh and edible" />
        //                 </Form.Group>
        //             </div>
        //             <div className="addfood container">
        //                 <Button className="button-el btn form" variant="primaryel" type="submit">
        //                     Submit
        //                 </Button>
        //             </div>
        //         </Form>
        //     </div>
        // </div>