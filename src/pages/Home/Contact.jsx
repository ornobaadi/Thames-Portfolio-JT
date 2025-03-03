import React, { useState, useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
// Import Leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// Import Leaflet CSS in your component or in your main CSS/index.js file
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in react-leaflet
// You'll need to import these icon images or use a custom icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icon
const greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // Melbourne coordinates
    const position = [-37.8136, 144.9631];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <Link to="/" className="play-bold text-lime-600 text-xl md:text-2xl font-medium hover:text-green-600 transition-colors">
                        Contact Me
                    </Link>
                    <h1 className="play-bold text-6xl lg:text-7xl font-bold text-gray-800 mt-6 mb-12">Let's Start A New Project</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Contact Information */}
                    <div className="md:col-span-1 space-y-10">
                        <div className="flex items-center">
                            <div className="bg-green-500 rounded-full p-6 mr-6 text-white">
                                <FaLocationDot size={40} />
                            </div>
                            <div>
                                <h3 className="play-bold text-xl font-medium text-gray-800">Location</h3>
                                <p className="text-lg text-gray-600">20 Bordeshi, London, Usa</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-green-500 rounded-full p-6 mr-6 text-white">
                                <MdOutlineLocalPhone size={40} />
                            </div>
                            <div>
                                <h3 className="play-bold text-xl font-medium text-gray-800">Phone</h3>
                                <p className="text-lg text-gray-600">+123 456 7890</p>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <div className="bg-green-500 rounded-full p-6 mr-6 text-white">
                                <IoMdMail size={40} />
                            </div>
                            <div>
                                <h3 className="play-bold text-xl font-medium text-gray-800">Email</h3>
                                <p className="text-lg text-gray-600">hello@hibro.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 play">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="input input-bordered w-full bg-white text-lg h-16 px-6"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="input input-bordered w-full bg-white text-lg h-16 px-6"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 play">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone"
                                    className="input input-bordered w-full bg-white text-lg h-16 px-6"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Your Subject"
                                    className="input input-bordered w-full bg-white text-lg h-16 px-6"
                                />
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Start writing message here"
                                className="play textarea textarea-bordered w-full h-52 bg-white text-lg px-6 py-4"
                                required
                            ></textarea>

                            <button type="submit" className="play-bold btn bg-green-500 hover:bg-green-600 border-none text-white text-lg px-10 py-4 h-16 rounded-lg">
                                Submit Now
                            </button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                    <MapContainer 
                        center={position} 
                        zoom={13} 
                        scrollWheelZoom={false}
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position} icon={greenIcon}>
                            <Popup>
                                Our Office Location <br /> Melbourne, Australia
                            </Popup>
                        </Marker>
                    </MapContainer>
                    <div className="absolute bottom-2 right-2 z-[1000] text-xs text-gray-600">
                        <a href="https://leafletjs.com/">Leaflet</a> | © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;