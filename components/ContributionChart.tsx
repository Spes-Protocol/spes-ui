import { Paper } from "@mui/material";
import LegendExample from "./DataVisx.tsx/Legend";
import Example from "./DataVisx.tsx/PieChart";
import HomeWalletConnect from "./HomeWalletConnect";

const ContributionChart = () => {
    return (
        // <HomeWalletConnect />
        <Paper
            sx={{
                minWidth: 500,
                minHeight: 400,
                boxShadow: 4,
            }}
        >
            <Example width={500} height={400} />
            <LegendExample events />
        </Paper>
    );
}

export default ContributionChart;