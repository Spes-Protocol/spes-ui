import * as _ from 'lodash';
import { Box, Button, Chip, IconButton, Paper, Typography } from "@mui/material";
import { dollarFormatter, getRandomInt, round } from "../../utils/sharedUtils";
import { DatePosted } from "../CampaignCard";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import IosShareIcon from '@mui/icons-material/IosShare';
import { BorderLinearProgress } from "../../styles/progressBar.styles";
import { CampaignPage } from "../../types";
import React, { useState } from 'react';

interface CampaignDescriptionProps {
    page: CampaignPage;
    pledgeClicked: boolean;
    setPledgeClicked: any;
}

const CampaignActions: React.FC<Omit<CampaignDescriptionProps, 'page'>> = ({ pledgeClicked, setPledgeClicked }) => {
    // these are coming from an API post supabase
    const [ following, setFollowing ] = useState(false);
    const [ isFavorite, setIsFavorite ] = useState(false);

    const handlePledgeClick = () => {
        setPledgeClicked(!pledgeClicked);
    }

    const hadleFollowing = (event: React.MouseEvent<HTMLElement>) => {
        setFollowing(!following);
        // send API to add to favorites
        console.log('following')
    }

    const handleFavorite = (event: React.MouseEvent<HTMLElement>) => {
        setIsFavorite(!isFavorite);
        // send API to add to favorites
        // event.stopPropagation();
        // event.preventDefault();
        console.log('add to favorites')
    }

    return (
        <Box display='flex' flexDirection={'column'} rowGap={1}>
            <Button fullWidth startIcon={following ? <CheckOutlinedIcon /> : null} variant={following ? "contained" : "outlined"} color='error' size='medium' onClick={hadleFollowing}>
                {following ? 'Following' : 'Follow'}
            </Button>
            <Button fullWidth variant="contained" color={pledgeClicked ? 'warning' : 'error'} size='medium' onClick={handlePledgeClick}>
                Pledge
            </Button>
            <Box display='flex' flexDirection={'row'} columnGap={3} justifyContent='center' alignItems={'center'}>
                <IconButton onClick={handleFavorite}>
                    {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton>
                    <IosShareIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

const CampaignDescription: React.FC<CampaignDescriptionProps> = ({ page, pledgeClicked, setPledgeClicked } : CampaignDescriptionProps ) => {
    const { name, postedDate, moneyRaised, moneyToRaise, active, tags, description } = page;
    return (<>
        <Paper
                elevation={8}
                 sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    p: 3,
                    
                    minWidth: 300,
                    maxWidth: 350,
                    rowGap: 2,
                }}
            >
                
                <Box display='flex' flexDirection='column' rowGap={1}>
                    <Box display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                        <DatePosted date={postedDate} variant='body1'/>
                        <Chip label={active ? 'Active' : 'Pending'} color={active ? 'success' : 'warning'} size='small' variant="outlined" />
                    </Box>
                    <Typography variant='h4'>{name}</Typography>
                    <Typography variant='body1'>{description}</Typography>

                    <BorderLinearProgress sx={{ mt: 2, }} variant="determinate" value={(moneyRaised * 100) / moneyToRaise} />
                    <Typography variant='body1'>Raised {dollarFormatter.format(moneyRaised)} of {dollarFormatter.format(moneyToRaise)} ({round(moneyRaised*100/moneyToRaise, 1)}%) {moneyRaised ? '🎉' : ''}</Typography>
                    <Box display='flex' flexDirection='row' columnGap={1}>
                    {_.map(tags, (tag, index) => {
                        return (
                            <Chip key={index} label={tag} size='small' variant='filled' clickable />
                        )
                    })}
                    </Box>
                </Box>
                <CampaignActions pledgeClicked={pledgeClicked} setPledgeClicked={setPledgeClicked} />
            </Paper>
    </>
    )
};

export default CampaignDescription;