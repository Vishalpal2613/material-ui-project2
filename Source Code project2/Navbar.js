import React, { useState } from 'react';
import { Grid } from "@mui/material";
import { AppBar, Toolbar, Tab, Tabs, Button, Typography, useTheme } from '@mui/material';
import { Box, useMediaQuery } from '@mui/system';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComponent from './DrawerComponent';



const Navbar = ({ links }) => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    const [value, setValue] = useState(0);

    return (
        <AppBar sx={{ backgroundImage: 'linear-gradient(90deg,rgba(180, 58, 58, 1) 2%, rgba(49, 49, 116, 1) 36%, rgba(105, 0, 161, 1) 73%, rgba(166, 69, 252, 1) 99%);' }}>
            <Toolbar >

                {isMatch ? (<>
                    <Typography>
                        <ShoppingCartCheckoutIcon sx={{marginRight: 2}} />
                    </Typography>
                    <DrawerComponent links={links} />
                </>) :
                    (<Grid sx={{ placeItems: "center" }} container spacing={27}>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={6}>
                            <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e, val) => setValue(val)} sx={{flexGrow: 1}}>
                                {Array.isArray(links) && links.map((link, index) => (
                                    <Tab key={index} label={link} />
                                ))}
                            </Tabs>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={3}>
                            <Box display="flex" >
                                <Button sx={{ marginLeft: "auto", background: "rgba(180, 58, 58, 1)" }} variant='contained'>Login</Button>
                                <Button sx={{ marginLeft: 1, background: "rgba(180, 58, 58, 1)" }} variant='contained'>Signup</Button>
                            </Box>
                        </Grid>
                    </Grid>)}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar;