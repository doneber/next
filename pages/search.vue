<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
let query = ref('')
let results = ref('')


watch(query, async () => {
  if (query.value.length > 0) {
    results.value = await queryContent().only(['_path', 'title']).where({ title: { $contains: query.value } }).find()
    console.log(results.value);
  } else {
    results.value = ''
  }
})

</script>
<template>
  <div class="container">
    <form action="">
      <label>
        What are you looking for?
      </label>
      <input
        v-model="query"
        type="search"
        placeholder="Search"
        autocomplete="off"
        autofocus="true"
      >
    </form>
    <div
      v-if="results.length > 0"
      class="results"
    >
      <ul>
        <li
          v-for="result of results"
          :key="result._path"
        >
          <NuxtLink :to="result._path">
            {{ result.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  background-color: var(--bg-color);
  border-radius: 4px;
}
label {
  font-size: 1.2rem;
  text-align: center;
}
input {
  width: 100%;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--card-bg-color);
  font-size: 1.2rem;
  color: var(--text-color);
}

input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.results {
  margin-top: 1rem;

}
</style>