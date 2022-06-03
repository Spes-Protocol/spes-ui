import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import RouteTree, { RouteNode } from '../../../components/RouteTree';

const Campaign = () => {
    const router = useRouter();
    const { campaignId } = router.query;
    const routes: RouteNode[] = [
        {
            name: '🏡',
            path: '/home/',
        },
        {
            name: 'This campaign',
            path: `/home/campaigns/${campaignId}`,
        }
    ]
    return (
        <DashboardLayout currentPageIndex={0}>
        <Box display='flex' flexDirection={'column'} rowGap={2}>
            {/* <Typography variant='h3'>
                Campaigns
            </Typography> */}
            <RouteTree routes={routes} />
            <p>Campaign Id: {campaignId}</p>
            
        </Box>
    </DashboardLayout>
    )
};

export default Campaign;