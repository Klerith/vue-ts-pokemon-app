<template>
    <div class="pokemon-container">

        <img v-if="!showPokemon" 
            :src="imgSrc" 
            class="hidden-pokemon"
            alt="pokemon">
        
        <img v-else
            :src="imgSrc"
            class="fade-in"
            alt="pokemon">

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    pokemonId: number;
    showPokemon: boolean;
}>();

const imgSrc = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ props.pokemonId }.svg` );

</script>

<style scoped>

.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>