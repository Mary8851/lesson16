<template>
  <div class="form">
    <input type="text" v-model="input" placeholder="Название фильма" />
    <button @click="sendForm">Поиск</button>
  </div>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  methods: {
    sendForm() {
      this.$emit("searchMovie", this.input);
      this.input = "";
    },
  },
};
</script>

<style lang="scss">
.form {
  max-width: 500px;
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  margin: auto;
  input {
    width: 100%;
    padding: 15px;
    border: 1px solid rgb(73, 197, 133);
    border-radius: 10px;
    background: rgb(255, 255, 255);
    outline: none;
  }
  button {
    width: 100px;
    padding: 15px;
    background: rgb(73, 197, 133);
    border-radius: 10px;
    border: none;
    font-size: 16px;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
}
</style>
