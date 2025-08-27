import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button, useTheme, useMediaQuery, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';

const PAGES = ["Products", "serivces", "Contact Us", "About Us"];

const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <AppBar sx={{ background: "#063970" }}>
                <Toolbar>
                    <ShoppingCartCheckoutIcon />

                    {
                        isMatch ? (
                            <>
                                <Typography sx={{fontSize: "1.5rem", paddingLeft: "10%"}}>SHOPEE</Typography>
                                <DrawerComp />
                            </>
                        ) : (
                            <>
                            <Tabs sx={{marginLeft: 'auto'}} textColor='inherit' value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>
                            {
                             PAGES.map((page, index) =>(
                                   <Tab key={index} label={page} />
                            ))}
                                </Tabs>
                                <Button sx={{ marginLeft: 'auto' }} variant='contained'>Login{" "}</Button>
                                <Button sx={{ marginLeft: 1 }} variant='contained'>SignUp{" "}</Button>
                            </>
                        )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )};

export default Header