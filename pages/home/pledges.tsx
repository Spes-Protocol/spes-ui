import { Box, Toolbar, Typography } from "@mui/material";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const Profile = () => {
    return (
        <DashboardLayout currentPageIndex={1}>
            <Typography variant='h5'>
                My donations
            </Typography>
 
        </DashboardLayout>
    );
};

export default Profile;