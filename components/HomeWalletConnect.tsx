import { ContractKitProvider, useContractKit } from "@celo-tools/use-contractkit";
import { Card, Box, Typography, Button, IconButton } from "@mui/material";
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import '@celo-tools/use-contractkit/lib/styles.css';

const ButtonColor = '#fdc5f5';

const DappWallet: React.FC<{ isMobile: boolean; }> = ({ isMobile }) => {
    const { address, connect } = useContractKit();
    if (isMobile) {
        return (
            <Box borderRadius={3} border={1} borderColor={ButtonColor}>
              <IconButton onClick={() => connect().catch(e => console.log(e))}>
              <AccountBalanceWalletRoundedIcon sx={{color:ButtonColor}} />
              </IconButton>
            </Box>
        )
    }
    return (
        <main>
            <Button onClick={() => connect().catch(e => console.log(e))} sx={{ textTransform: 'none' }}>
                    <Box display={'flex'} flexDirection='row' alignItems={'center'} justifyContent='center' paddingX={2} border={1} columnGap={1} borderRadius={3} color={ButtonColor} width='244px'>
                      <AccountBalanceWalletRoundedIcon sx={{color:ButtonColor}} />
                          <Typography variant='h4'>
                              Connect wallet
                          </Typography>
                      </Box>
                </Button>

        </main>
    )
}

const HomeWalletConnect: React.FC<{ isMobile: boolean; }> = ({ isMobile }) => {

    return (
        <ContractKitProvider
      dapp={{
          icon: '',
          name: "My awesome dApp",
          description: "My awesome description",
          url: "https://example.com",
        }}
    >
            <DappWallet isMobile={isMobile} />
        </ContractKitProvider>
    )
};

export default HomeWalletConnect;
