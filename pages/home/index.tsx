import * as _ from 'lodash';
import { Box, Typography } from "@mui/material";
import moment from "moment";
import CampaignCard, { CampaignCardProps } from "../../components/CampaignCard";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import * as React from 'react';
import { ProfileCard, ProfileCardProps } from '../../components/ProfileCard';
import CampaignMenuBar from '../../components/CampaignsMenuBar';

const campaignList: CampaignCardProps[] = [
    {
        name: 'YesWelder Firstess CT2050: Powerful 7-in-1 Welder & Cutter',
        endDate: moment().format('LL'),
        alreadyRaised: 200,
        lookingToRaise: 1000,
        description: 'Introducing the 7-in-1 YesWelder Firstess CT2050. Combining the most powerful welding and cutting tools into an easy-to-use professional machine, the CT2050 is a workhorse, allowing you to cycle through AC/DC TIG, AC/DC Pulse TIG, Stick Welding, Plasma Cutting, and more at the tap of a button.',
        imageSrc: 'engage.png',
        organizer: 'The white house',
    },
    {
        name: 'Red Pine: Dancing with the Ballers',
        endDate: moment().subtract(3, 'months').format('LL'),
        alreadyRaised: 345,
        lookingToRaise: 1000,
        description: 'Help fund a book-and-film collaboration between Copper Canyon Press, a nonprofit publisher dedicated to poetry, and Woody Creek Pictures, a production company focused on “films dedicated to the common good.”',
        imageSrc: 'mockProfiles/10.png',
        organizer: 'Burning mantaray',
    },
    {
        name: 'Luba: An Intelligent, Perimeter Wire Free Robot Lawn Mower',
        endDate: moment().subtract(14, 'months').format('LL'),
        alreadyRaised: 20,
        lookingToRaise: 500,
        description: 'Meet Luba, a revolutionary robotic lawnmower that delivers the picture-perfect lawn with a hands-free experience. Thanks to more than 80 patents, Luba features advanced RTK navigation and an interconnected smart system that allows users to program virtual zones in the app schedule.',
        imageSrc: 'secure.png',
        organizer: 'Kickstarter',
    },
    {
        name: 'Charity event raising money for Mars',
        endDate: moment().format('LL'),
        alreadyRaised: 70000,
        lookingToRaise: 100000,
        description: 'nvallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum',
        imageSrc: 'recur.png',
        organizer: 'The white house',
    },
    {
        name: 'Ohsun: Korean Banchan Deli & Cafe for Seattle',
        endDate: moment().subtract(22, 'days').format('LL'),
        alreadyRaised: 200,
        lookingToRaise: 600,
        description: 'Help Sara Upshaw and team go from pop-up to a Seattle brick-and-mortar in 2022. A space for great food and community.',
        imageSrc: 'mockProfiles/2.png',
        organizer: 'Washington Times',
    }

]

const profileList: ProfileCardProps[] = [
    {
        name: 'St. Jude\'s Cancer Research',
        location: 'San Francisco, CA',
        imgSrc: '1',
    },
    {
        name: 'UNICEF USA',
        location: 'Minneapolis, MN',
        imgSrc: '2',
    },
    {
        name: 'Heifer International',
        location: 'Chicago, IL',
        imgSrc: '3',
    },
    {
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '4',
    },
    {
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '5',
    },
    {
        name: 'St. Jude\'s Cancer Research',
        location: 'San Francisco, CA',
        imgSrc: '6',
    },
    {
        name: 'UNICEF USA',
        location: 'Minneapolis, MN',
        imgSrc: '7',
    },
    {
        name: 'Heifer International',
        location: 'Chicago, IL',
        imgSrc: '8',
    },
    {
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '9',
    },
    {
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '10',
    }
]

const ActiveProfiles = () => {
    return (
        <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {_.map(profileList, (profile, index) => (
          <ProfileCard key={index} location={profile.location} name={profile.name} imgSrc={profile.imgSrc} />
        ))}
      </div>
    )
}

const Campaigns = () => {    
    const [isActive, setIsActive] = React.useState(true);

    const handleActiveClick = () => {
        setIsActive(true);
    }

    const handlePendingClick = () => {
        setIsActive(false);
        console.log(isActive)
    }

    return (
        <DashboardLayout currentPageIndex={0}>
            <Box display='flex' flexDirection={'column'} rowGap={2}>
                <Typography variant='h2'>
                    Campaigns around the world
                </Typography>
                <Box>
                    <Typography variant='h5'>
                        Active organizations and profiles around you
                    </Typography>

                    <ActiveProfiles />
                </Box>
                
                <Box>
                    <Typography variant='h5'>
                        Pledge to campaigns that speak to you
                    </Typography>
                    <CampaignMenuBar isActive handleActiveClick={handleActiveClick} handlePendingClick={handlePendingClick} />
                    {_.map(campaignList, (campaign, index) => {
                        return (<CampaignCard key={index} name={campaign.name} endDate={campaign.endDate} alreadyRaised={campaign.alreadyRaised} lookingToRaise={campaign.lookingToRaise} description={campaign.description} imageSrc={campaign.imageSrc} organizer={campaign.organizer} />)
                    })}
                </Box>
            </Box>
        </DashboardLayout>
    );
};

export default Campaigns;