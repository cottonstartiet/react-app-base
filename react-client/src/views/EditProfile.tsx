import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { updateUserProfile } from '../store/updateProfileStore';
import { RoutePaths } from '../types';
import { Button } from 'react-bootstrap';

export default function EditProfile() {
    const appDispatch = useAppDispatch();
    const { apiStatus } = useAppSelector(state => state.updateProfile)
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        appDispatch(updateUserProfile({
            title,
            subtitle
        }))
    }

    const isUpdating = apiStatus.status === 'inprogress';

    if (apiStatus.status === 'success') {
        return (
            <div>
                Profile Saved Successfully.
                <Link to={RoutePaths.profile}>View Profile</Link>
            </div>
        )
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
                    <Button variant="primary" type='submit' disabled={apiStatus.status === 'inprogress'}>
                        {isUpdating ? 'Saving...' : 'Save'}
                    </Button>
                </div>
            </form>
        </>
    )
}