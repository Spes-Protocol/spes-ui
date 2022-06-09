import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import RouteTree, { RouteNode } from '../../../components/RouteTree';
import { campaignList } from '../../../utils/mockData';
import { CampaignPage } from '../../../types';
import { shortenString } from '../../../utils/sharedUtils';
import CampaignGallery from '../../../components/CampaignPage/CampaignGallery';
import CampaignDescription from '../../../components/CampaignPage/CampaignDescription';

interface CampaignPageProps {
    campaign: CampaignPage;
    errors?: string;
}

const Campaign = ({ campaign, errors }: CampaignPageProps) => {
    const router = useRouter();
    const { campaignId } = router.query;
    const routes: RouteNode[] = [
        {
            name: '🏡  Campaigns',
            path: '/home/',
        },
        {
            name: shortenString(campaign.name),
            path: `/home/campaigns/${campaignId}`,
        }
    ]
    return (
        <DashboardLayout currentPageIndex={0}>
        <Box display='flex' flexDirection={'column'} rowGap={2}>
            <Typography variant='h3'>
                Campaign
            </Typography>
            <RouteTree routes={routes} />
            <Box>
              <CampaignGallery />
              <CampaignDescription campaignDescription={campaign} />
            </Box>

            <p>Campaign Id: {JSON.stringify(campaign)}</p>
        </Box>
    </DashboardLayout>
    )
};

export default Campaign;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = campaignList.map((campaign) => ({
      params: { campaignId: campaign.id!.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  
  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
      const id = params?.campaignId
      const item = campaignList.find((data) => data.id === Number(id))
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      return { props: { campaign: item } }
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }
  