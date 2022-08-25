import React, { Component } from 'react';
import {
    Card,
    Avatar,
    CardContent,
    IconButton,
    Divider,
    Grid,
    Typography
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

class Country extends Component {
    state = {
        name: 'United States',
        medal: 0,
    }

    increment = () => this.setState({ medal: this.state.medal + 1 });

    render() {
        return (
            <Grid container justifyContent="center">
                <Card
                    className="country"
                    sx={{
                        minWidth: 275,
                        bgcolor: "#404040",
                        color: "white",
                        boxShadow: " 10px 10px 20px 5px black"
                    }}
                >
                    <CardContent>
                        <Typography
                            className="name"
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontFamily="Serif"
                            fontWeight="Bold"
                        >
                            {this.state.name}
                        </Typography>

                        <Divider sx={{ bgcolor: "white" }} />

                        <Grid container className="medals" pt={1}>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                sx={{
                                    pt: .7,
                                    mr: 8.5,
                                    fontWeight: "bold",
                                    fontFamily: "Serif"
                                }}
                            >
                                Gold Medals:
                            </Typography>

                            <Avatar
                                sx={{ bgcolor: "gold", color: "black", mr: -1 }}
                            >
                                {this.state.medal}
                            </Avatar>

                            <IconButton
                                variant="text"
                                onClick={this.increment}
                                sx={{ color: "gold" }}
                            >
                                <AddCircleIcon />
                            </IconButton>

                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}

export default Country;