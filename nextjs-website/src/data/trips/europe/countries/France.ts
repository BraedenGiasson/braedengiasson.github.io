import { SpecificTripSectionData } from "@/data/tripsData";
import { TripTemplate } from "@/enums/tripTemplate"


// Icons
import { FaMapPin, FaPlane } from "react-icons/fa"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

// Images
import previewPhoto from '@/assets/Europe/Switzerland/preview_photo.jpg'
import { mapPin, one, two } from "../images"

export const france: SpecificTripSectionData[] = [
    {
        template: TripTemplate.One,
        title: 'Start',
        subTitle: 'Why this trip?',
        dates: 'August 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit quisquam voluptatem, repellendus neque praesentium quam ex deserunt fugiat enim tempore, et animi consequatur fuga laborum iusto nulla dignissimos voluptatibus?',
        flagCountryCodes: [
            'FR'
        ],
        titleIcon: mapPin,
        isIconImage: true,
        previewImages: [
            one,
            two
        ]
    },
]