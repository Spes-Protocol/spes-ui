import { Box, Card, Paper, Toolbar, Typography } from "@mui/material";
import ContributionChart from "../../../components/ContributionChart";
import MyDashboardLayout from "../../../components/Layouts/DashboardLayout";
import HomepageLayout from "../../../components/Layouts/HomepageLayout";
import PledgeCard from "../../../components/PledgeCard";

const Profile = () => {
    return (
        <HomepageLayout currentPageIndex={1}>
            <MyDashboardLayout currentDashboardPageIndex={0}>
                profile
            </MyDashboardLayout>
        </HomepageLayout>
    );
};

export default Profile;