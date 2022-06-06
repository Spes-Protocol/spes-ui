import { Box, Button, Card, Toolbar, Typography } from "@mui/material";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
import WalletCard from "../../components/WalletCard";
// import WalletTable from "../../components/Wallet/WalletTable";

const Wallet = () => {
    return (
        <DashboardLayout currentPageIndex={2}>
            <Box maxWidth="1000px" mx="auto" width="100%" marginTop={8} paddingX={4} display='flex' flexDirection='column' rowGap={3}>
                <Box>
                    <Typography variant='h4'>
                        Your wallet
                    </Typography>
                    <Typography display="inline" variant="subtitle1" color={'#6c757d'}>
                        Your wallets live here. Connect to any of your crypto wallets choosing from a wide range of options like Coinbase, Metamask, Valora etc. 
                        You can add or remove any of your crypto wallets from your payment policy at any time. 
                    </Typography>
                    <Box display='flex' justifyContent='center' alignItems={'center'} marginTop={4}>
                    <WalletCard />
                    </Box>
                    
                </Box>
                {/* <WalletTable /> */}
            </Box>
        </DashboardLayout>
    );
};

export default Wallet;