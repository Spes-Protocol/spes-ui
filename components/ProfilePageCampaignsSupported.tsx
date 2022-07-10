import * as _ from 'lodash';
import { Box, Typography } from "@mui/material";
import SearchOptions from "./SearchOptions";
import { campaignList } from '../utils/mockData';
import CampaignCard from './CampaignCard';

interface ProfilePageCampaignsSupportedProps {
    campaignsSupported: string[];
    name: string;
}

const ProfilePageCampaignsSupported: React.FC<ProfilePageCampaignsSupportedProps> = ({ campaignsSupported, name }: ProfilePageCampaignsSupportedProps) => {
    return (
        <Box display='flex' flexDirection='column' rowGap={2}>
            <Typography variant='h4'>Campaigns {name} is supporting</Typography>
            <SearchOptions />
            {_.map(campaignsSupported, (id, index) => {
                const campaign = campaignList[parseInt(id)];
                return (
                    <CampaignCard key={index} {...campaign} />
                    )
            })}
        </Box>
    )
};

export default ProfilePageCampaignsSupported;