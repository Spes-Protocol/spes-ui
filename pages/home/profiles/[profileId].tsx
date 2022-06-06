import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import DashboardLayout from '../../../components/Layouts/DashboardLayout';
import RouteTree, { RouteNode } from '../../../components/RouteTree';
import { profileList } from '../../../mockData';
import { ProfilePage } from '../../../types';
import { shortenString } from '../../../utils/sharedUtils';

interface ProfilePageProps {
    profile: ProfilePage;
    errors?: string;
}

const Profile = ({ profile, errors }: ProfilePageProps) => {
    const router = useRouter();
    const { profileId } = router.query;
    const routes: RouteNode[] = [
        {
            name: '🏡',
            path: '/home/',
        },
        {
            name: `${shortenString(profile.name)}`,
            path: `/home/profiles/${profileId}`,
        }
    ]
    return (
        <DashboardLayout currentPageIndex={0}>
        <Box display='flex' flexDirection={'column'} rowGap={2}>
            <Typography variant='h3'>
                Profile
            </Typography>
            <RouteTree routes={routes} />
            <p>Profile Id: {JSON.stringify(profile)}</p>
            
        </Box>
    </DashboardLayout>
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
  