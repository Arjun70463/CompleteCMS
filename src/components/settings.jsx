import React, { useState } from 'react';
import { Typography, styled, FormGroup, Table, TableBody, TableRow, TableCell, TableHead, Input, Button } from '@mui/material';


const Container = styled(FormGroup)`
  width: 50%;
  margin: 4% 80px 0 auto;
  & > div {
    margin-top: 10px;
  }
`;

const StyledTable = styled(Table)({
  width: '90%',
  margin: '50px auto 0 auto',
});

const Thead = styled(TableRow)`
  background: #75CCEC;
  & > th {
    color: white;
    font-size: 20px;
  }
`;

const Tbody = styled(TableRow)`
  & > td {
    font-size: 20px;
  }
`;

const SubmitButton = styled(Button)`
  margin: 4% auto 0;
  display: block;
`;


const Settings = ({ onSettingsSubmit }) => {


  const [navbarName, setNavbarName] = useState('');
  const [navbarNameColor, setNavbarNameColor] = useState('');
  const [navbarColor, setNavbarColor] = useState('');

  const handleNavbarNameChange = (event) => {
    setNavbarName(event.target.value);
  };

  const handleNavbarNameColorChange = (event) => {
    setNavbarNameColor(event.target.value);
  };

  const handleNavbarColorChange = (event) => {
    setNavbarColor(event.target.value);
  };

  const handleSubmit = () => {
    const settingsData = {
      navbarName,
      navbarNameColor,
      navbarColor
    };
    onSettingsSubmit(settingsData);

  };
  

  return (
    <div>
      <Container>
        <Typography variant="h3">Settings</Typography>
      </Container>
      <StyledTable>
        <TableHead>
          <Thead>
            <TableCell>Components</TableCell>
            <TableCell></TableCell>
          </Thead>
        </TableHead>
        <TableBody>
          <Tbody>
            <TableCell>Navbar Name</TableCell>
            <TableCell>
              <Input value={navbarName} onChange={handleNavbarNameChange} />
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Navbar Name Color</TableCell>
            <TableCell>
              <Input value={navbarNameColor} onChange={handleNavbarNameColorChange} />
            </TableCell>
          </Tbody>
          <Tbody>
            <TableCell>Navbar Color</TableCell>
            <TableCell>
              <Input value={navbarColor} onChange={handleNavbarColorChange} />
            </TableCell>
          </Tbody>
        </TableBody>
      </StyledTable>
      <SubmitButton variant="contained" onClick={handleSubmit}>Submit</SubmitButton>
    </div>
  );
};

export default Settings;
