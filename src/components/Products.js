// Products Imports
//Material UI
//Axios
//Card MUI
//Grid
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Container } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';



const Products = () => {
    //Page Loading and state init
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        axios({
            //Fetching products from the endpoint with a promise
            method: "GET",
            url: "https://fakestoreapi.com/products",
        }).then((res) => {
            setData(res.data)
        }).catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, []);

    return (
        <Container>
            {loading && <div>
                <h2>Loading... </h2>
            </div>}
            <Grid container spacing={5} marginTop={5}>
                {data.map((product) => (
                    <Grid item key={product.id} sm={12} md={6} lg={4}>
                        <Card sx={{ maxWidth: 345, borderRadius: 5, boxShadow: 5, transition: "transform 0.15s ease-in-out", "&:hover": { transform: "scale3d(1.05, 1.05, 1)" }, }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt="Image"
                                />

                                <CardContent>
                                    <Typography sx={{ color: 'primary.main', paddingTop: "25%", textAlign: 'center' }}>
                                        <h4 className="product-title">{product.title.substring(0, 19)}</h4>
                                    </Typography>
                                    <Typography>
                                        <p style={{ textAlign: 'center' }}>{`Category: ${product.category}`}</p>
                                        <p style={{ fontWeight: 600, display: 'flex', justifyContent: 'center', textAlign: 'center' }}>{`Price: $ ${product.price}`}</p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Products;