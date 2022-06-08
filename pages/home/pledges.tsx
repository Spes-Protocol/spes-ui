import { Box, Toolbar, Typography } from "@mui/material";
import ContributionChart from "../../components/ContributionChart";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import PledgeCard from "../../components/PledgeCard";

const Profile = () => {
    return (
        <DashboardLayout currentPageIndex={1}>
            <Box display='flex' flexDirection={'column'} rowGap={2}>
            <Typography variant='h3'>
                My pledges
            </Typography>
            <Box display='flex' flexDirection='row' flexWrap='wrap' width='100%'>
                <Box display='flex' flexDirection='column' rowGap={2}>
                    <Typography variant='h5'>
                        Your active pledges 
                    </Typography>
                    <PledgeCard />
                    <PledgeCard />
                </Box>
                <Box display='flex' flexDirection='column' rowGap={2}>
                    <Typography variant='h5'>
                        Your monthly contribution 
                    </Typography>
                    <ContributionChart />
                </Box>
            </Box>

            </Box>
        </DashboardLayout>
    );
};

export default Profile;