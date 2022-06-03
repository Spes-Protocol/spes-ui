import { useRouter } from 'next/router';

const Profile = () => {
    const router = useRouter();
    const { profileId } = router.query;
    return (
        <p>Profile Id: {profileId}</p>
    )
};

export default Profile;