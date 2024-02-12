import React, { useState} from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { database } from '../firebaseConfig';
import { collection , addDoc } from 'firebase/firestore';



const Transcation = () => {
    const [data, setData] = useState({
        wallet:'',
        amount:'',
    });

    const collectionRef = collection(database, 'users');

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value };
        setData({ ...data, ...newInput }); // Spread the newInput directly
    };

    const handleSubmit = () =>{
        if (!data.wallet) {
            alert("Please fill in both wallet address");
            return;
        }
        if(!data.amount || (data.amount>10000 || data.amount<0)){
            alert("Please Enter valid amount");
            return;
        }
        addDoc(collectionRef,{
            wallet:data.wallet,
            amount:data.amount,
        })
        .then(()=>{
            alert("Data Added");
        })
        .catch((error)=>{
            alert(error.message);
        })
    };


  return (
        <Box 
        component="form"
        className='mx-auto mt-80 w-1/4 bg-gray-300 border-black border-2'>
        <div className=' mt-10 flex place-items-center flex-col gap-8 mb-10'>
        <Typography sx={{fontSize:24, fontWeight:'bold'}}>TRANSACTION</Typography>
        <FormControl className='w-4/5 rounded-xl bg-white' variant='filled'>
       <InputLabel htmlFor="filled-adornment-amount">Wallet</InputLabel>
          <Input
            name='wallet'
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            placeholder='Enter Wallet Address'
            onChange={(event)=>handleInput(event)}
          />
        </FormControl>
       <FormControl className='w-4/5 rounded-xl bg-white' variant='filled'>
       <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <Input
            name='amount'
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            placeholder='Enter your Amount'
            onChange={(event)=>handleInput(event)}
          />
        </FormControl>
        <Button 
        variant='outlined' 
        sx={{
            color:'black', 
            width:240, 
            height:40, 
            fontSize:16, 
            borderColor:'black', 
        ":hover":{backgroundColor:'blue', color:'white'}
    }}
        onClick={handleSubmit}>
            SUBMIT
        </Button>
        </div>
        </Box>
  )
}

export default Transcation