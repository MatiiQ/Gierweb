<template>
  <div class="field p-4">
    <div class="control">
      <input class="input" type="text" v-model="searchQuery" placeholder="Search">
    </div>
  </div>
  <div class="users">
	 <user v-for="user in filteredResources"
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
      this.filteredResources = result.data
    });
  },
  data() {
	  	return {
	    	allUsers: [] as IUser[],
        searchQuery: "",
        filteredResources: [] as IUser[],
	  }
  },
  watch: {
    searchQuery() {
      console.log(this.searchQuery);
      this.filteredResources = this.allUsers.filter(post =>
        (post.first_name.toLowerCase().startsWith(this.searchQuery)
        ||
        post.last_name.toLowerCase().startsWith(this.searchQuery)
        ||
        post.email.toLowerCase().startsWith(this.searchQuery)
        )
      );
      console.log(this.filteredResources);
    }
  },
});
</script>
