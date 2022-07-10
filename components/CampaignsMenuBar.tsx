import { Box, Button, Link } from "@mui/material";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
import SearchOptions from "./SearchOptions";

const CampaignMenuBar: React.FC<{ toggleActive: boolean; toggleState: any; }> = ({ toggleActive, toggleState }) => {
    // const [isActive, setIsActive] = React.useState(true);

    const handleActiveClick = () => {
        toggleState(true);
    }

    const handlePendingClick = () => {
        toggleState(false);
    }
    return (
        <Box display={'flex'} flexDirection='column' rowGap={2} sx={{ my: 2, }}>
            <Box display='flex' flexDirection='column'>
                <Box display='flex' flexDirection='row' justifyContent={'flex-start'} columnGap={4} alignItems='center'>
                        <Link component="button" variant='h4' underline='none' sx={{ py: 0.5, color: toggleActive ? 'black' : '#aaa', borderBottom: toggleActive ? 3 : 0 }} onClick={handleActiveClick}>
                            Active
                        </Link>
                        <Link component="button" variant='h4' underline='none'  sx={{ py: 0.5, color: toggleActive ? '#aaa' : 'black', borderBottom: toggleActive ? 0 : 3 }} onClick={handlePendingClick}>
                            Pending
                        </Link>
                </Box>
                <Divider sx={{ borderBottomWidth: 2 }} />
            </Box>
            <Box display='flex' flexDirection='row' justifyContent={'space-between'}>
                <SearchOptions />
                {/* <Box>
                    <Button size='large' variant='outlined' color='success' sx={{ border: 2, '&:hover': { border: 2 } }} startIcon={<AddIcon />}>Create</Button>
                </Box> */}
            </Box>
        </Box>
    )
}

export default CampaignMenuBar;