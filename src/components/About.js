import PokemonCard from "./PokemonCard";
import {Box, Grid2, Paper, styled} from "@mui/material";
import {useEffect, useState} from "react";

const About = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles?.('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const limit = 151; //
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
                const data = await response.json();

                // Obtener detalles de cada Pokémon
                const detailedPromises = data.results.map(p => fetch(p.url).then(res => res.json()));
                const detailedPokemons = await Promise.all(detailedPromises);

                setPokemons(detailedPokemons);
            } catch (err) {
                setError("Error al cargar los Pokémon.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    if (loading) return <h2>Cargando Pokémon...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid2 container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
                    {pokemons.map((pokemon) => (
                        <Grid2 key={pokemon.id} xs={12} sm={6} md={4} display="flex" justifyContent="center">
                            <Item>
                                <PokemonCard item={pokemon} />
                            </Item>
                        </Grid2>
                    ))}
                </Grid2>
            </Box>
        </div>
    );
};

export default About;
