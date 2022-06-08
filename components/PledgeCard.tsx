import { Card, CardActionArea } from "@mui/material";

const PledgeCard = () => {
    return (
        <Card
            sx={{
                minHeight: 300,
                minWidth: 400,
                // maxWidth: 600,
                boxShadow: '6px 6px 0px 0.5px rgba(0, 0, 255, .2)',
                border: 1.5,
                borderRadius: 0.5,
                marginBottom: 2,
                '&:hover': {
                    transform: "scale(1.02)",
                    boxShadow: 5,
                },
            }}
        >
            <CardActionArea>

            </CardActionArea>
        </Card>
    )
};

export default PledgeCard;