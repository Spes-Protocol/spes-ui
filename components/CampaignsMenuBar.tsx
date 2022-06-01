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
import CreateCampaignModal from "./Modals/CreateCampaignModal";

const SearchOptions = () => {
  return (
    <Box display='flex' flexDirection='row' justifyContent={'flex-start'} columnGap={1}>
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search campaigns"
            inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
        </IconButton>
        </Paper>
        <IconButton sx={{ml: 1}} aria-label="sort">
            <SortIcon />
        </IconButton>
        <IconButton aria-label="filter">
            <FilterAltIcon />
        </IconButton>
    </Box>
  );
}

const CampaignMenuBar: React.FC<{ isActive: boolean; handleActiveClick: any; handlePendingClick: any; }> = ({ isActive, handleActiveClick, handlePendingClick }) => {
    // const [isActive, setIsActive] = React.useState(true);

    // const handleActiveClick = () => {
    //     setIsActive(true);
    // }

    // const handlePendingClick = () => {
    //     setIsActive(false);
    //     console.log(isActive)
    // }
    return (
        <Box display={'flex'} flexDirection='column' rowGap={2}>
            <Box display='flex' flexDirection='row' justifyContent={'flex-start'} columnGap={4} alignItems='center' sx={{ my: 2 }}>
                    <Link component="button" variant='h3' underline='none' sx={{ color: isActive ? 'black' : '#aaa', borderBottom: isActive ? 2 : 0 }} onClick={() => { handleActiveClick }}>
                        Active
                    </Link>
                    <Link component="button" variant='h3' underline='none'  sx={{ color: isActive ? '#aaa' : 'black', borderBottom: isActive ? 0 : 2 }} onClick={() => { handlePendingClick }}>
                        Pending
                    </Link>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent={'space-between'}>
                <SearchOptions />
                <CreateCampaignModal />
                {/* <Box>
                    <Button size='large' variant='outlined' color='success' sx={{ border: 2, '&:hover': { border: 2 } }} startIcon={<AddIcon />}>Create</Button>
                </Box> */}
            </Box>
        </Box>
    )
}

export default CampaignMenuBar;