import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Fade, Paper, Typography } from "@mui/material";
import Image from 'next/image';
import Link from 'next/link';

type ProfileCardProps = ProfileCardSchema;

export const ProfileCard: React.FC<ProfileCardProps> = ({ id, name, location, imgSrc }) => {
    return (
        <Fade in timeout={500}>
            <Card elevation={4} sx={{ minWidth: "200px", margin: 2 }}>
            <Link href={{
              pathname: '/home/profiles/[profileId]',
              query: { profileId: id },
            }} passHref>                    
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
                </Link>
            </Card> 
        </Fade>
    )
}


