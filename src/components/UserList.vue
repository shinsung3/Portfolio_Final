<template>

</template>

<script>
  import FirebaseService from "@/services/FirebaseService";

  export default {
    name: "UserList",
    data() {
      return {
        users: []
      };
    },
    mounted() {

    },
    methods: {
      async getUserList() {
        this.users = await FirebaseService.
      }
    }
  }

</script>
