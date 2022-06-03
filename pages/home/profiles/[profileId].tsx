import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import RouteTree, { RouteNode } from '../../../components/RouteTree';

const Profile = () => {
    const router = useRouter();
    const { profileId } = router.query;
    const routes: RouteNode[] = [
        {
            name: '🏡',
            path: '/home/',
        },
        {
            name: 'This profile',
            path: `/home/profiles/${profileId}`,
        }
    ]
    return (
        <DashboardLayout currentPageIndex={0}>
        <Box display='flex' flexDirection={'column'} rowGap={2}>
            {/* <Typography variant='h3'>
                Campaigns
            </Typography> */}
            <RouteTree routes={routes} />
            <p>Profile Id: {profileId}</p>
            
        </Box>
    </DashboardLayout>
    )
};

export default Profile;