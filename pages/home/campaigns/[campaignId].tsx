import * as _ from 'lodash';
import { Avatar, AvatarGroup, Box, Divider, Link as MuiLink, Typography,  Card, CardActionArea, CardContent, CardMedia, Paper, Fade, TextField, Snackbar, Alert, AlertTitle, Slide, SlideProps, createTheme, IconButton, Drawer, Button } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import HomepageLayout from '../../../components/Layouts/HomepageLayout';
import RouteTree, { RouteNode } from '../../../components/RouteTree';
import { campaignList, campaignMainPage, profileList, profileList2 } from '../../../utils/mockData';
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
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import { ThemeProvider } from '@mui/styles';
import LastPageRoundedIcon from '@mui/icons-material/LastPageRounded';
import OpenInFullRoundedIcon from '@mui/icons-material/OpenInFullRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';

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
      borderBottom: 3, color: 'black',
    }
  }
  return { color: 'gray', borderBottom: 3, borderColor: 'transparent' }
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
            <MuiLink key={index} component="button" value={menuOption.menuItem} variant='h4' underline='none' sx={{ py: 0.5, ...setStyle(selected, menuOption.menuItem)}} onClick={(e) => {
              setSelected(e)
              console.log(e);

              if (e.target.value == 'PLEDGE') {
                setShowAlert(true);
              }
            }}>
              {menuOption.name}
            </MuiLink>
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

const CampaignPageProfile = ({ profile, showFollowButton }: { profile: ProfileCardSchema; showFollowButton: boolean; }) => {
  const [ userFollows, setUserFollows ] = useState(false);

  const handleFollowAction = (event: React.MouseEvent<HTMLElement>) => {
    setUserFollows(!userFollows);
    // send API to add to favorites
    event.stopPropagation();
    event.preventDefault();
    console.log('add to favorites')
}

  return (
    <Link href={{
      pathname: '/home/profiles/[profileId]',
      query: { profileId: profile.id },
    }} passHref>   
      <Card elevation={4}>
                    <CardActionArea sx={{ display: 'flex', flexDirection:'row', justifyContent: 'flex-start', px: 1 }}>
                        <CardMedia>
                            <Image width='70' height='70' src={`/mockProfiles/${profile.id}.png`} alt={profile.name} />
                        </CardMedia>
                        <CardContent sx={{ display: 'flex', flexDirection: 'row', p: 2, columnGap: 1 }}>
                          <Box display='flex' flexDirection='column'>
                            <Typography fontWeight={900} flexWrap={'wrap'}  variant='body1'>{profile.name}</Typography>
                            <Typography variant='subtitle2' sx={{ color: '#888' }}>{profile.location}</Typography>
                          </Box>
                          <Box>
                          {showFollowButton ? <IconButton onClick={(event: React.MouseEvent<HTMLElement>) => handleFollowAction(event)}>
                            {
                                userFollows ? <HowToRegRoundedIcon fontSize='large' /> :  
                                <PersonAddAlt1RoundedIcon fontSize='large' />
                            }
                          </IconButton> : null}
                          </Box>
                        </CardContent>
                    </CardActionArea>
        </Card>  
    </Link>
  )
}

const Campaign = ({ campaign, errors }: CampaignPageProps) => {
    const [ selectedMenuItem, setSelectedMenuItem ] = useState<MenuItem>('BIO');
    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

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
          <Paper elevation={4} sx={{ p: 5, display:'flex', flexDirection:'column', rowGap:2  }} >
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

    const PledgersDrawer: React.FC<{ pledgers: ProfileCardSchema[] }> = ({ pledgers }) => {
      // const toggleDrawer = () => {
      //   setRightDrawerOpen()
      // }
    
      return (
    <Drawer
          anchor={'right'}
          variant="temporary"
          open={rightDrawerOpen}
          // onOpen={() => setRightDrawerOpen(true)}
          onClose={() => setRightDrawerOpen(false)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Box
          sx={{ width: 400, p:2, display:'flex', flexDirection: 'column', rowGap: 2 }}
          // role="presentation"
          // onClick={toggleDrawer(anchor, false)}
          // onKeyDown={toggleDrawer(anchor, false)}
        >
          <Box flex={1} display='flex' flexDirection='row' justifyContent='space-between' alignItems={'center'} >
            <Typography variant='h4' color={'gray'}>Spes Pledgers</Typography>
            <IconButton onClick={() => setRightDrawerOpen(false)}><LastPageRoundedIcon fontSize='large' /></IconButton>
          </Box>
          <Box display='flex' flexDirection='column' rowGap={1} marginX={2}>
{_.map([...profileList, ...profileList2], (profile, index) => {
              return (
                <CampaignPageProfile key={index} profile={profile} showFollowButton={false}/>
              )
            })}
          </Box>
          
        </Box>
        </Drawer>
      )
    }

    const Pledgers = () => {
      return (
        <Card elevation={4} sx={{ display:'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end', flexWrap: 'wrap', rowGap:1, p:3 }}>
                    {/* <CardActionArea onClick={() => setRightDrawerOpen(true)} sx={{ display:'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end', flexWrap: 'wrap', rowGap:1, p:3 }}> */}
                      <Box flex={1} display='flex' flexDirection='row' justifyContent='space-between'>
                      <Typography variant='h4'>
                        Spes Pledgers
                      </Typography>
                      <IconButton  onClick={() => setRightDrawerOpen(true)} >
                      <OpenInFullRoundedIcon />
                      </IconButton>
                      </Box>
                        <AvatarGroup max={5} total={campaign.pledgers.length}>
                            {/* expand on hover and link to profile page */}
                            {_.map(campaign.pledgers, (user, index) => {
                                return (

                                    <Avatar key={index} src={user.imgSrc ? `/mockProfiles/${user.imgSrc}.png` : ''} {..._.isNil(user.imgSrc) ? stringAvatar(user.name) : {}} />                     

                                )
                            })}
                        </AvatarGroup>
                        {/* </Box> */}
                        {/* </CardActionArea> */}
                    </Card>
        // <Box display='flex' flexDirection='row' columnGap={2} alignItems='center'>
                      
        //         </Box>
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

    const randomProfileIdx = 6;

    return (
        <HomepageLayout currentPageIndex={0}>
          <Box display='flex' flexDirection={'column'} rowGap={3}>
            <RouteTree routes={routes} />
            <Box display='flex' flexDirection='row' columnGap={4}>
              <LeftPage>
                <CampaignPageProfile profile={profileList[randomProfileIdx]} showFollowButton={true} />
                <CampaignDescription page={campaign} setPledgeOnClick={setSelectedMenuItem} />
                <Pledgers />
              </LeftPage>
              <RightPage>
                <CampaignPageMenu organizer={campaign.organizerName} selected={selectedMenuItem} setSelected={handleMenuItemChange} />
                <Page />  
              </RightPage>
              <PledgersDrawer pledgers={[]} />
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
  