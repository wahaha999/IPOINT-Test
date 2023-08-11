export const API_URL = 'http://localhost:5000';

export const MAP_API_KEY = 'AIzaSyC-dm2cmhiM92RsSlzhcbm4rWvkGjiEigU';
export const MAP_STYLES = [
    {
        featureType: 'all',
        elementType: 'geometry.fill',
        stylers: [{ color: '#2b2b2b' }]
    },
];

export const OFFICES = [
    {
        name: 'Paphos Office',
        email: 'info@century21.com',
        address: [
            'Tsakalof 15, Kolonaki',
            'Paphos, Cypruss, 22033'
        ],
        lat: 29.98,
        lng: 95.68,
        phone: [
            '+30 210 3635 457',
            '+30 210 3635 457'
        ],
        business_hours: 'Mon to Fri:  9:00 AM - 6:00 PM'
    },
    {
        name: 'Limassol Office',
        email: 'limassol_info@century21.com',
        address: [
            'Limassol 20, Office',
            'Limassol, Cypruss, 22011'
        ],
        lat: 29.985,
        lng: 95.63,
        phone: [
            '+30 123 4567 890',
            '+30 234 5678 901'
        ],
        business_hours: 'Mon to Fri:  9:00 AM - 6:00 PM'
    },
    {
        name: '3rd Address Office',
        email: '3rd_info@century21.com',
        address: [
            '3rd Address 25, Office',
            '3rd, Cypruss, 22000'
        ],
        lat: 30,
        lng: 95.74,
        phone: [
            '+30 345 6789 012',
            '+30 456 7890 123'
        ],
        business_hours: 'Mon to Fri:  9:00 AM - 6:00 PM'
    }
]