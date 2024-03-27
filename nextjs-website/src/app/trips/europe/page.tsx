'use client'

import { useContext } from 'react';
import { ThemeContext } from '@/contexts/ThemeContext';
import { TripsNavbar } from '@/components';

import './EuropeTripPage.css';
import BaseTripTemplate from '@/components/TripSectionTemplates/BaseTripTemplate/BaseTripTemplate';

function EuropeTrip() {

    const { theme } = useContext(ThemeContext);

    return (
      <div className="europe-trip font-poppins" style={{ backgroundColor: theme.secondary }}>
        <TripsNavbar title="Europe" />

        <BaseTripTemplate/>
      </div>
    );
}

export default EuropeTrip
