import {Box, Grid, Paper, Stack, styled} from "@mui/material";
import {Pagination} from "swiper/modules";

const Pokedex = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));


    return (

        <div>
        <Stack spacing={2}>
            <Pagination count={10} />
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="secondary" />
            <Pagination count={10} disabled />
        </Stack>

    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid size={8}>
                <Item>size=8</Item>
            </Grid>
            <Grid size={4}>
                <Item>size=4</Item>
            </Grid>
            <Grid size={4}>
                <Item>size=4</Item>
            </Grid>
            <Grid size={8}>
                <Item>size=8</Item>
            </Grid>
        </Grid>
    </Box>

        </div>

    );

};


export default Pokedex;