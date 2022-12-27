import React, { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const FirstSection = () => {
    const { user } = useContext(AuthContext)
    const fullName = user?.displayName
    const name = fullName?.split(' ')[0]
    const [pic, setPic] = useState(null)
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const post = form.post.value
        const photo = form.photo.files[0]

        const formData = new FormData()
        formData.append('image', photo)
        const url = 'https://api.imgbb.com/1/upload?key=5a2bc614923a1c00357db44f6264027d'
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((imgData) => {
               const postData = {
                postOwner:user?.email,
                post:post,
                photo:imgData.data.display_url

               }
               fetch('http://localhost:5000/posts',{
                method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            
                        },
                        body: JSON.stringify(postData)
               })
               .then(res => res.json())
                        .then(result => {
                            console.log(result);
                           
                            toast.success('post added successfully');
                            form.reset()
                           setPic('')
                        })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handlepic = (e) => {

    }
    return (
        <div>
            {/* text */}
            <div className='flex gap-4 mb-4'>
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div>

                </div>
                <div><p>What is in your mind {name}?</p></div>

            </div>

            <form onSubmit={handleSubmit}>
                <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">

                        <textarea id="comment" name='post' rows="4" className="w-full px-0 text-sm text-gray-900 bg-gray-600 border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 pl-3" placeholder="Write a post..." required></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                            Post
                        </button>
                        <div className="flex pl-0 space-x-1 sm:pl-2 align-items justify-center">


                            <label className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900  dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path></svg>
                                {pic ? <>{pic}</> : <><p className='text-sm  ml-1'>Photo</p></>}
                                <input onChange={(event) => setPic(event.target.files[0].name)} type="file" name='photo' className="file-input  file-input-primary w-full max-w-xs  hidden" accept='image/*' required />
                            </label>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default FirstSection;