import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, List, ListItem, Divider, Box } from "@mui/material";
import PokemonEvolution from "./PokemonEvolution";

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

                const result = await response.json();
                setPokemonData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error}</h1>;
    if (!pokemonData) return <h1>No Data Found</h1>;

    const pokemon = pokemonData;

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2 }}>
            <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, maxWidth: 700, padding: 2 }}>
                <CardMedia
                    component="img"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    sx={{ width: 200, height: 200, margin: "auto" }}
                />
                <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h4" gutterBottom>{pokemon.name.toUpperCase()}</Typography>
                    <Typography variant="body1">Altura: {pokemon.height / 10} m</Typography>
                    <Typography variant="body1">Peso: {pokemon.weight / 10} kg</Typography>
                    <Typography variant="body1">Experiencia Base: {pokemon.base_experience}</Typography>

                    <Typography variant="h6" sx={{ marginTop: 2 }}>Tipos:</Typography>
                    <Typography variant="body1">
                        {pokemon.types.map((t) => t.type.name).join(", ")}
                    </Typography>

                    <Typography variant="h6" sx={{ marginTop: 2 }}>Habilidades:</Typography>
                    <List>
                        {pokemon.abilities.map((a) => (
                            <ListItem key={a.ability.name}>{a.ability.name}</ListItem>
                        ))}
                    </List>

                    <Typography variant="h6" sx={{ marginTop: 2 }}>Estadísticas:</Typography>
                    <List>
                        {pokemon.stats.map((s) => (
                            <ListItem key={s.stat.name}>
                                {s.stat.name.toUpperCase()}: {s.base_stat}
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>

            <Divider sx={{ width: "80%", marginY: 3 }} />
            <Typography variant="h5" sx={{ marginBottom: 2 }}>Evoluciones</Typography>

            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
                {pokemon.evolutions?.map((evo) => (
                    <PokemonEvolution key={evo.id} pokemon={evo} />
                )) || <Typography>No hay información de evoluciones.</Typography>}
            </Box>
        </Box>
    );
};

export default PokemonDetail;