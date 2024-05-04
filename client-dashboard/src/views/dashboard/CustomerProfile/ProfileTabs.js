import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { IconHeart, IconPhoto, IconUserCircle } from '@tabler/icons';
import { Link, useLocation } from 'react-router-dom';

const ProfileTabs = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ProfileTabs = [
    {
      label: 'Profile',
      icon: <IconUserCircle size="20" />,
      to: '/customer-profile',
    },
    {
      label: 'Users',
      icon: <IconUserCircle size="20" />,
      to: '/users-list',
    }
  ];

  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.grey[100] }}>
      <Box justifyContent={'center'} display="flex" sx={{ overflow: 'auto', width: { xs: '333px', sm: 'auto' } }}>
        <Tabs value={value} onChange={handleChange} aria-label="scrollable prevent tabs example" variant="scrollable"
          scrollButtons="auto">
          {ProfileTabs.map((tab) => {
            return (
              <Tab
                iconPosition="start"
                label={tab.label}
                sx={{ minHeight: '50px' }}
                icon={tab.icon}
                component={Link}
                to={tab.to}
                value={tab.to}
                key={tab.label}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
};

export default ProfileTabs;
