import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Fade, Paper, Typography } from "@mui/material";
import Image from 'next/Image';

export interface ProfileCardProps {
    name: string;
    location: string;
    imgSrc: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, location, imgSrc }) => {
    return (
        <Fade in timeout={500}>
            <Box sx={{ minWidth: "200px", margin: 2 }}>
                <Card >
                    <CardActionArea>
                        <Box display='flex' flexDirection={'column'} justifyContent='center' sx={{ height: "100%", minWidth: 200, minHeight: 200 }}>
                            <Image src={`/mockProfiles/${imgSrc}.png`} alt={name} width={100} height={100}  />
                            <Box sx={{ paddingX: 1, }}>
                                <Typography variant='body2' sx={{ fontWeight: 800 }}>
                                    {name}
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: '#888' }}>
                                    {location}
                                </Typography>
                            </Box>
                        </Box>
                    </CardActionArea>
                </Card> 
            </Box>
        </Fade>
    )
}


