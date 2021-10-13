import { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { apiKeys, apiService } from '../services/apiService';
import { RoutePaths } from '../types';

export default function EditProfile() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const { isLoading, data, error, mutate } = useMutation(apiKeys.updateUserProfile, apiService.updateUserProfile);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        mutate({
            title,
            subtitle
        });
    }

    if (data && !error) {
        return (
            <Redirect to={RoutePaths.profile} />
        );
    }

    return (
        <>
            <h2>Edit Profile</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder='Title' id='title' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder='Subtitle' id='subtitle' onChange={(e) => setSubtitle(e.target.value)} />
                </div>
                <div>
                    <button type='submit' disabled={false}>
                        {isLoading ? 'Saving...' : 'Save'}
                    </button>
                </div>
            </form>
        </>
    )
}