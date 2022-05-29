import React, { useState } from 'react';
import { ScheduleRounded } from "@mui/icons-material";
import { Box, Button, ButtonBase, Card, CardActionArea, Fade, IconButton, Typography } from "@mui/material";
import moment from "moment";
import palette from "../themes/palette";
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Image from "next/image";
import Link from "next/link";

export interface CampaignCardProps {
    name: string;
    endDate: string;
    alreadyRaised: number;
    lookingToRaise: number;
    description: string;
    imageSrc: string;
    organizer: string;
}

const CampaignActionBar: React.FC<{ date: string; organizer: string; }> = ({ date, organizer }) => {
    const [ isFavorite, setIsFavorite ] = useState(false);

    const handleFavorite = (event: React.MouseEvent<HTMLElement>) => {
        setIsFavorite(!isFavorite);
        // send API to add to favorites
        event.stopPropagation();
        event.preventDefault();
        console.log('add to favorites')
    }

    const handleShare = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        event.preventDefault();
        console.log('generate share link')
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'} }>
            <Box display='flex' alignItems='center' flexDirection='row' columnGap={3}>
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <ScheduleRounded fontSize="inherit" />
                    <Typography
                    color="text.secondary"
                    variant="body1"
                    fontWeight={500}
                    sx={{ ml: 0.5, mt: '1px', color: palette.secondary.darker }}
                    >
                    {date}
                    </Typography>
                </Box>
                <Box display='flex' flexDirection='row' columnGap={0.7}>
                <Typography variant='body1'>Organized by</Typography>
                <Typography variant='body1' sx={{ fontWeight: 700}}>{organizer}</Typography>
                </Box>
            </Box>
            <Box display={'flex'} flexDirection='row' columnGap={1} alignItems='center'>
                <IconButton onClick={(event: React.MouseEvent<HTMLElement>) => handleFavorite(event)}>
                    {
                        isFavorite ? <FavoriteIcon sx={{ width: 30, height: 30, color: '#ef233c', borderColor: 'black' }} /> :  
                        <FavoriteBorderIcon sx={{ width: 30, height: 30, color: palette.secondary.darker }} />
                    }
                </IconButton>
                <IconButton onClick={(event: React.MouseEvent<HTMLElement>) => handleShare(event)}>
                    <ShareIcon sx={{ width: 30, height: 30, color: palette.secondary.darker }} />
                </IconButton>
            </Box>
      </Box>
    )
}

const CampaignCard: React.FC<CampaignCardProps> = (props: CampaignCardProps) => {
    const { name, endDate, alreadyRaised, lookingToRaise, description, imageSrc, organizer } = props;

    return (
            <Fade in timeout={700}>
                <Card
                    sx={{
                    minWidth: 800,
                    maxWidth: 1000,
                    boxShadow: '6px 6px 0px 0.5px rgba(0, 0, 255, .2)',
                    border: 1.5,
                    borderRadius: 0.5,
                    marginTop: 3,
                    '&:hover': {
                        transform: "scale(1.02)",
                        boxShadow: 5,
                    },
                }}>
                    <CardActionArea href="https://google.com">
                        <Box display='flex' flexDirection='row' columnGap={4}>
                            <Box display='flex' flex={1} >
                                <Image src={`/${imageSrc}`} alt='Campaign desc' height={250} width={300}/>
                            </Box>
                            <Box display='flex' flexDirection='column' flex={3} sx={{ p: 2, borderLeft: 2, borderColor: '#aaa' }}>
                                <CampaignActionBar date={endDate} organizer={organizer} />
                                <Typography variant="h4">{name}</Typography>
                                <Typography variant="body1">{description}</Typography>
                            </Box>
                        </Box>
                    </CardActionArea>
                </Card>
        </Fade>
    )
};

export default CampaignCard;