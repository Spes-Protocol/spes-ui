import { Box } from "@mui/material";
import { CampaignCardProps } from "../CampaignCard";

interface CampaignDescriptionProps {
    description: CampaignCardProps;
}

const CampaignDescription: React.FC<CampaignDescriptionProps> = ({ description } : { description: CampaignCardProps; } ) => {
    return (
        <Box display='flex' flexDirection='column'>

            
        </Box>
    )
};

export default CampaignDescription;