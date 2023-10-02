
import Header from '@/components/Header'
import CupcakeCard from '@/components/CupcakeCard'
import { Grid, Typography } from '@mui/material'
const cakeCard = [{
    title: "Vanilla Cupcake",
    description: 'A classic vanilla cupcake with creamy frosting.',

    img: '/cupcake1.jpg'
},
{
    title: 'Choclate Cupcake',
    description: "A rich and decadent chocolate cupcake.",
    img: '/cupcake2.jpg'
},
{
    title: 'Strawberry Cupcake',
    description: 'A sweet strawberry-flavored cupcake topped with fresh berries.',
    img: '/cupcake3.jpg'
}
]
export default function CupcakeCardSection() {
    return (

        <>
        <Typography variant="h5" textAlign={'center'}>
          {'Our Bestsellers'}
        </Typography>
            <Grid container spacing={2} mt={3} justifyContent="center">
                {cakeCard.map((cupcake, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <CupcakeCard cupcake={cupcake} />
                    </Grid>
                ))}
            </Grid>
        </>

    )
}
