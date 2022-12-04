<template>
  
  <h3>Add Your card</h3>
  <div class="form">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" placeholder="Your card title">
          <input type="text" v-model="title"/><br>
        </h5>
        <div class="card-text"> 
          <label class="label">Content</label><br>
          <textarea v-model="content" rows="8" cols="30"/><br><br>
        </div>
        <button v-on:click="addToAPI();">Add</button>
        <p v-bind:title="title" v-bind:array="array" :content="content"></p>
        <p>Title: {{ title }}</p>
        <p>Content: {{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      content: "",
      title: "",
      count: parseInt(localStorage.getItem("count") || "0"),
      array: JSON.parse(localStorage.getItem("cards") || "[]"),
    };
  },
  methods: {
    addToAPI(){
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, content: this.content})
      };
      try{
        fetch("http://5.135.119.239:3090/notes/", requestOptions)
        .then(response  => {
          if(response.ok)
          {
            response.json()
            console.log(response);
          }
        })
        this.$router.push("/");
      }
      catch(error)
      {
        console.log(error);
      }
      this.$toast.show("Successfully added");
    },
  },

};
</script>
