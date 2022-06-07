import { Box, Button, Card, Toolbar, Typography } from "@mui/material";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import HomeWalletConnect from "../../components/HomeWalletConnect";
// import WalletTable from "../../components/Wallet/WalletTable";

const Wallet = () => {
    return (
        <DashboardLayout currentPageIndex={2}>
            <Box display='flex' flexDirection={'column'} rowGap={2}>
                <Box>
                    <Typography variant='h3'>
                        Your wallet
                    </Typography>
                    <Typography display="inline" variant="subtitle1" color={'#6c757d'}>
                        Your wallets live here. Connect to any of your crypto wallets choosing from a wide range of options like Coinbase, Metamask, Valora etc. 
                        You can add or remove any of your crypto wallets from your payment policy at any time. 
                    </Typography>
                    <Box display='flex' justifyContent='center' alignItems={'center'} marginTop={4}>
                    <HomeWalletConnect />
                    </Box>
                    
                </Box>
                {/* <WalletTable /> */}
            </Box>
        </DashboardLayout>
    );
};

export default Wallet;