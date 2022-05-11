import { ScheduleRounded } from "@mui/icons-material";
import { Box, Card, Fade, IconButton, Typography } from "@mui/material";
import moment from "moment";
import palette from "../themes/palette";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Image from "next/image";

interface CampaignCardProps {
    name: string;
    endDate: string;
    lookingToRaiseDollars: number;
    description: string;
    imageSrc: string;
    organizer: string;
}

const CampaignDate: React.FC<{ date: string }> = ({ date }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between'} }>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ScheduleRounded fontSize="inherit" />
            <Typography
            color="text.secondary"
            variant="caption"
            fontWeight={500}
            sx={{ ml: 0.5, mt: '1px', color: palette.secondary.darker }}
            >
            {date}
            </Typography>
        </Box>
        <IconButton onClick={() => console.log("expand")}>
            <MoreHorizIcon sx={{ width: 30, height: 30, color: palette.secondary.darker }} />
        </IconButton>
      </Box>
    )
}

const CampaignCard: React.FC<CampaignCardProps> = (props: CampaignCardProps) => {
    const { name, endDate, lookingToRaiseDollars, description, imageSrc, organizer } = props;
    return (
        <Fade in timeout={700}>
            <Card
                sx={{
                minWidth: 800,
                minHeight: 300,
                maxWidth: 1000,
                // height: 'auto',
                // minHeight: '10vw',
                // minHeight: 300,
                boxShadow: 3, borderRadius: 3,
                marginTop: 3,
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
                p: 2.5,
            }}>
                <CampaignDate date={endDate} />
                <Box display='flex' flexDirection='row'>
                    <Image src={`/${imageSrc}`} alt='Campaign desc' height={150} width={300}/>
                    <Box display='flex' flexDirection='column'>
                        <Typography variant="h5">{name}</Typography>
                        <Typography variant="subtitle1">{description}</Typography>

                    </Box>
                </Box>
                
            </Card>
    </Fade>
    )
};

export default CampaignCard;