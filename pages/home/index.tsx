import * as _ from 'lodash';
import { Box, Card, CardActionArea, ImageList, ImageListItem, ImageListItemBar, Toolbar, Typography } from "@mui/material";
import moment from "moment";
import CampaignCard, { CampaignCardProps } from "../../components/CampaignCard";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import Image from 'next/image';

const campaignList: CampaignCardProps[] = [
    {
        name: 'YesWelder Firstess CT2050: Powerful 7-in-1 Welder & Cutter',
        endDate: moment().format('LL'),
        alreadyRaised: 200,
        lookingToRaise: 1000,
        description: 'Introducing the 7-in-1 YesWelder Firstess CT2050. Combining the most powerful welding and cutting tools into an easy-to-use professional machine, the CT2050 is a workhorse, allowing you to cycle through AC/DC TIG, AC/DC Pulse TIG, Stick Welding, Plasma Cutting, and more at the tap of a button.',
        imageSrc: 'engage.png',
        organizer: 'The white house',
    },
    {
        name: 'Luba: An Intelligent, Perimeter Wire Free Robot Lawn Mower',
        endDate: moment().format('LL'),
        alreadyRaised: 20,
        lookingToRaise: 500,
        description: 'Meet Luba, a revolutionary robotic lawnmower that delivers the picture-perfect lawn with a hands-free experience. Thanks to more than 80 patents, Luba features advanced RTK navigation and an interconnected smart system that allows users to program virtual zones in the app schedule.',
        imageSrc: 'secure.png',
        organizer: 'Kickstarter',
    },
    {
        name: 'Charity event raising money for Mars',
        endDate: moment().format('LL'),
        alreadyRaised: 70000,
        lookingToRaise: 100000,
        description: 'nvallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum',
        imageSrc: 'recur.png',
        organizer: 'The white house',
    }
]


const images = [
    {
      thumbnail: {
        uri: "/engage.png",
        name: "animals"
      }
    },
    { thumbnail: { uri: "/engage.png", name: "city" } },
    { thumbnail: { uri: "/engage.png", name: "city" } },
    { thumbnail: { uri: "/engage.png", name: "city" } },
    {
      thumbnail: { uri: "/engage.png", name: "nature" }
    },
    { thumbnail: { uri: "/engage.png", name: "cats" } },
    { thumbnail: { uri: "/engage.png", name: "cats" } },
    { thumbnail: { uri: "/engage.png", name: "cats" } }
  ];

const ActiveProfiles = () => {
    return (<ImageList
        sx={{
            marginY: 2,
            marginX: 5,
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
          gridAutoColumns: "minmax(160px, 1fr)"
        }}
      >
        {images.map((image, index) => (
          <ImageListItem key={index} sx={{ marginX: 1 }}>
              <Card>
              <Image src={image.thumbnail.uri} alt={""} width={100} height={100} />
                  {image.thumbnail.name}
              </Card>
          </ImageListItem>
        ))}
      </ImageList>)
}

const Portfolio = () => {
    return (
        <DashboardLayout currentPageIndex={0}>
            <Box display='flex' flexDirection={'column'} rowGap={2}>
                <Typography variant='h2'>
                    Campaigns around the world
                </Typography>
                <Box>
                    <Typography variant='h5'>
                        Active organizations and profiles around you
                    </Typography>

                    <ActiveProfiles />
                </Box>
                
                <Box>
                    <Typography variant='h5'>
                        Pledge to campaigns that speak to you
                    </Typography>

                    {_.map(campaignList, campaign => {
                        return (<CampaignCard name={campaign.name} endDate={campaign.endDate} alreadyRaised={campaign.alreadyRaised} lookingToRaise={campaign.lookingToRaise} description={campaign.description} imageSrc={campaign.imageSrc} organizer={campaign.organizer} />)
                    })}
                </Box>
            </Box>
        </DashboardLayout>
    );
};

export default Portfolio;