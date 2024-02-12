import * as React from 'react';
import { database } from '../firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Data = () => {
    const [show, setShow] = useState([]);
    const collectionRef = collection(database, 'users');

    const getdata = () => {
        onSnapshot(collectionRef, (data) => {
            setShow(
                data.docs.map((item) => ({
                    ...item.data(),
                    id: item.id
                }))

            );
        });
    };

    useEffect(() => {
        getdata();
    } );

    return (
        <div className='w-3/5 mx-auto mt-40'>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Wallet</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {show.map((item) => (
                            <TableRow
                                key={item.name}
                            >
                                <TableCell component="th" scope="row">
                                    {item.id}
                                </TableCell>
                                <TableCell align="right">{item.wallet}</TableCell>
                                <TableCell align="right">{item.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Data