import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const Contact = () => {
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const subscribe=()=>{
        setLoading(true)
        fetch('/api/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setMessage(data);
        setLoading(false)
    })
    .catch(error => {
        setMessage('Error subscribing. Please try again later.');
        setLoading(false)
    });

    }
    return (
        <>
            <div style={{ padding: '40px' }}>
                <Typography variant="h5" textAlign={'center'}>
                    {'Subscribe to Our Newsletters'}
                </Typography>
                {message.message && (
                    <Typography variant="h6" mt={3} textAlign={'center'} className={message?.success ? 'success':'error'} >
                    {message.message}
                </Typography>
                )}
                {!message.message && (
                    <Grid container spacing={2} mt={2} mb={2} alignItems="center" justifyContent="center">
                        <Grid item xs={12} sm={6} md={6} lg={10} className="center-grid-item">
                            <TextField
                                type="email"
                                label="Enter your email"
                                variant="outlined"
                                onChange={(e)=>setEmail(e.target.value)}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={2} className="center-grid-item">
                            <LoadingButton
                                loading={loading}
                                loadingPosition="start"
                                startIcon={<SaveIcon/>}
                                variant="outlined"
                                fullWidth
                                onClick={subscribe}
                            >
                                Subscribe

                            </LoadingButton>
                        </Grid>
                    </Grid>
                )}
                    

            </div>
        </>
    )
}
export default Contact;