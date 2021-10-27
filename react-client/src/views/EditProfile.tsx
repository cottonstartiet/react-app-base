import { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { apiKeys, apiService } from '../services/apiService';
import { RoutePaths } from '../types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';

export default function EditProfile() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const { isLoading, mutate, isSuccess } = useMutation(apiKeys.updateUserProfile, apiService.updateUserProfile);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        mutate({
            title,
            subtitle
        });
    }

    if (isSuccess) {
        return (
            <Redirect to={RoutePaths.profile} />
        );
    }

    return (
        <>
            <h2>Edit Profile</h2>
            <hr />
            <Box
                sx={{
                    m: 1
                }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            sx={{
                                m: 1
                            }}
                            id="outlined-basic"
                            label="Title"
                            variant="outlined"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                            sx={{
                                m: 1
                            }}
                            id="outlined-basic"
                            label="Subtitle"
                            variant="outlined"
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <Button
                            startIcon={<SaveIcon />}
                            sx={{
                                m: 1
                            }} type='submit' variant="contained">
                            {isLoading ? 'Saving...' : 'Save'}
                        </Button>
                    </div>
                </form>
            </Box>
        </>
    )
}