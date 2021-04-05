<template>
  <div class="users">
	 <user v-for="user in allUsers"
        v-bind:key='user.id'
        v-bind:user='user'
      ></user>
  </div>
</template>

<script lang="ts">
import userService from '../http/userService';
import User from '../components/User.vue';
import { IUser } from '../utils/interfaces';
import { defineComponent } from 'vue';

export default defineComponent({
  //mounted: function () {
  //  userService.getUser({count: 100, key: '162e61d0'}).then((users) => this.allUsers = users);
  //},
  components: {
    User
  },
  mounted: function () {
    userService.getUser().then((result) => {
      this.allUsers = result.data
    });
  },
  data() {
	  	return {
	    	allUsers: [] as IUser[],
	  }
  },
});
</script>
