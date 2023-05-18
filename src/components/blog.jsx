import { Button, styled, Typography } from '@mui/material';
import { getUser } from '../service/api';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Blog = styled('div')({
  width: '90%',
  margin: '50px auto 0 auto',
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getAllUser();
    // eslint-disable-next-line
  }, []);

  const getAllUser = async () => {
    let response = await getUser(id);
    setUsers(response.data);
  };

  return (
    <Blog>
      {users.map((user) => (
        <div key={user._id} style={{ marginBottom: '40px' }}>
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>{user.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{ marginLeft: '5px' }}>
            By {user.author}
          </Typography>
          <center>{user.link && (
            <img src={user.link} alt="" style={{ width: '75%', height: 'auto', marginTop: '20px' }} />
          )}</center>
          <Typography variant="body1" style={{ marginTop: '20px' }}>
            {user.context}
          </Typography><br/>
         <center><Button variant='contained' component={Link} to='/'>Back</Button></center>
        </div>
      ))}
    </Blog>
  );
};

export default AllUsers;
