import { SpecificTripSectionData, TripData } from "@/data/tripsData"

import { TripTemplate } from "@/enums/tripTemplate"

// Icons
import { FaMapPin, FaPlane } from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

// Images
import previewPhoto from '@/assets/Europe/Switzerland/preview_photo.jpg'
import { mapPin, one, two } from "./images"
import { austria, belgium, czechRepublic, france, germany, italy, luxembourg, netherlands, slovakia, slovenia, switzerland, vaticanCity } from "./index"

export const previewEuropeTripData: TripData = {
    title: 'Europe',
    date: 'Aug - Oct, 2023',
    bgImg: previewPhoto,
    endpoint: 'europe',
    
    flags: [
        {
            name: 'France',
            countryCode: 'FR'
        },
        {
            name: 'Belgium',
            countryCode: 'BE'
        },
        {
            name: 'Netherlands',
            countryCode: 'NL'
        },
        {
            name: 'Germany',
            countryCode: 'DE'
        },
        {
            name: 'Czech Republic',
            countryCode: 'CZ'
        },
        {
            name: 'Austria',
            countryCode: 'AT'
        },
        {
            name: 'Slovakia',
            countryCode: 'SK'
        },
        {
            name: 'Slovenia',
            countryCode: 'SI'
        },
        {
            name: 'Italy',
            countryCode: 'IT'
        },
        {
            name: 'Vatican City',
            countryCode: 'VA'
        },
        {
            name: 'Switzerland',
            countryCode: 'CH'
        },
        {
            name: 'Luxembourg',
            countryCode: 'LU'
        }
    ]
}

export const europeTripData= [
    france,
    belgium,
    netherlands,
    germany,
    czechRepublic,
    austria,
    slovakia,
    slovenia,
    italy,
    vaticanCity,
    switzerland,
    luxembourg
]