import { Box, Divider, Link, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import * as _ from 'lodash';
import HomepageLayout from '../../../components/Layouts/HomepageLayout';
import ProfilePageCard from '../../../components/ProfilePageCard';
import RouteTree, { RouteNode } from '../../../components/RouteTree';
import { campaignsCreated, campaignsSupported, profileList, samplePosts } from '../../../utils/mockData';
import { shortenString } from '../../../utils/sharedUtils';
import { useState } from 'react';
import Post from '../../../components/Post';
import ProfilePageCampaignsCreated from '../../../components/ProfilePageCampaignsCreated';
import ProfilePageCampaignsSupported from '../../../components/ProfilePageCampaignsSupported';

interface ProfilePageProps {
    profile: ProfilePage;
    errors?: string;
}

type MenuItem = 'TIMELINE' | 'PROFILE' | 'ANALYTICS' | 'CAMPAIGNS' | 'SUPPORTING';


interface ProfilePageMenuSchema {
  name: string;
  menuItem: MenuItem;
}

const profilePageMenuItems: ProfilePageMenuSchema[] = [
  {
    name: 'Timeline',
    menuItem: 'TIMELINE',
  },
  {
    name: 'Profile',
    menuItem: 'PROFILE',
  },
  {
    name: 'Analytics',
    menuItem: 'ANALYTICS',
  },
  {
    name: 'Campaigns',
    menuItem: 'CAMPAIGNS',
  },
  {
    name: 'Supporting',
    menuItem: 'SUPPORTING',
  }
];

const ProfilePageMenu: React.FC<{ selected: MenuItem; setSelected: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ selected, setSelected }) => {
  return (
    <Box display='flex' flexDirection='column'>
      <Box display='flex' flexDirection='row' columnGap={2} alignItems='center' justifyContent='space-between'>
        {_.map(profilePageMenuItems, (menuOption, index) => {
          const current = selected === menuOption.menuItem;
          return (
            <Link key={index} component="button" value={menuOption.menuItem} variant='h4' underline='none' sx={{ py: 0.5, color: current ? 'black' : '#aaa', borderBottom: current ? 3 : 0 }} onClick={(e) => {
              setSelected(e);
              console.log(e);
            }}>
              {menuOption.name}
            </Link>
          )
        })}
      </Box>
      <Divider sx={{ borderBottomWidth: 2 }} />
    </Box>
  )
}

const Timeline = ({ posts }) => { 
  return (
    <Box display='flex' flexDirection='column' rowGap={2}>
      {_.map(posts, (post, idx) => {
        return <Post key={idx} {...post} />
      })}
    </Box>
  ); 
};
const ProfileDescription = () => {  return null;};
const Analytics = () => {  return null;};
const Supporting = () => {  return null;};

const Profile = ({ profile, errors }: ProfilePageProps) => {
  const [ selectedMenuItem, setSelectedMenuItem ] = useState<MenuItem>('TIMELINE');

  const handleMenuItemChange = (event) => {
    setSelectedMenuItem(event.target.value);
  }

  const ProfilePageContent = ({ profile: { profile: ProfilePage } }) => {
    switch (selectedMenuItem) {
      case 'TIMELINE': return <Timeline posts={samplePosts} />;
      case 'PROFILE': return <ProfileDescription />;
      case 'ANALYTICS': return <Analytics />;
      case 'CAMPAIGNS': return <ProfilePageCampaignsCreated campaignsCreated={campaignsCreated} name={profile.name} />;
      case 'SUPPORTING': return <ProfilePageCampaignsSupported campaignsSupported={campaignsSupported} name={profile.name} />;
    }
  }

    const router = useRouter();
    const { profileId } = router.query;
    const routes: RouteNode[] = [
        {
            name: '🏡 Profiles',
            path: '/home/campaigns',
        },
        {
            name: `${shortenString(profile.name)}`,
            path: `/home/profiles/${profileId}`,
        }
    ]
    return (
        <HomepageLayout currentPageIndex={0}>
        <Box display='flex' flexDirection={'column'} rowGap={2} maxWidth={1000}>
            {/* <Typography variant='h3'>
                Profile
            </Typography> */}
            <RouteTree routes={routes} />
            <ProfilePageCard {...profile} />
            <ProfilePageMenu selected={selectedMenuItem} setSelected={handleMenuItemChange} />
            <ProfilePageContent profile={profile} />
        </Box>
    </HomepageLayout>
    )
};

export default Profile;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = profileList.map((profile) => ({
      params: { profileId: profile.id!.toString() },
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
      const id = params?.profileId
      const item = profileList.find((data) => data.id === Number(id))
      // By returning { props: item }, the StaticPropsDetail component
      // will receive `item` as a prop at build time
      return { props: { profile: item } }
    } catch (err: any) {
      return { props: { errors: err.message } }
    }
  }
  