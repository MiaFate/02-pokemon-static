import { Grid, Card } from "@nextui-org/react"
import { FC } from "react";

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} >
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    alt={'imagen del pokemon'}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}
