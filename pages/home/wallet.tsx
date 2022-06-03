import { Box, Button, Card, Toolbar, Typography } from "@mui/material";
import DashboardLayout from "../../components/Layouts/DashboardLayout";
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
                    <Card
                    sx={{
                        height: 500,
                        width: 500,
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 3,
                        boxShadow: 4,
                    }}
                    >
                        <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                            <Typography variant='h3'>Wallet Swap</Typography>
                        </Box>
                        <Button variant='contained' size='large' color='warning' sx={{ textTransform: 'none' }}>Connect Wallet</Button>
                    </Card>
                    </Box>
                    
                </Box>
                {/* <WalletTable /> */}
            </Box>
        </DashboardLayout>
    );
};

export default Wallet;