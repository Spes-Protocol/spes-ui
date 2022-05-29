import { Box, Button, Card, Fade, TextField, Typography, Divider } from "@mui/material";
import Link from "next/link";
import { supabase } from '../utils/supabaseClient'
import { useState } from "react";

const LoginCard = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [emailSent, setEmailSent] = useState(false)
    const [magicLinkError, setMagicLinkError] = useState('')
  
    const handleLogin = async (email: string) => {
      try {
        setEmailSent(false)
        setLoading(true)
        const { error } = await supabase.auth.signIn({ email })
        if (error) throw error
        setEmailSent(true)
        setMagicLinkError('')
      } catch (error: any) {
        setEmailSent(false)
        setMagicLinkError(error.error_description || error.message)
      } finally {
        setLoading(false)
      }
    }
    
    return (
        <Fade in timeout={700}>
                <Card
                sx={{
                minWidth: 360,
                minHeight: 400,
                maxWidth: 1000,
                height: 'auto',
                maxHeight: '10vw',
                // minHeight: 300,
                boxShadow: 3, borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
                // borderRadius:3,
                borderRight:3,
                borderBottom:3,
                p: 2.5,
            }}>
                <Box display='flex' flexDirection='column' rowGap={3} justifyContent='center' alignItems='center' mx="auto" width="100%" marginTop={4}>
                    <Typography variant='h3'>Login / Signup</Typography>
                    <Typography variant='body1'>
                        Sign in via magic link with your email below
                    </Typography>
                    <TextField id="outlined-basic" label="Email address" variant="outlined" onChange={(e) => setEmail(e.target.value)}
 />
                    <Box display='flex' flexDirection='row' justifyContent={'center'} alignItems='center' columnGap={3} 
                        onClick={(e) => {
                            e.preventDefault()
                            handleLogin(email)
                        }}>
                        <Button disabled={loading} size='large' sx={{ textTransform: 'none' }} variant="outlined" color="error">{loading ? 'Loading' : 'Send magic link'}</Button>
                    </Box>
                    {emailSent ? <Typography variant='body2' sx={{ color: '#ff70a6', fontWeight: 700 }}>Check your email for the login link! 🎉</Typography> : undefined}
                    {magicLinkError ? <Typography variant='subtitle2' color='red'>{magicLinkError}</Typography> : undefined}
                </Box>
                </Card>
        
            </Fade>
    ) 
};

export default LoginCard;