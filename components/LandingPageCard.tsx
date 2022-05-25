import { Box, Typography } from "@mui/material";
import Image from "next/image";

export interface LandingPageCardProps {
    heading: string;
    description: string;
    image: string;
    reverse?: boolean;
}

const LandingPageCard: React.FC<LandingPageCardProps> = (props) => {
    const { heading, description, image, reverse } = props;
    return (
        <Box display={'flex'} flexDirection={reverse ? 'row-reverse' : 'row'} justifyContent={'center'} alignItems='center' columnGap={4} marginY={2}>
            <Image src={image} height='300' width='300' alt={image}/>
            <Box display={'flex'} flexDirection='column'>
                <Typography variant="h6">{heading}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
        </Box>
    )
}

export default LandingPageCard;