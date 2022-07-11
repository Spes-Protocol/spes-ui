import { ContractKitProvider, useContractKit } from "@celo-tools/use-contractkit";
import { Card, Box, Typography, Button } from "@mui/material";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import '@celo-tools/use-contractkit/lib/styles.css';

const DappWallet: React.FC = () => {
    const { address, connect } = useContractKit();
    return (
        <main>
            <Button fullWidth onClick={() => connect().catch(e => console.log(e))} size='large' variant='contained' color='primary' sx={{ marginTop: 2, letterSpacing: 1.5 }} startIcon={<AccountBalanceWalletIcon />}>
                Connect to Valora
            </Button>
        </main>
    )
}

const CampaignWalletConnect: React.FC = () => {

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

export default CampaignWalletConnect;
