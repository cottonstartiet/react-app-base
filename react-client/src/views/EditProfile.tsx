import { FormEvent, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { RoutePaths } from '../types';
import { Button } from 'react-bootstrap';

export default function EditProfile() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
    }

    // if (apiStatus.status === 'success') {
    //     return (
    //         <div>
    //             Profile Saved Successfully.
    //             <Link to={RoutePaths.profile}>View Profile</Link>
    //         </div>
    //     )
    // }

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
                    <Button variant="primary" type='submit' disabled={false}>
                        {'Save'}
                    </Button>
                </div>
            </form>
        </>
    )
}