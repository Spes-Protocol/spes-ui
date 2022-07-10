import * as _ from 'lodash';
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

type PostProps = BasePost;
type MediaContentProps = Media.Content;
type PollContentProps = Poll.Content;

const MediaContent: React.FC<MediaContentProps> = ({ link, title }) => {
    return (
        <Box width={650} height={400}>
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image
                    src={link}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
        </Box>
    )
} 

const PollContent: React.FC<PollContentProps> = ({ title, options }) => {
    return (
        <Box>
            <Typography variant='subtitle1'>{title}</Typography>
            {_.map(options, (option, idx) => {
                return (
                    <Box key={idx}>
                        {option.name} {option.votes}
                    </Box>
                )
            })}
        </Box>
    )
}

const Post: React.FC<PostProps> = ({ type, postId, campaignId, caption, media, poll, likes, date }) => {
    const PostContent = () => {
        switch (type) {
            case 'MEDIA': return <MediaContent link={media.link} title={media.title} />
            case 'POLL': return <PollContent title={poll.title} options={poll.options} />
            case 'TEXT':
            default:
                return null;
        }
    }

    return (
        <Paper elevation={4} sx={{ p: 2, width: 700 }}>
            <Typography variant='body1'>{"Post shared on campaign ____________"}</Typography>
            {caption ? <Typography variant='caption'>{caption}</Typography> : null}
            <PostContent />
        </Paper>
    )
};

export default Post;