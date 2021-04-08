<template>
<div class="container">
    <div class="card has-background-danger-dark has-text-grey-lighter">
      <header class="card-header p-5 has-background-danger">
        <h2 class="card-header-title has-text-white-bis is-left"> {{ game.id_user }} {{ game.id_game }} </h2>
      </header>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IGame } from '../utils/interfaces';

export default defineComponent({
    props: {
        game: Object as () => IGame,
    }
})
</script>