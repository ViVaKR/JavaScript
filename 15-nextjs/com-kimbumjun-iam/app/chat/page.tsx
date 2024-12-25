'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Select } from '@mui/material';

const Chat = () => {
  const [count, setCount] = React.useState(1);
  return (
    <>
      <h1>Chat</h1>

      <div className="container-fluid my-4 px-2">
        <div className="row">
          <div className="col">
            <Select>
              <MenuItem>Ten</MenuItem>
              <MenuItem>Twentty</MenuItem>
              <MenuItem>Thirty</MenuItem>
            </Select>
          </div>
          Select
        </div>
        <div className="row">
          <div className="col">
            <Paper
              component="form"
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: 400,
                height: 60,
              }}>
              Hello, World!
            </Paper>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Box
              component="form"
              sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
              noValidate
              autoComplete="off">
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  color="secondary"
                  defaultValue=""
                />
                <TextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue=""
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  color="warning"
                  autoComplete="current-password"
                />
                <TextField
                  id="outlined-read-only-input"
                  label="Read Only"
                  defaultValue=""
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <TextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                />
                <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                />
              </div>
              <div>
                <TextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="filled"
                />
                <TextField
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="filled"
                />
                <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
                <TextField
                  id="filled-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  variant="filled"
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="filled-number"
                  label="Number"
                  type="number"
                  variant="filled"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <TextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                />
                <TextField
                  id="filled-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="filled"
                />
              </div>
              <div>
                <TextField
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="standard"
                />
                <TextField
                  disabled
                  id="standard-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="standard"
                />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />
                <TextField
                  id="standard-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  variant="standard"
                  slotProps={{
                    input: {
                      readOnly: true,
                    },
                  }}
                />
                <TextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  variant="standard"
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                />
                <TextField
                  id="standard-search"
                  label="Search field"
                  type="search"
                  variant="standard"
                />
                <TextField
                  id="standard-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="standard"
                />
              </div>
            </Box>
          </div>
        </div>
      </div>
      <div className="container-fluid my-4 px-2">
        <div className="row row-cols-2 p-2">
          <div className="col p-4">
            <Box
              component="form"
              sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
              noValidate
              autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
              />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
              />
            </Box>
          </div>
          <div className="col p-4">
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button
              variant="contained"
              className="mx-4"
              endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
          <div className="col p-4">
            <Button
              variant="text"
              color="secondary">
              Text
            </Button>
            <Button
              variant="contained"
              className="mx-4"
              color="success">
              Success
            </Button>
            <Button
              variant="outlined"
              color="error">
              Error
            </Button>
          </div>
          <div className="col py-4">
            <Badge
              color="secondary"
              badgeContent={count}>
              <MailIcon />
            </Badge>
            <ButtonGroup
              size="small"
              className="mx-4">
              <Button onClick={() => setCount(count - 1)}>
                <RemoveIcon fontSize="small" />
              </Button>
              <Button onClick={() => setCount(count + 1)}>
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </div>
          <div className="col">
            <Badge
              badgeContent={4}
              color="primary">
              <MailIcon color="action" />
            </Badge>
          </div>
          <div className="col">
            <Badge
              badgeContent={4}
              color="secondary">
              <MailIcon color="action" />
            </Badge>
          </div>
          <div className="col">
            <Button
              variant="contained"
              color="primary">
              Hello World
            </Button>
          </div>
          <div className="col">
            <Badge
              badgeContent={14}
              color="success">
              <MailIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
