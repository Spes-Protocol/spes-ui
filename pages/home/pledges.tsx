import { Box, Toolbar, Typography } from "@mui/material";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Profile = () => {
    return (
        <DashboardLayout currentPageIndex={1}>
            <Box display='flex' flexDirection={'column'} rowGap={2}>
            <Typography variant='h3'>
                My pledges
            </Typography>
            <Typography variant='h5'>
                Your active pledges 
            </Typography>
            </Box>
        </DashboardLayout>
    );
};

export default Profile;