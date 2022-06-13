<script src="./PokemonPage.ts" />

<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        
        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon" 
        />

        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>

    </div>
    
</template>

