import { Table, TableHead, TableBody, TableRow, TableCell, styled, Button} from '@mui/material';
import {getUsers, deleteUser} from  '../service/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Allusers = () => {

    const [users,setUsers]= useState([]);

    useEffect(() => {
        getAllUsers();
    }, []);
    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data);
    };
  const StyledTable = styled(Table)({
    width: '90%',
    margin: '50px auto 0 auto',
  });

  const deleteUserdetails = async(id) =>{
    await deleteUser(id);
    getAllUsers();
  }

  const Thead =styled(TableRow)`
    background: #75CCEC;
    & > th {
        color:white;
        font-size: 20px;
    }
  `
  const Tbody = styled(TableRow)`
  & > td {
    font-size:20px;
}
`

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Title</TableCell>
          <TableCell>Author</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Context</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <Tbody key={user._id}>
            <TableCell>{user.title}</TableCell>
            <TableCell>{user.author}</TableCell>
            <TableCell>
              {user.link ? (
              <img src={user.link} alt="" style={{ width: '100px', height: 'auto' }} />
              ) : (
                'No image'
              )}
            </TableCell>
            <TableCell>
            {user.context ? (
              'Context Filled'
              ) : (
                'No Context Filled'
              )}
            </TableCell>
            <TableCell><Button variant='contained' component={Link} to={`/edit/${user._id}`}>Update</Button></TableCell>
            <TableCell><Button variant='contained' color='secondary' onClick={() => deleteUserdetails(user._id)}>Delete</Button></TableCell>
          </Tbody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Allusers;
