import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Chip, IconButton, Paper, Typography } from "@mui/material";
import { profileList } from "../../utils/mockData";
import { dollarFormatter, getRandomInt, round } from "../../utils/sharedUtils";
import { CampaignCardProps, DatePosted } from "../CampaignCard";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import Image from 'next/image';
import { BorderLinearProgress } from "../../styles/progressBar.styles";

interface CampaignDescriptionProps {
    description: CampaignCardProps;
}

const CampaignActions = () => {
    return (
        <Box display='flex' flexDirection={'column'} rowGap={1}>
            <Box display='flex' flexDirection={'row'} columnGap={3} justifyContent='center' alignItems={'center'}>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton>
                    <IosShareIcon />
                </IconButton>
            </Box>
            <Button fullWidth variant="outlined" color='error' size='large'>
                Follow
            </Button>
            <Button fullWidth variant="contained" color='error' size='large'>
                Pledge
            </Button>
        </Box>
    )
}

const CampaignDescription: React.FC<CampaignDescriptionProps> = ({ description } : { description: CampaignCardProps; } ) => {
    const { name, postedDate, moneyRaised, moneyToRaise, active } = description;
    const randomProfileIdx = getRandomInt(10);
    return (
            <Paper
                 sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    p: 2,
                    boxShadow: 4,
                    minWidth: 300,
                    maxWidth: 350,
                }}
            >
                <Card sx={{boxShadow: 4}}>
                    <CardActionArea sx={{ display: 'flex', flexDirection:'row', justifyContent: 'flex-start', px: 1 }}>
                        <CardMedia>
                            <Image width='70' height='70' src={`/mockProfiles/${randomProfileIdx}.png`} alt={profileList[randomProfileIdx].name} />
                        </CardMedia>
                        <CardContent>
                            <Typography fontWeight={900} flexWrap={'wrap'}  variant='body1'>{profileList[randomProfileIdx].name}</Typography>
                            <Typography variant='subtitle2' sx={{ color: '#888' }}>{profileList[randomProfileIdx].location}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Box display='flex' flexDirection='column' rowGap={1}>
                    <Typography variant='h4'>{name}</Typography>
                    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <DatePosted date={postedDate} variant='body1'/>
                        <Chip label={active ? 'Active' : 'Pending'} color={active ? 'success' : 'warning'} size='small' variant="outlined" />
                    </Box>
                    <BorderLinearProgress sx={{ mt: 2, }} variant="determinate" value={(moneyRaised * 100) / moneyToRaise} />
                    <Typography variant='body1'>Raised {dollarFormatter.format(moneyRaised)} of {dollarFormatter.format(moneyToRaise)} ({round(moneyRaised*100/moneyToRaise, 1)}%) {moneyRaised ? '🎉' : ''}</Typography>

                </Box>
                <CampaignActions />

            </Paper>
    )
};

export default CampaignDescription;