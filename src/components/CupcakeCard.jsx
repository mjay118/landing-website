import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

function CupcakeCard({ cupcake }) {
    return (
        <Card >
            <CardMedia
                component="img"
                alt="green iguana"
                height="340"
                image={cupcake.img}
            />
            <CardContent>

                <div className="cupcake-image">
                    <Typography variant="h6" >
                        {cupcake.title}
                    </Typography>
                    <Typography variant="body2">
                        {cupcake.description}
                    </Typography>
                </div>

            </CardContent>
        </Card>
    );
}

export default CupcakeCard;
