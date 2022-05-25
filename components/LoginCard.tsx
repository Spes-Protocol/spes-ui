import { Box, Button, Card, Fade, TextField, Typography, Divider } from "@mui/material";
import Link from "next/link";

const LoginCard = () => {
    return (
        <Fade in timeout={700}>
                <Card
                sx={{
                minWidth: 360,
                minHeight: 400,
                maxWidth: 1000,
                height: 'auto',
                maxHeight: '10vw',
                // minHeight: 300,
                boxShadow: 3, borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
                // borderRadius:3,
                borderRight:3,
                borderBottom:3,
                p: 2.5,
            }}>
                <Box display='flex' flexDirection='column' rowGap={3} justifyContent='center' alignItems='center' mx="auto" width="100%" marginTop={4}>
                    <Typography variant='h3'>Login / Signup</Typography>
                    <TextField id="outlined-basic" label="Email address" variant="outlined" />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <Box display='flex' flexDirection='row' justifyContent={'center'} alignItems='center' columnGap={3}>
                        <Button size='large' sx={{ textTransform: 'none' }} variant="contained">Signup</Button>
                        <Link href='/home' passHref>
                            <Button size='large' sx={{ textTransform: 'none' }} variant="outlined">Login</Button>
                        </Link>
                    </Box>

                </Box>
                </Card>
        
            </Fade>
    ) 
};

export default LoginCard;