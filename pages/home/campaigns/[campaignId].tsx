import * as _ from 'lodash';
import { Avatar, AvatarGroup, Box, Divider, Link, Typography,  Card, CardActionArea, CardContent, CardMedia, Paper, Fade, TextField, Snackbar, Alert, AlertTitle, Slide, SlideProps } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import HomepageLayout from '../../../components/Layouts/HomepageLayout';
import RouteTree, { RouteNode } from '../../../components/RouteTree';
import { campaignList, campaignMainPage, profileList } from '../../../utils/mockData';
import { CampaignPage } from '../../../types';
import { shortenString, getRandomInt, stringAvatar } from '../../../utils/sharedUtils';
import CampaignGallery from '../../../components/CampaignPage/CampaignGallery';
import CampaignDescription from '../../../components/CampaignPage/CampaignDescription';
import { useEffect, useState } from 'react';
import LeftPage from '../../../components/Layouts/LeftPage';
import RightPage from '../../../components/Layouts/RightPage';
import Image from 'next/image';
// import md from '../../../public/mockCampaignMarkdown.md';
// import ReactMarkdown from 'react-markdown';
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown';
import InputWrapper from '../../../components/InputWrapper';
import Donations from '../../../components/Donations';
import CreatePledgeCard from '../../../components/CreatePledgeCard';

interface CampaignPageProps {
    campaign: CampaignPage;
    errors?: string;
}

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

type MenuItem = 'BIO' | 'TRANSACTIONS' | 'TIMELINE' | 'INSIGHTS' | 'PLEDGE';

interface CampaignPageMenuSchema {
  name: string;
  menuItem: MenuItem;
}

const setStyle = (selected, menuItem) => {
  if (selected === menuItem) {
    return {
      borderBottom: 3, color: menuItem === 'PLEDGE' ? '#736ced' : 'black', textShadow: menuItem === 'PLEDGE' ? '1px 1px 2px pink' : '',
    }
  }
  return { color: menuItem === 'PLEDGE' ? '#736ced' : 'gray', borderBottom: 0, textShadow: menuItem === 'PLEDGE' ? '1px 1px 2px pink' : '' }
}

const campaignPageMenuItems: CampaignPageMenuSchema[] = [
  {
    name: 'Pledge',
    menuItem: 'PLEDGE',
  },
  {
    name: 'Timeline',
    menuItem: 'TIMELINE',
  },
  {
    name: 'Bio',
    menuItem: 'BIO',
  },
  {
    name: 'cTransactions',
    menuItem: 'TRANSACTIONS',
  },
  {
    name: 'Insights',
    menuItem: 'INSIGHTS',
  }
];

const CampaignPageMenu: React.FC<{ organizer: string; selected: MenuItem; setSelected: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ organizer, selected, setSelected }) => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <Box display='flex' flexDirection='column'>
      <Box display='flex' flexDirection='row' columnGap={2} alignItems='center' justifyContent='space-between'>
        {_.map(campaignPageMenuItems, (menuOption, index) => {
          return (
            <Link key={index} component="button" value={menuOption.menuItem} variant='h4' underline='none' sx={{ py: 0.5, ...setStyle(selected, menuOption.menuItem)}} onClick={(e) => {
              setSelected(e)
              console.log(e);

              if (e.target.value == 'PLEDGE') {
                setShowAlert(true);
              }
            }}>
              {menuOption.name}
            </Link>
          )
        })}
      </Box>
      <Snackbar TransitionComponent={TransitionLeft} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} open={showAlert} autoHideDuration={10000} onClose={() => setShowAlert(false)}>
        <Alert onClose={() => setShowAlert(false)} severity='success' sx={{ maxWidth: 500 }}>
        <AlertTitle>A message from {organizer}</AlertTitle>
        <Box display='flex' flexDirection='row' columnGap={2}>
                    <Divider sx={{ borderRightWidth: 5 }} orientation="vertical" variant="middle" flexItem/>
                    <Typography variant='body2' sx={{ color: 'gray' }}>Thank you for donating to our cause. With Spes, we are dedicated to bringing transparency and accountability into our campaigns and organization at large. We look forward to updating you on our progress.</Typography>
                  </Box>
      </Alert>
      </Snackbar>
      <Divider sx={{ borderBottomWidth: 2 }} />
    </Box>
  )
}

const CampaignPageProfile = () => {
  const randomProfileIdx = 6;
  return (
<Card elevation={8} sx={{  minWidth: 300,
                    maxWidth: 350, }}>
                    <CardActionArea sx={{ display: 'flex', flexDirection:'row', justifyContent: 'flex-start', px: 1 }}>
                        <CardMedia>
                            <Image width='70' height='70' src={`/mockProfiles/${randomProfileIdx}.png`} alt={profileList[randomProfileIdx].name} />
                        </CardMedia>
                        <CardContent>
                            <Typography fontWeight={900} flexWrap={'wrap'}  variant='body1'>{profileList[randomProfileIdx].name}</Typography>
                            <Typography variant='subtitle2' sx={{ color: '#888' }}>{profileList[randomProfileIdx].location}</Typography>
                        </CardContent>
                    </CardActionArea>
        </Card>
            // </Paper>
    
  )
}

const Campaign = ({ campaign, errors }: CampaignPageProps) => {
    const [ selectedMenuItem, setSelectedMenuItem ] = useState<MenuItem>('BIO');

    const handleMenuItemChange = (event) => {
      setSelectedMenuItem(event.target.value);
    }

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

    const Bio = () => {
      const [content, setContent] = useState("");

      useEffect(() => {
        fetch("/mockCampaignMarkdown.md")
          .then((res) => res.text())
          .then((text) => setContent(text));
      }, []);
    
      return (
        // <>
          <Paper elevation={8} sx={{ p: 5, display:'flex', flexDirection:'column', rowGap:2  }} >
          <CampaignGallery gallery={campaign.gallery} />
            {/* <div> */}
            <Typography variant='h3'>Our story</Typography>
            <Divider />
              <ReactMarkdown>
                {content}
              </ReactMarkdown>
            {/* </div>  */}
          </Paper>
        // </>
      )
    }

    const Page = () => {
      switch (selectedMenuItem) {
        case 'BIO': return (
          <Bio />
        );
        case 'TIMELINE': return (<>{'timeline'}</>);
        case 'TRANSACTIONS': return (<Donations />);
        case 'INSIGHTS': return (<>{'insights'}</>);
        case 'PLEDGE': return (<CreatePledgeCard />);
      }
    } 

    return (
        <HomepageLayout currentPageIndex={0}>
          <Box display='flex' flexDirection={'column'} rowGap={3}>
            <RouteTree routes={routes} />
            <Box display='flex' flexDirection='row' columnGap={4}>
              <LeftPage>
                <CampaignPageProfile />
                <CampaignDescription page={campaign} setPledgeOnClick={setSelectedMenuItem} />
                <Box display='flex' flexDirection='row' columnGap={2} alignItems='center'>
                      <Typography variant='body2'>
                        Spes Pledgers
                      </Typography>
                      <AvatarGroup max={5} total={campaign.pledgers.length}>
                        {/* expand on hover and link to profile page */}
                        {_.map(campaign.pledgers, (user, index) => {
                            return (
                                <Avatar key={index} src={user.imgSrc ? `/mockProfiles/${user.imgSrc}.png` : ''} {..._.isNil(user.imgSrc) ? stringAvatar(user.name) : {}} />
                            )
                        })}
                      </AvatarGroup>
                </Box>
              </LeftPage>
              <RightPage>
                <CampaignPageMenu organizer={campaign.organizerName} selected={selectedMenuItem} setSelected={handleMenuItemChange} />
                <Page />  
              </RightPage>
            </Box>
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
  