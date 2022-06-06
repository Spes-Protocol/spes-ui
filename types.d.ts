export interface CampaignPage {
    campaignId: string;
    name: string;
    description: string;
    money_raised: number;
    money_to_raise: number;
    ownerId: string;
    wallet: string;
    tags: string[];
    donations: Transaction[];
    timeline: Activity[];
    usage: InternalUsage;
    pledgers: Pledge[];
};

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
    amount: string;
    message: string;
}

export interface InternalUsage {

}

export interface ProfilePage {
    id?: number;
    name: string;
    location: string;
    imgSrc: string;
}