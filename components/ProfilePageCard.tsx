import * as _ from 'lodash';
import { Avatar, AvatarGroup, Box, IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { profileList } from "../utils/mockData";
import { stringAvatar } from '../utils/sharedUtils';
import { useState } from 'react';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ShareIcon from '@mui/icons-material/Share';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const CardActions = () => {
    const [ userFollows, setUserFollows ] = useState(false);

    const handleFollowAction = (event: React.MouseEvent<HTMLElement>) => {
      setUserFollows(!userFollows);
      // send API to add to favorites
      event.stopPropagation();
      event.preventDefault();
      console.log('add to favorites')
    }
    
      return (
            <Box display={'flex'} flexDirection='column' rowGap={1} justifyContent='flex-start'>
                <IconButton onClick={(event: React.MouseEvent<HTMLElement>) => handleFollowAction(event)}>
                    {
                        userFollows ? <HowToRegIcon sx={{ width: 30, height: 30 }} /> :  
                        <PersonAddAltIcon sx={{ width: 30, height: 30 }} />
                    }
                </IconButton>
                <IconButton>
                    <ShareIcon sx={{ width: 30, height: 30 }} />
                </IconButton>
            </Box>
      );
  }

const ProfilePageCard: React.FC<ProfileCardSchema> = ({ id, name, location, imgSrc }) => {
    return (
        <Paper elevation={4} sx={{ display: 'flex', flexDirection: 'row', columnGap: 3, p: 3, justifyContent: 'space-between' }}>
            <Box display='flex' flexDirection='row' columnGap={3} alignItems='space-between' >
                <Avatar
                    alt={name}
                    src={`/mockProfiles/${imgSrc}.png`}
                    sx={{ width: 150, height: 150, boxShadow: 4,}}
                    // variant="rounded"
                />
                <Box display={'flex'} flexDirection='column' justifyContent='space-between'>
                    <Box>
                        <Typography variant="h3">{name}</Typography>
                        <Typography variant="h5">{location}</Typography>
                    </Box>
                    <AvatarGroup max={8} total={profileList.length} sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                        {/* expand on hover and link to profile page */}
                        {_.map(profileList, (user, index) => {
                            return (
                                <Avatar key={index} src={user.imgSrc ? `/mockProfiles/${user.imgSrc}.png` : ''} {..._.isNil(user.imgSrc) ? stringAvatar(user.name) : {}} />
                            )
                        })}
                    </AvatarGroup>
                </Box>
            </Box>
            <CardActions />
        </Paper>
    );
};

export default ProfilePageCard;