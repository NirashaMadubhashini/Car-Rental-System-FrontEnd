import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import {BookmarkAdd} from "@mui/icons-material";
import Button from "@mui/material/Button";
import Admin from "../../assets/img/admin.jpeg";

export default function CustomerDashBoard() {
    return (
        <Card variant="outlined" sx={{ minWidth: '450px',mt:5,ml:25,mr:25 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography level="h2" fontSize="md" sx={{ alignSelf: 'flex-start',fontSize:40 }}>
                    CustomerDashBoard
                </Typography>
            </Box>
            <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
            >
                <BookmarkAdd />
            </IconButton>

            <AspectRatio minHeight="120px" maxHeight="400px" sx={{ my: 2 }}>
                <img
                    src="https://wernerlawca.com/wp-content/uploads/2018/07/iStock-1007651674.jpg"
                    alt=""
                />
            </AspectRatio>
            <Box sx={{ display: 'flex' }}>

                <Button
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: 'auto', fontWeight: 600 }}
                >
                    Explore
                </Button>
            </Box>
        </Card>
    );
}
