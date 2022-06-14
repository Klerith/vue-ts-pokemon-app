import { defineComponent, ref } from 'vue';
import { storeToRefs } from 'pinia';

import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';

import { usePokemonStore } from './../store/pokemonStore';

import getPokemonOptions from '../helpers/getPokemonOptions';
import { Pokemon } from '../interfaces/pokemon';
import { usePokemons } from '../composables/usePokemons';



export default defineComponent({
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture,
    },
    setup: () => {

        const { 
            pokemonArr, pokemon, showPokemon, showAnswer, message,
            mixPokemonArray, checkAnswer, newGame
         } = usePokemons();
            
        mixPokemonArray();


        return {
            //! Properties
            pokemonArr,
            pokemon,
            showPokemon,
            showAnswer,
            message,

            //! Methods
            mixPokemonArray,
            checkAnswer,
            newGame,
        }
    }
});


