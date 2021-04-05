<template>
  <div v-if=" user.id === 1" class="column is-half p-4">
    <div class="card has-background-danger-dark has-text-grey-lighter">
      <header class="card-header p-5 has-background-danger">
        <h2 class="card-header-title has-text-white-bis is-centered">{{user.first_name}} {{user.last_name}}</h2>
      </header>
      <div class="card-content">
        <div class="content p-3">
          <p> Email: <a href="`mailto:` + user.email">{{user.email}}</a></p>
          <p> Gender: {{user.gender}}</p>
          <p> IP: {{user.ip_address}}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="column is-half p-4">
    <div class="card has-background-link has-text-grey-lighter">
      <header class="card-header p-5 has-background-info">
        <h2 class="card-header-title has-text-white-bis is-centered">{{user.first_name}} {{user.last_name}}</h2>
      </header>
      <div class="card-content">
        <div class="content p-3">
          <p> Email: {{user.email}}</p>
          <p> Gender: {{user.gender}}</p>
          <p> IP: {{user.ip_address}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IUser } from '../utils/interfaces';

export default defineComponent({
    props: {
        user: Object as () => IUser,
    }
})
</script>