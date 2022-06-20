import * as _ from 'lodash';
import { Box, Typography } from "@mui/material";
import moment from "moment";
import CampaignCard from "../../../components/CampaignCard";
import HomepageLayout from "../../../components/Layouts/HomepageLayout";
import * as React from 'react';
import { ProfileCard, ProfileCardProps } from '../../../components/ProfileCard';
import CampaignMenuBar from '../../../components/CampaignsMenuBar';
import { campaignList, profileList } from '../../../utils/mockData';
import CampaignLayout from '../../../components/Layouts/CampaignLayout';

const ActiveProfiles = () => {
    return (
        <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {_.map(profileList, (profile, index) => (
          <ProfileCard key={index} id={index} location={profile.location} name={profile.name} imgSrc={profile.imgSrc} />
        ))}
      </div>
    )
}

const Campaigns = () => {    
    const [isActive, setIsActive] = React.useState(true);

    // const handleActiveClick = () => {
    //     setIsActive(true);
    // }

    // const handlePendingClick = () => {
    //     setIsActive(false);
    //     console.log(isActive)
    // }

    return (
        <HomepageLayout currentPageIndex={0}>
            <CampaignLayout currentCampaignPageIndex={0}>
                <Box display='flex' flexDirection={'column'} rowGap={2}>
                    <Typography variant='h3'>
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
                        <CampaignMenuBar toggleActive={isActive} toggleState={setIsActive} />
                        {_.map(isActive ? _.filter(campaignList, campaign => campaign.active ) : _.filter(campaignList, campaign => campaign.active === false ), (campaign, index) => {
                            return (<CampaignCard key={index} campaignId={campaign.campaignId} name={campaign.name} postedDate={campaign.postedDate} moneyRaised={campaign.moneyRaised} moneyToRaise={campaign.moneyToRaise} description={campaign.description} mainImage={campaign.mainImage} organizerName={campaign.organizerName} />)
                        })}
                    </Box>
                </Box>
            </CampaignLayout>
        </HomepageLayout>
    );
};

export default Campaigns;