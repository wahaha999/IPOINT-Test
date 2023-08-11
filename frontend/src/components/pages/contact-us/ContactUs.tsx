import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import ContactForm from './partials/ContactForm';
import { MAP_API_KEY, MAP_STYLES, OFFICES } from '../../../utils/constants';
import mapPin from '../../../assets/images/map-pin.svg';
import mapPinSelected from '../../../assets/images/map-pin-selected.svg';

interface MapPinProps {
    index: number;
    selected: number;
    lat: number;
    lng: number;
    onClick: () => void;
}

const MapPin: React.FC<MapPinProps> = ({ index, selected, onClick }) => (
    <div className='map-pin' onClick={onClick}>
        <img src={index === selected ? mapPinSelected : mapPin} alt='map-pin' />
    </div>
);

const ContactUs: React.FC = () => {
    const [isRefreshed, setIsRefreshed] = useState(true);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        setIsRefreshed(true);
    }, [isRefreshed]);

    const handlePinClick = (index: number) => {
        setSelected(index);
        setIsRefreshed(false);
    };

    return (
        <div className='contact-us'>
            <div className='top-section'></div>
            <div className='bottom-section'>
                <div className='information'>
                    <h6>Century 21 Cyprus</h6>
                    <h1>Contact Us</h1>
                    <div className='details'>
                        <div>
                            <h6>Find us in one of three offices in Cyprus:</h6>
                            <div className='map'>
                                {isRefreshed && (
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: MAP_API_KEY }}
                                        defaultCenter={{
                                            lat: 29.9717,
                                            lng: 95.6938
                                        }}
                                        defaultZoom={12}
                                        options={{ styles: MAP_STYLES, ...{
                                            fullscreenControl: false
                                        }}}>
                                        {isRefreshed && (OFFICES.map((office, index) => (
                                            <MapPin
                                                key={index}
                                                index={index}
                                                selected={selected}
                                                lat={office.lat}
                                                lng={office.lng}
                                                onClick={() => handlePinClick(index)}
                                            />
                                        )))}
                                    </GoogleMapReact>
                                )}
                            </div>
                            <div className='button-group'>
                                {OFFICES.map((office, index) => (
                                    <button
                                        key={index}
                                        className={`button${index === selected ? '' : ' bordered'}`}
                                        onClick={() => handlePinClick(index)}>
                                        {office.name}
                                    </button>
                                ))}
                            </div>
                            <div className='office-info'>
                                <div>
                                    <label>Address</label>
                                    {OFFICES[selected].address.map((address, index) => (
                                        <p key={index}>{ address }</p>
                                    ))}
                                </div>
                                <div>
                                    <label>Phone</label>
                                    {OFFICES[selected].phone.map((phone, index) => (
                                        <p key={index}>{ phone }</p>
                                    ))}
                                </div>
                                <div>
                                    <label>Business Hours</label>
                                    <p>{ OFFICES[selected].business_hours }</p>
                                </div>
                                <div>
                                    <label>Email</label>
                                    <p>{ OFFICES[selected].email }</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h6>Have any questions? Feel free to drop us a line</h6>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;