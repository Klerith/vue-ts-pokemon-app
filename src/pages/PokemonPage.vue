<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        
        <PokemonPicture />
        <PokemonOptions />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>

    </div>
    
</template>


<script setup lang="ts">
import { usePokemons } from '../composables/usePokemons';

import PokemonOptions from '../components/PokemonOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';


const { pokemon,showAnswer, message, mixPokemonArray, newGame } = usePokemons();
    
mixPokemonArray();

</script>

