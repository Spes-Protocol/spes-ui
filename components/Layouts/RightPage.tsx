import { Box } from "@mui/material";

const RightPage = ({ children }) => {
    return (
        <Box display='flex' flexDirection='column' width={'calc(100% - 332px)'} rowGap={2}>
            {children}
        </Box>
    )
};

export default RightPage;