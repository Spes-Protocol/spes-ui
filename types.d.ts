export interface DashboardPageSchema {
    name: string;
    path: string;
    icon: React.ReactElement;
}

interface CampaignPage extends CampaignCardSchema {
    organizerId: string;
    tags: string[];
    wallet: string;
    markdownDescription: string;
    gallery: string[];
    donations: Transaction[];
    timeline: Activity[];
    usage: InternalUsage;
    pledgers: ProfileCard[];
};

export interface CampaignCardSchema {
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

export interface Pledge {
    pledgeId: string;
    ownerId: string;
    campaignId: string;
    amount: number;
    cadence_unit: string;
    cadence_value: number;

}

export interface Activity {
    imageSrc: string;
    createdAt: string;
    location: string;
    caption: string;
}

export interface Transaction {
    transactionId: string;
    ownerId: string;
    amount: number;
    heading: string;
    message: string;
}

export interface InternalUsage {

}

export interface ProfileCard {
    id?: number;
    name: string;
    location: string;
    imgSrc?: string;
}