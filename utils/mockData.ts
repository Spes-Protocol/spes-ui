import moment from "moment"

export const donations: Transaction[] = [
    {
        transactionId: '0',
        ownerId: '0',
        amount: 60,
        heading: 'Transfer to Paint the world',
        message: 'Donation by Anonymous'
    },
    {
        transactionId: '1',
        ownerId: '1',
        amount: -50,
        heading: 'Monthly withdrawal by Org',
        message: 'Funds used to support staff'
    },
    {
        transactionId: '2',
        ownerId: '2',
        amount: -42,
        heading: 'Monthly withdrawal by Org',
        message: 'Funds used for booking expenses'
    },
    {
        transactionId: '3',
        ownerId: '3',
        amount: 30,
        heading: 'Weekly contribution',
        message: 'Donation by Celo user 0x3287432vu3bb2n'
    },
    {
        transactionId: '4',
        ownerId: '4',
        amount: -42,
        heading: 'Monthly withdrawal by Org',
        message: 'Funds used for food'
    }
];

export const campaignList: CampaignCardSchema[] = [
    {
        campaignId: '0',
        name: 'YesWelder Firstess CT2050: Powerful 7-in-1 Welder & Cutter',
        postedDate: moment().format('LL'),
        moneyRaised: 200,
        moneyToRaise: 1000,
        description: 'Introducing the 7-in-1 YesWelder Firstess CT2050. Combining the most powerful welding and cutting tools into an easy-to-use professional machine, the CT2050 is a workhorse, allowing you to cycle through AC/DC TIG, AC/DC Pulse TIG, Stick Welding, Plasma Cutting, and more at the tap of a button.',
        mainImage: 'engage.png',
        organizerName: 'The white house',
        active: true,
    },
    {
        campaignId: '1',
        name: 'Red Pine: Dancing with the Ballers',
        postedDate: moment().subtract(3, 'months').format('LL'),
        moneyRaised: 345,
        moneyToRaise: 1000,
        description: 'Help fund a book-and-film collaboration between Copper Canyon Press, a nonprofit publisher dedicated to poetry, and Woody Creek Pictures, a production company focused on “films dedicated to the common good.”',
        mainImage: 'mockProfiles/9.png',
        organizerName: 'Burning mantaray',
        active: true,
    },
    {
        campaignId: '2',
        name: 'Luba: An Intelligent, Perimeter Wire Free Robot Lawn Mower',
        postedDate: moment().subtract(14, 'months').format('LL'),
        moneyRaised: 20,
        moneyToRaise: 500,
        description: 'Meet Luba, a revolutionary robotic lawnmower that delivers the picture-perfect lawn with a hands-free experience. Thanks to more than 80 patents, Luba features advanced RTK navigation and an interconnected smart system that allows users to program virtual zones in the app schedule.',
        mainImage: 'secure.png',
        organizerName: 'Kickstarter',
        active: true,
    },
    {
        campaignId: '4',
        name: 'Charity event raising money for Mars',
        postedDate: moment().format('LL'),
        moneyRaised: 70000,
        moneyToRaise: 100000,
        description: 'nvallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum',
        mainImage: 'recur.png',
        organizerName: 'The white house',
        active: false,
    },
    {
        campaignId: '4',
        name: 'Ohsun: Korean Banchan Deli & Cafe for Seattle',
        postedDate: moment().subtract(22, 'days').format('LL'),
        moneyRaised: 200,
        moneyToRaise: 600,
        description: 'Help Sara Upshaw and team go from pop-up to a Seattle brick-and-mortar in 2022. A space for great food and community.',
        mainImage: 'mockProfiles/2.png',
        organizerName: 'Washington Times',
        active: false,
    }

]

export const profileList: ProfileCardSchema[] = [
    {
        id: 0,
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '0',
    },
    {
        id: 1,
        name: 'St. Jude\'s Cancer Research',
        location: 'San Francisco, CA',
        imgSrc: '1',
    },
    {
        id: 2,
        name: 'UNICEF USA',
        location: 'Minneapolis, MN',
        imgSrc: '2',
    },
    {
        id: 3,
        name: 'Heifer International',
        location: 'Chicago, IL',
        imgSrc: '3',
    },
    {
        id: 4,
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '4',
    },
    {
        id: 5,
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '5',
    },
    {
        id: 6,
        name: 'St. Jude\'s Cancer Research',
        location: 'San Francisco, CA',
        imgSrc: '6',
    },
    {
        id: 7,
        name: 'UNICEF USA',
        location: 'Minneapolis, MN',
        imgSrc: '7',
    },
    {
        id: 8,
        name: 'Heifer International',
        location: 'Chicago, IL',
        imgSrc: '8',
    },
    {
        id: 9,
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '9',
    }
]

export const profileList2: ProfileCardSchema[] = [
    {
        id: 0,
        name: 'Charity Water',
        location: 'New York, NY',
    },
    {
        id: 1,
        name: 'St. Jude\'s Cancer Research',
        location: 'San Francisco, CA',
    },
    {
        id: 2,
        name: 'UNICEF USA',
        location: 'Minneapolis, MN',
        imgSrc: '2',
    },
    {
        id: 3,
        name: 'Heifer International',
        location: 'Chicago, IL',
        imgSrc: '3',
    },
    {
        id: 4,
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '4',
    },
    {
        id: 5,
        name: 'Charity Water',
        location: 'New York, NY',
        imgSrc: '5',
    },
]

export const campaignMainPage: { [index: string]: CampaignPage } = {
    '0': {
        ...(campaignList[0]),
        gallery: ['engage.png', 'bloom/0.png', 'bloom/3.png'],
        organizerId: '',
        tags: ['charity', 'climate', 'earth', 'UN'],
        markdownDescription: '',
        wallet: '',
        donations: [],
        timeline: [],
        usage: {},
        pledgers: profileList2,
    },
    '1': {
        ...campaignList[1],
        gallery: ['mockProfiles/9.png', 'bloom/10.png', 'bloom/13.png'],
        organizerId: '',
        tags: [],
        markdownDescription: '',
        wallet: '',
        donations: [],
        timeline: [],
        usage: {},
        pledgers: [],
    },
    '2': {
        ...campaignList[2],
        gallery: ['secure.png', 'bloom/20.png', 'bloom/23.png'],
        organizerId: '',
        tags: [],
        markdownDescription: '',
        wallet: '',
        donations: [],
        timeline: [],
        usage: {},
        pledgers: [],
    },
    '3': {
        ...campaignList[3],
        gallery: ['recur.png', 'bloom/30.png', 'bloom/33.png'],
        organizerId: '',
        tags: [],
        markdownDescription: '',
        wallet: '',
        donations: [],
        timeline: [],
        usage: {},
        pledgers: [],
    },
    '4': {
        ...campaignList[4],
        gallery: ['mockProfiles/2.png', 'bloom/40.png', 'bloom/17.png'],
        organizerId: '',
        tags: [],
        markdownDescription: '',
        wallet: '',
        donations: [],
        timeline: [],
        usage: {},
        pledgers: [],
    },
}

export const samplePosts: BasePost[] = [
    {
        postId: '0',
        campaignId: '0',
        type: 'TEXT',
        date: moment().format('LL'),
        likes: 354,
        caption: 'A heartfelt thank you to all our pledgers who supported us on our campaign to close the poverty gap in Peru. ❤️🎉'
    },
    {
        postId: '1',
        campaignId: '1',
        type: 'MEDIA',
        date: moment().format('LL'),
        likes: 122,
        caption: 'An update from our recent campaign in Cabarete, DR',
        media: {
            link: '/mariposa.jpg',
            title: 'A fun time outside learning with our teachers',
        }
    },
    {
        postId: '2',
        campaignId: '2',
        type: 'POLL',
        date: moment().format('LL'),
        likes: 840,
        caption: '',
        poll: {
            title: 'What motivates you to support causes in Climate change?',
            options: [
                {
                    name: 'Our planet is in danger and it needs urgent reversal of air pollution.',
                    votes: 90,
                },
                {
                    name: 'To save animals and our nature',
                    votes: 120,
                },
                {
                    name: 'The use of fossil fuels is damaging the environment',
                    votes: 150,
                }
            ]
        }
    },
]