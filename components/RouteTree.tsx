import * as _ from 'lodash';
import { Box, Button } from "@mui/material";
import Link from 'next/link';
import { Link as MUILink } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { ReactNode } from 'react';

export interface RouteNode {
    name: string;
    path: string;
}

type RouteTreeProps = RouteNode[]

const RouteTree: React.FC<{ routes: RouteTreeProps }> = ({ routes }) => {
    return (
        <Box display='flex' flexDirection='row' columnGap={2} alignItems='center'>
            
            {_.map(routes as RouteTreeProps, (node: RouteNode, index) => {
                return (
                    <Box key={index} display='flex' flexDirection='row' columnGap={2} alignItems='center'>
                        {index == 0 ? null : <ArrowForwardIos />}
                        <Link href={node.path} passHref>
                            <Button size='small' color='secondary' variant='outlined' sx={{ letterSpacing: 1, borderRadius: 6, textTransform: 'none' }}>
                                {node.name}
                            </Button>
                        </Link>
                    </Box>
                )
            })}
        </Box>
    );
};

export default RouteTree;