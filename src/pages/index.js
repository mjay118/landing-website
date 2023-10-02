import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import CupcakeCard from '@/components/CupcakeCard'
import { Grid } from '@mui/material'
import GirlWithCupcake from '@/components/GirlWithCupcake'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CupcakeCardSection from '@/components/CupcakeCardSection'
import Contact from '@/components/Contact'
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Cursive',
      textTransform: 'none',
    },
  },
});
const inter = Inter({ subsets: ['latin'] })
const cakeCard=[{
  title:"Vanilla Cupcake",
  description: 'A classic vanilla cupcake with creamy frosting.',

  img:'/cupcake1.jpg'
},
{
  title:'Choclate Cupcake',
  description: "A rich and decadent chocolate cupcake.",
  img:'/cupcake2.jpg'
},
{
  title:'Strawberry Cupcake',
  description: 'A sweet strawberry-flavored cupcake topped with fresh berries.',
  img:'/cupcake3.jpg'
}
]
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <Header/>
    <GirlWithCupcake/>

    <CupcakeCardSection/>
    <Contact/>
    </ThemeProvider>
  )
}
