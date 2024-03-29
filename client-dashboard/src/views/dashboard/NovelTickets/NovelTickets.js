import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ChildCard from 'src/components/shared/ChildCard';
import NovelTicketFilter from './NovelTicketFilter';
import NovelTicketsList from './NovelTicketsList';
import { useSelector } from 'react-redux';
import { useFrappeDocTypeEventListener, useFrappeDocumentEventListener, useFrappeEventListener, useFrappeGetDoc, useFrappeGetDocCount } from 'frappe-react-sdk';
import io from 'socket.io-client';

const BCrumb = [
    {
        to: '/dashboard',
        title: 'Home',
    },
    {
        title: 'Tickets',
    },
];

export default function NovelTickets() {

    const userEmail = useSelector((state) => state.novelprofileReducer.userEmail);
    const userLocation = useSelector((state) => state.novelprofileReducer.location);
    const companyName = useSelector((state) => state.novelprofileReducer.companyName);

    const [filterLocation, setFilterLocation] = useState(userLocation);

    useEffect(() => {
        let location = localStorage.getItem('location');
        if (location !== 'Property Location') {
            setFilterLocation(location);
        }
    }, [userLocation, setFilterLocation]);

    //--------------------------------------------------------Getting total count-------------------------------------------//
    const { data } = useFrappeGetDocCount(
        'Issue',
        filterLocation === "ALL" ? ['raised_by', '=', userEmail] : [['raised_by', '=', userEmail], ['location', '=', filterLocation]],
        false,
    );
    const totalPages = Math.ceil(data / 10) || 1;


    //--------------------------------------------------------Fetch Lead's Locations-----------------------------------------//
    // Fetch location of customers from leads
    const getLeadsId = () => {
        const { data, error, isValidating, mutate } = useFrappeGetDoc(
            'Customer',
            `${companyName}`
        );
        // console.log("CompanyName = ", companyName);
        return data?.leads.map(lead => lead.confirmed_location);
    }

    var confirmedLocations = getLeadsId();
    if (filterLocation === null) {
        if(confirmedLocations.length !== 0){
            setFilterLocation(confirmedLocations[0]);
        } else {
            setFilterLocation("ALL");
        }
    }
    confirmedLocations = confirmedLocations?.map(location => {
        switch (location) {
            case 'NTP':
                return { shortName: location, fullName: 'Novel Tech Park - Kudlu Gate' };
            case 'NOM':
                return { shortName: location, fullName: 'Novel Office Marathahalli' };
            case 'NOC':
                return { shortName: location, fullName: 'Novel Office Central - MG Road' };
            case 'NOQ':
                return { shortName: location, fullName: 'Novel Office Queens- Queens Road' };
            case 'NOW':
                return { shortName: location, fullName: 'Novel Office WorkHub- Whitefield' };
            case 'NBP':
                return { shortName: location, fullName: 'Novel Business Park - Adugodi' };
            case 'NOB':
                return { shortName: location, fullName: 'Novel Office Brigade' };
            case 'BTP1F':
                return { shortName: location, fullName: 'Novel Office Brigade-Whitefield' };
            case 'BTP3F':
                return { shortName: location, fullName: 'Novel Office Brigade-Whitefield' };
            default: return { shortName: location, fullName: location };
        }
    });
    confirmedLocations?.unshift({ shortName: "ALL", fullName: "ALL" });

    let allLocations = [
        { shortName: "NTP", fullName: "Novel Tech Park - Kudlu Gate" },
        { shortName: "NOM", fullName: "Novel Office Marathahalli" },
        { shortName: "NOC", fullName: "Novel Office Central - MG Road" },
        { shortName: "NOQ", fullName: "Novel Office Queens- Queens Road" },
        { shortName: "NOW", fullName: "Novel Office WorkHub- Whitefield" },
        { shortName: "NBP", fullName: "Novel Business Park - Adugodi" },
        { shortName: "NOB", fullName: "Novel Office Brigade" },
        { shortName: "BTP1F", fullName: "Novel Office Brigade-Whitefield" },
    ]

    allLocations.forEach((element) => {
        if (!confirmedLocations?.some(confirmedLocation => confirmedLocation.shortName === element.shortName)) {
            confirmedLocations?.push(element);
        }
    })

    //-----------------------------------------------------------END---------------------------------------------------------//

    return (
        <PageContainer title="Tickets - Novel Office" description="this is Note page">
            <Breadcrumb title="Tickets" items={BCrumb} />
            <ChildCard>
                <NovelTicketFilter userEmail={userEmail} filterLocation={filterLocation} />
                <NovelTicketsList userEmail={userEmail} totalPages={totalPages} confirmedLocations={confirmedLocations}
                    filterLocation={filterLocation} setFilterLocation={setFilterLocation} />
            </ChildCard>
        </PageContainer>
    )
}
