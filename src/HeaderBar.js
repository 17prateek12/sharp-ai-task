import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const HeaderBar = () => {
    return (
        <div className='flex w-full h-16 bg-gray-300'>
            <Stack direction="row" spacing={5} className='w-full justify-center'>
                <Button>
                    <Link to="/" className='text-lg font-medium text-black'>
                        HOME
                    </Link>
                </Button>
                <Button>
                    <Link to="/trans" className='text-lg font-medium text-black'>
                        TRANSACTION
                    </Link>
                </Button>
                <Button>
                    <Link to="/data" className='text-lg font-medium text-black'>
                        DATA
                    </Link>
                </Button>
            </Stack>
        </div>
    )
}

export default HeaderBar