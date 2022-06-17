import * as _ from 'lodash';
import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import HomepageLayout from '../../../components/Layouts/HomepageLayout';
import RouteTree, { RouteNode } from '../../../components/RouteTree';
import { campaignList, campaignMainPage } from '../../../utils/mockData';
import { CampaignPage } from '../../../types';
import { shortenString } from '../../../utils/sharedUtils';
import CampaignGallery from '../../../components/CampaignPage/CampaignGallery';
import CampaignDescription from '../../../components/CampaignPage/CampaignDescription';
import PledgeCard from '../../../components/PledgeCard';

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
            path: '/home/campaigns',
        },
        {
            name: shortenString(campaign.name),
            path: `/home/campaigns/${campaignId}`,
        }
    ]
    return (
        <HomepageLayout currentPageIndex={0}>
        <Box display='flex' flexDirection={'column'} rowGap={2}>
            <Typography variant='h3'>
                Campaign
            </Typography>
            <RouteTree routes={routes} />
            <Box display='flex' flexDirection='row' columnGap={3}>
              <CampaignGallery />
              <CampaignDescription description={campaign} />
              {/* <PledgeCard /> */}
            </Box>

            <p>Campaign Id: {JSON.stringify(campaign)}</p>
        </Box>
    </HomepageLayout>
    )
};

export default Campaign;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = campaignList.map((campaign) => ({
      params: { campaignId: campaign.campaignId!.toString() },
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
      const item = campaignMainPage[_.isArray(id) ? id[0] : id]
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      return { props: { campaign: item } }
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }
  