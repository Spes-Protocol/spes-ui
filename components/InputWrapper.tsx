import { Box, Typography } from "@mui/material";

const InputWrapper = ({ children, title, titleVariant }) => {
    return (
        <Box display='flex' flexDirection='column' rowGap={1}>
            <Typography letterSpacing={1} variant={titleVariant}>{title}</Typography>
            {children}
        </Box>
    )
};

export default InputWrapper;