import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { useProfile } from '../../hooks/useProfile';

const About = () => {
 
  const user = useContext(AuthContext)
  console.log(user?.user?.photoURL)
  const profile = useProfile(user?.user?.email)
  const{data,refetch} = profile
  const{ name,email,university,address} = data
  console.log(data)
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    console.log('ok')
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const university = form.university.value
    const address = form.address.value
    const profileData={
      name,
      email,
      university,
      address,
      
    }
    console.log(profileData)
    const url = `http://localhost:5000/profile/${user?.user?.email}`
    fetch(url, {
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(profileData)
  })
      .then((response) => response.json())
      .then((data) => {
          console.log('Success:', data);
          toast.success(" profile updated successfully")
         form.reset()
         refetch()
          navigate('/about')
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    
    
    
    
    console.log('done')
  }
  return (
    <main className="profile-page mt-80 pb-16 shadow-xl">
      <section className="relative block h-500-px">

        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" >
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </section>
      <section className="relative py-16 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="">
                    <img src={user?.user?.photoURL} alt="" />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    {/* modal */}
                    {/* The button to open modal */}
                    <label htmlFor="my-modal" className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 cursor-pointer" type="button">Edit</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                   <div className="modal">
                      <div className="modal-box relative">
                      <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <form onSubmit={handleSubmit}>

                          {/* input */}
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">Name</span>

                            </label>
                            
                            <input  type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                          </div>
                          {/* input */}
                          {/* input */}
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">Email</span>

                            </label>
                            <input type="text" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                          </div>
                          {/* input */}
                          {/* input */}
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">University</span>

                            </label>
                            <input type="text" name='university' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                          </div>
                          {/* input */}
                          {/* input */}
                          <div className="form-control w-full max-w-xs">
                            <label className="label">
                              <span className="label-text">Address</span>

                            </label>
                            <input type="text" name='address' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                          </div>
                          {/* input */}
                          
                         
                          <div className="modal-action">
                         
                           <input  type="submit" value="Save" className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 cursor-pointer" />
                           
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* modal */}

                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="lg:mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span className="text-sm text-blueGray-400">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12 pb-16">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  {name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {address}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Email:{email}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{university}
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default About;