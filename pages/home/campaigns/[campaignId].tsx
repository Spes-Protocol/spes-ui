import { useRouter } from 'next/router';

const Campaign = () => {
    const router = useRouter();
    const { campaignId } = router.query;
    return (
        <p>Campaign Id: {campaignId}</p>
    )
};

export default Campaign;