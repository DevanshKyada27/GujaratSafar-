import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [imageLoaded, setImageLoaded] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("userData:", user?.picture);
  }, [user]);
  
  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  });
  
  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialog(false);
      window.location.reload();
    });
  }
  
  return (
    <div className='w-full p-4 shadow-sm flex justify-between items-center px-5 bg-white sticky top-0 z-50'>
      <h2 className='text-xl font-bold cursor-pointer'>GujaratSafar</h2>
      <div>
        {user ? (
          <div className='flex items-center gap-5'>
            <a href="/">
              <Button variant="whiteOutline" className='rounded-full bg-white hover:bg-gray-100 text-white px-4 py-2 border border-gray-300'>
                + Create Trip
              </Button>
            </a>
            <a href="/my-trips">
              <Button variant="whiteOutline" className='rounded-full bg-white hover:bg-gray-100 text-white px-4 py-2 border border-gray-300'>
                My Trips
              </Button>
            </a>
            <Popover>
              <PopoverTrigger asChild>
                {user?.picture && (
                  <img
                    src={user?.picture}
                    alt="User Avatar"
                    onError={(e) => console.error("Image failed to load:", e)}
                    className='h-[35px] w-[35px] rounded-full cursor-pointer object-cover'
                  />
                )}
              </PopoverTrigger>
              <PopoverContent>
                <h2 className='cursor-pointer' onClick={() => {
                  googleLogout();
                  localStorage.clear();
                  // window.location.reload();
                  navigate('/');
                }}>🚪👋 Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        )}
      </div>
      
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <h1 className='text-black font-bold'>GujaratSafar</h1>
              <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
              <p>Sign in to the App with Google authentication, It's safe and secure!!</p>
              <button 
                onClick={login} 
                className='w-full mt-5 flex gap-4 items-center justify-center p-2 border border-gray-300 rounded-md hover:bg-gray-50'
              >
                <FcGoogle className='h-7 w-7' />
                <span className='text-white'>Sign In with Google</span>
              </button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Header;