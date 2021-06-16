import React from 'react';

export default function EditProfile() {
    return (
        <>
            <h2>Update Profile</h2>
            <hr />
            <form>
                <div>
                    <input type="text" placeholder='Name' id='name' readOnly disabled />
                </div>
                <div>
                    <input type="text" placeholder='Title' id='title' />
                </div>
                <div>
                    <input type="text" placeholder='Subtitle' id='subtitle' />
                </div>
                <div>
                    <button>
                        Update
                    </button>
                </div>
            </form>
        </>
    )
}