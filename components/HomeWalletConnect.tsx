import { ContractKitProvider, useContractKit } from "@celo-tools/use-contractkit";
import { Card, Box, Typography, Button } from "@mui/material";
import '@celo-tools/use-contractkit/lib/styles.css';

const DappWallet: React.FC = () => {
    const { address, connect } = useContractKit();
    return (
        <main>
            <Card
            sx={{
                // height: 500,
                width: 500,
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: 3,
                boxShadow: 4,
                rowGap: 2,
            }}
            >
                <Box display='flex' flexDirection='row' justifyContent='flex-start'>
                    <Typography variant='h3'>Wallet Swap</Typography>
                </Box>
                <Typography variant='body2'>Your wallet details will appear here after you connect to your Celo wallet.</Typography>
                <Button onClick={() => connect().catch(e => console.log(e))} variant='contained' size='large' color='warning' sx={{ letterSpacing: 1.5 }}>Connect Wallet</Button>
            </Card>
        </main>
    )
}

const HomeWalletConnect: React.FC = () => {

    return (
        <ContractKitProvider
      dapp={{
          icon: '',
          name: "My awesome dApp",
          description: "My awesome description",
          url: "https://example.com",
        }}
    >
            <DappWallet />
        </ContractKitProvider>
    )
};

export default HomeWalletConnect;
