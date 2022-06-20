import * as _ from 'lodash';
import { Avatar, Divider, Box, Paper, Fade, Typography } from "@mui/material";
import { round, stringAvatar } from '../utils/sharedUtils';
import { donations } from '../utils/mockData';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import { Transaction } from '../types';
import palette from '../themes/palette';

const DonationFullCard = () => {

}

const Icon = (amount) => {
    return (
        <>
            {amount > 0 ? <Avatar sx={{ width: 50, height: 50, bgcolor: palette.success.lighter }}><ArrowUpwardOutlinedIcon  color='success' /></Avatar> : 
            <Avatar sx={{ width: 50, height: 50,  bgcolor: palette.error.lighter }}><ArrowDownwardOutlinedIcon color='error' /></Avatar>}
        </>
    )
}

const DonationListCard = (donation) => {
    const { amount, heading, message } = donation;
    return (
        <Box sx={{ display: 'flex',
        flexDirection: 'column', rowGap: 2 }}>
            <Box
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    columnGap: 2,
                }}
            >
                {/* <Avatar {...stringAvatar('Akashdeep Deb')}></Avatar> */}
                <Box display='flex' flexDirection='row' columnGap={2} alignItems='center'>
                    {Icon(amount)}
                    <Box display='flex' flexDirection='column'>
                        <Typography variant='h6' letterSpacing={1}>
                            {heading}
                        </Typography>
                        <Typography sx={{ color: 'gray'}} >
                            {message}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant='h4' color={amount > 0 ? palette.success.main : palette.error.main }>
                    ${amount > 0 ? '+' : ''}{round(amount, 2)}
                </Typography>
            </Box>
        <Divider />
        </Box>
    )
}

const Donations = () => {
    return (
        <Paper
            elevation={8}
            sx={{
                display:'flex',
                flexDirection:'column',
                rowGap:1,
                p: 2,
            }}
            
        >
            {_.map(donations, (d, idx) => {
                return (
                    <Fade in timeout={700 + idx * 200} key={idx}>
                        {DonationListCard(d)}
                    </Fade>
                )
            })}
        </Paper>
    )
};

export default Donations;