<template>
  <div class="field p-4">
    <div class="control">
      <input
        class="input"
        type="text"
        v-model="searchQuery"
        placeholder="First name or last name"
      />
    </div>
  </div>
  <div class="users">
    <user
      v-for="user in filteredResources"
      v-bind:key="user.id"
      v-bind:user="user"
    ></user>
  </div>
</template>

<script lang="ts">
import userService from "../http/userService";
import User from "../components/User.vue";
import { IUser } from "../utils/interfaces";
import { defineComponent } from "vue";

export default defineComponent({
  mounted: function () {
    userService.getUser({}).then((users) => {
      this.allUsers = users.data;
      this.filteredResources = users.data;
      //console.log(this.filteredResources)
    });
  },
  components: {
    User,
  },
  data() {
    return {
      allUsers: [] as IUser[],
      searchQuery: "",
      filteredResources: [] as IUser[],
    };
  },
  watch: {
    searchQuery() {
      //console.log(this.filteredResources);
      //console.log(this.searchQuery);
      this.filteredResources = this.allUsers.filter(
        (post) =>
          post.first_name
            .toLowerCase()
            .startsWith(this.searchQuery.toLowerCase()) ||
          post.last_name
            .toLowerCase()
            .startsWith(this.searchQuery.toLowerCase()) ||
          post.email.toLowerCase().startsWith(this.searchQuery.toLowerCase())
      );
      //console.log(this.filteredResources);
    },
  },
});
</script>
