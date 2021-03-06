import * as _ from 'lodash';
import { Box, Button, Chip, IconButton, Fade, Paper, Typography } from "@mui/material";
import { dollarFormatter, getRandomInt, round } from "../../utils/sharedUtils";
import { DatePosted } from "../CampaignCard";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShareIcon from '@mui/icons-material/Share';
import IosShareIcon from '@mui/icons-material/IosShare';
import { BorderLinearProgress } from "../../styles/progressBar.styles";
import React, { useState } from 'react';

interface CampaignDescriptionProps {
    page: CampaignPage;
    setPledgeOnClick: any;
}

const CampaignActions: React.FC<Omit<CampaignDescriptionProps, 'page'>> = ({ setPledgeOnClick }) => {
    // these are coming from an API post supabase
    const [ isFavorite, setIsFavorite ] = useState(false);

    const handleFavorite = (event: React.MouseEvent<HTMLElement>) => {
        setIsFavorite(!isFavorite);
        // send API to add to favorites
        // event.stopPropagation();
        // event.preventDefault();
        console.log('add to favorites')
    }

    return (
        <Box display='flex' flexDirection={'column'} rowGap={1}>
            <Box display='flex' flexDirection={'row'} columnGap={3} justifyContent='center' alignItems={'center'}>
                <IconButton onClick={handleFavorite}>
                    {isFavorite ? <FavoriteRoundedIcon /> : <FavoriteBorderRoundedIcon />}
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </Box>
            <Button sx={{ letterSpacing: 1.5 }} fullWidth variant="contained" color={'error'} size='medium' onClick={() => setPledgeOnClick('PLEDGE')}>
                Pledge
            </Button>
        </Box>
    )
}

const CampaignDescription: React.FC<CampaignDescriptionProps> = ({ page, setPledgeOnClick } : CampaignDescriptionProps ) => {
    const { name, postedDate, moneyRaised, moneyToRaise, active, tags, description } = page;
    return (<>
        <Paper
                elevation={4}
                 sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    p: 3,
                    
                    // minWidth: 300,
                    // maxWidth: 350,
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
                    <Typography variant='body1'>Raised {dollarFormatter.format(moneyRaised)} of {dollarFormatter.format(moneyToRaise)} ({round(moneyRaised*100/moneyToRaise, 1)}%) {moneyRaised ? '????' : ''}</Typography>
                    <Box display='flex' flexDirection='row' columnGap={1}>
                    {_.map(tags, (tag, index) => {
                        return (
                            <Chip key={index} label={tag} size='small' variant='filled' clickable />
                        )
                    })}
                    </Box>
                </Box>
                <CampaignActions setPledgeOnClick={setPledgeOnClick} />
            </Paper>
    </>
    )
};

export default CampaignDescription;