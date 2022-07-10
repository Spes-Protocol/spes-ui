import * as _ from 'lodash';
import { Box, Typography } from "@mui/material";
import SearchOptions from "./SearchOptions";
import { campaignList } from '../utils/mockData';
import CampaignCard from './CampaignCard';

interface ProfilePageCampaignsCreatedProps {
    campaignsCreated: string[];
    name: string;
}

const ProfilePageCampaignsCreated: React.FC<ProfilePageCampaignsCreatedProps> = ({ campaignsCreated, name }: ProfilePageCampaignsCreatedProps) => {
    return (
        <Box display='flex' flexDirection='column' rowGap={2}>
            <Typography variant='h4'>{name}&apos;s campaigns</Typography>
            <SearchOptions />
            {_.map(campaignsCreated, (id, index) => {
                const campaign = campaignList[parseInt(id)];
                return (
                    <CampaignCard key={index} {...campaign} />
                    )
            })}
        </Box>
    )
};

export default ProfilePageCampaignsCreated;