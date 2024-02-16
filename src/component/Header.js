import { Button,Stack,TextField,Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
function Header() {
    const navigate = useNavigate();

    const goHome = () => {
      navigate('/')
    }
    const goRegisterClass = () => {
        navigate('/user/register')
    }
    const goOpenClass = () => {
        navigate('/user/open')
    }
    return <div>
        <Stack direction={"row"} justifyContent="space-between" margin={2}>
        <Button disableRipple onClick={goHome} style={{padding: 0, margin: 0 }}>
        <Typography variant="h4">캠퍼스쿨</Typography>
        </Button>
            <Stack direction={"row"} spacing={5}>
                <Stack direction={"row"} spacing={1}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"sx={{ m: 1, width: '60ch' }} />
                    <Button variant="contained">검색</Button>
                </Stack>
                {AccountMenu()}
            </Stack>
        </Stack>
    </div>
}
function newUser() {
    return (
        <div>
            <Stack direction={"row"} spacing={2}>
            <Button variant="outlined">로그인</Button>
            <Button variant="contained">회원가입</Button>
        </Stack>
        </div>
    )
}
function loginUser() {
    return (
        <div>
            <Stack direction={"row"} spacing={1}>
                <Button
                  variant="contained"
                  tabIndex={-1}
                >
                  <FavoriteIcon />
                </Button>
                <Button>
                {Circle()}
                </Button>
            </Stack>
        </div>
    )
}
function AccountMenu() {
    const navigate = useNavigate();

    const goHome = () => {
      navigate('/')
    }
    const goRegisterClass = () => {
        navigate('/user/register')
    }
    const goOpenClass = () => {
        navigate('/user/open')
    }
    const goMakeClass = () => {
        navigate('/class/open')
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Typography sx={{ minWidth: 100 }}>찜한 강의</Typography>
          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClose}>
            <Avatar /> Profile
          </MenuItem>
          <Divider />
          <MenuItem onClick={goRegisterClass}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            나의 등록 강의
          </MenuItem>
          <MenuItem onClick={goOpenClass}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            나의 개설 강의
          </MenuItem>
          <MenuItem onClick={goMakeClass}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            강의 개설하기
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    );
  }
function Circle() {
    return (
      <svg width="30" height="30">
        <circle cx="15" cy="16" r="10" stroke="black" strokeWidth="1" fill="red" />
      </svg>
    );
  }
export default Header;