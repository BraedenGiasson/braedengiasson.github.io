import { previewEuropeTripData } from "@/data/trips/europe/europeTripData";
import { previewEnglandTripData } from "@/data/trips/englandTripData";
import { TripTemplate } from "@/enums/tripTemplate";
import React from "react";

export type TripData = {
    endpoint: string,
    bgImg: string | any,
    title: string,
    date: string,
    flags: FlagData[]
}

export type FlagData = {
    name: string,
    countryCode: string | any
}

type TripsData = {
    title: string,
    description: string,
    trips: TripData[]
}

export type SpecificTripSectionData = {
    template?: TripTemplate,
    title?: string,
    titleIcon?: string | any,
    isIconImage?: boolean,
    dates?: string,
    subTitle?: string,
    description?: string,
    flagCountryCodes?: string[],
    buttonImage?: string | any,
    previewImages?: string[] | any[],
    images?: string[] | any[],
}

export const tripsData: TripsData = {
    title: 'My Trips',
    description: 'Click on one of my trips to take you through a wonderful journey!',

    trips: [
        previewEuropeTripData,
        // previewEnglandTripData,
        // previewEuropeTripData,
    ]
}

type TripSectionData = {
    title: string,
    description:  string,
    images: string[] | any[],
    buttonText: string
}

export const tripSectionData: TripSectionData = {
    title: 'Trips',
    description: 'Click on one of my trips to take you through a wonderful journey!',
    buttonText: 'See all',

    images: [
        previewEuropeTripData.bgImg
    ]
}