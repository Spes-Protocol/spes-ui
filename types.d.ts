interface DashboardPageSchema {
    name: string;
    path: string;
    icon: React.ReactElement;
}

interface ProfileCardSchema {
    id?: number;
    name: string;
    location: string;
    imgSrc?: string;
}

interface ProfilePage extends ProfileCardSchema {}

interface CampaignPage extends CampaignCardSchema {
    organizerId: string;
    tags: string[];
    wallet: string;
    markdownDescription: string;
    gallery: string[];
    donations: Transaction[];
    timeline: Activity[];
    usage: InternalUsage;
    pledgers: ProfileCardSchema[];
};

interface CampaignCardSchema {
    campaignId?: string;
    name: string;
    description: string;
    postedDate: string;
    moneyRaised: number;
    moneyToRaise: number;
    organizerName?: string;
    mainImage: string;
    active?: boolean;
}

type Currency = 'USD' | 'REAL' | 'EURO';
type CadenceUnit = 'WEEKLY' | 'MONTHLY' | 'QUARTERLY' | 'YEARLY';
type CadenceType = 'SINGLE' | 'RECURRING' | 'CHALLENGE';

interface Pledge {
    pledgeId: string;
    ownerId: string;
    campaignId: string;
    cadenceType: CadenceType;
    currency: Currency;
    amount: number;
    cadenceUnit?: string;
    cadenceValue?: number;
}

interface Activity {
    imageSrc: string;
    createdAt: string;
    location: string;
    caption: string;
}

interface Transaction {
    transactionId: string;
    ownerId: string;
    amount: number;
    heading: string;
    message: string;
}

interface InternalUsage {

}

type PostType = 'MEDIA' | 'TEXT' | 'POLL';

namespace Media {
    interface Content {
        title: string;
        link: string;    
    }
}

namespace Poll {
    interface Option {
        name: string;
        votes: number;
    }

    interface Content {
        title: string;
        options: Option[];
    }
}

interface BasePost {
    type: PostType;
    postId: string;
    campaignId: string;
    caption?: string;
    media?: Media.Content;
    poll?: Poll.Content;
    likes: number;
    date: string;
}
