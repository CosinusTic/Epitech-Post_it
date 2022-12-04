<template>
    <div class="form">
      <h3>Add Your card</h3>
      <label class="label">New Title</label><br>
      <input type="text" v-model="title"/><br>
      <label class="label">New  Content</label><br>
      <textarea v-model="content" rows="8" cols="30"/><br><br>
      <button v-on:click="ModifyAPI()">Modify</button>
      <p v-bind:title="title" v-bind:array="array" :content="content"></p>
      <p>Title: {{ title }}</p>
      <p>Content: {{ content }}</p>
      <p>Current content: {{array.content}}</p>
      <p>Current title: {{array.title}}</p>
      <p>Current ID: {{array._id}}</p>
    </div>
</template>

<script lang="ts">
export default {
    props:["this_card"],
  data() {
    return {
      content: "",
      title: "",
      array: [],
    };
  },
  methods: {
    ModifyAPI(){
      const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, content: this.content})
      };
      fetch("http://5.135.119.239:3090/notes/" + this.array._id, requestOptions)
        .then(response  => {    
          if(response.ok)
          {
            response.json()
            console.log(response);
          }
        });
        this.$router.push("/");
    },

    created() {
  // Simple PUT request with a JSON body using fetch
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({title: this.title, content: this.content})
  };
  fetch("https://reqres.in/api/articles/1", requestOptions)
    .then(response => response.json())
    .then(data => (this.updatedAt = data.updatedAt));
},


    async computeData(id: string | string[])
    {
        try{
            const response = await fetch("http://5.135.119.239:3090/notes/" + id)
                .then((response) => response.json())
            this.array = response.note;
        }
        catch(error)
        {
            console.log(error);
        }
      

    },

    displayData() {
      console.log(this.content);
      console.log(this.title);
    },

    redirect() {
      this.$router.push("/");
    },
  },

  async mounted() {
    console.log(this.$router.currentRoute.value.params["id"])
    await this.computeData(this.$router.currentRoute.value.params["id"]);
    console.log(this.array.content[0]);
  },

};
</script>
