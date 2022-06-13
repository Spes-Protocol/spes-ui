import { Box, Card, Paper, Toolbar, Typography } from "@mui/material";
import ContributionChart from "../../../components/ContributionChart";
import MyDashboardLayout from "../../../components/Layouts/DashboardLayout";
import HomepageLayout from "../../../components/Layouts/HomepageLayout";
import PledgeCard from "../../../components/PledgeCard";

const Profile = () => {
    return (
        <HomepageLayout currentPageIndex={1}>
            <MyDashboardLayout currentDashboardPageIndex={2}>
            <Box display='flex' flexDirection={'column'} rowGap={2}>
            <Typography variant='h3'>
                My pledges
            </Typography>
            <Box display='flex' flexDirection='row' flexWrap='wrap' width='100%' columnGap={10}>
                <Box display='flex' flexDirection='column' rowGap={2}>
                    <Typography variant='h5'>
                        Your active pledges 
                    </Typography>
                    <PledgeCard />
                    <PledgeCard />
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
            </MyDashboardLayout>
        </HomepageLayout>
    );
};

export default Profile;