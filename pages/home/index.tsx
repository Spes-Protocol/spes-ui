import { Box, Toolbar, Typography } from "@mui/material";
import moment from "moment";
import CampaignCard from "../../components/CampaignCard";
import DashboardLayout from "../../components/Layouts/DashboardLayout";

const sampleCampaign = {
    name: 'Charity event raising money for Mars',
    endDate: moment().format('LL'),
    lookingToRaiseDollars: 1000,
    description: 'nvallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum',
    imageSrc: 'elon_weed.jpg',
    organizer: 'The white house',
}

const Portfolio = () => {
    return (
        <DashboardLayout currentPageIndex={0}>
            <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8} paddingX={4}>
                <Typography variant='h2'>
                    Campaigns around the world
                </Typography>
                <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
                </Typography>
               {CampaignCard(sampleCampaign)}
               {/* <hr/> */}
               {CampaignCard(sampleCampaign)}
               {/* <hr/> */}
               {CampaignCard(sampleCampaign)}

            </Box>
        </DashboardLayout>
    );
};

export default Portfolio;