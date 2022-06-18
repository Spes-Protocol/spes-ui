import { Box, IconButton, Paper, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import RemoveIcon from '@mui/icons-material/Remove';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Router = ({ pledge, setRoute }) => {
    return (
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
        <IconButton>
            <HomeIcon />
        </IconButton>
        <RemoveIcon />
        <IconButton>
            <AddShoppingCartIcon />
        </IconButton>
    </Box>

    )
}

const PledgeCard = () => {
    return (
        <Paper
                 sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 3,
                    boxShadow: 4,
                    minWidth: 250,
                    maxWidth: 300,
                }}
            >
            <Router pledge={true} setRoute={() => {}} />
            <Box display='flex' flexDirection='column' justifyContent='flex-start'>
                <Typography variant='h4'>Set pledge terms</Typography>

            </Box>
            
        </Paper>
    )
};

export default PledgeCard;