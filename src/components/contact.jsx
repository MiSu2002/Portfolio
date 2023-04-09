import React, { useState } from "react";
import bgImage from "../assets/contact@3x.jpg";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define the red marker icon
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="mt-5 text-white" id="contact" style={{ backgroundImage: `url(${bgImage})` }}>
      <style>
        {`
          #contact {
            height: 100vh;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }

          form {
            width: 80%;
            max-width: 600px;
          }

          .form-group {
            margin-bottom: 30px;
          }

          label {
            font-size: 1.1rem;
            margin-bottom: 10px;
          }

          input[type="text"],
          input[type="email"],
          textarea {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: rgb(250, 250, 250, 0.8);
          }

          textarea {
            height: 150px;
          }

          button[type="submit"] {
            background-color: teal;
            transition: background-color 0.2s ease-in-out;
          }

          button[type="submit"]:hover {
            background-color: rgb(0, 180, 180);
          }
          .full-height-map {
            height: 30vh;
            top: 25%;
          } 
          .contact{
            width: 80vw;
          }    
          @media screen and (max-width: 1100px){
            .contact{
                width: 100vw;
            }
          }           
        `}
      </style>
      <div style={{background: 'linear-gradient(to right, rgb(0,0,0,0.9), rgb(0,50,50,0.6))'}}>
      <div className="contact mx-auto row g-0 d-flex justify-content-center align-items-center vh-100">
        <div className="col-12 col-xl-6 d-flex justify-content-center justify-content-xl-start">
          {isSubmitted ? (
            <div>
                <h4 style={{color: 'teal'}}>Thank you for your submission!</h4>
            <button className="btn btn-dark mt-4" type="button" onClick={handleReset}>
                Send another message
            </button>
            </div>
          ) : (
            <>
              <form
                className="mt-5 d-flex flex-column align-items-center"
                onSubmit={handleSubmit}
              >
                <div className="form-group d-flex flex-column w-100">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group d-flex flex-column w-100">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group d-flex flex-column w-100">
                  <label htmlFor="subject">Subject:</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group d-flex flex-column w-100">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button className="btn text-white" type="submit">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
        <div className="col d-none d-xl-block align-items-center vh-100">    
        <MapContainer
  className="full-height-map"
  center={[22.5726, 88.3639]}
  zoom={11}
  minZoom={3}
  maxZoom={19}
  maxBounds={[[-85.06, -180], [85.06, 180]]}
  scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=${apiKey}`}
  />
  <Marker position={[22.5726, 88.3639]} icon={redIcon}>
    <Popup>
      Kolkata, India
    </Popup>
  </Marker>
</MapContainer>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;