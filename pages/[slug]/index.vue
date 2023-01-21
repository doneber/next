<script setup>
const { path } = useRoute()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(path))
const list = navigation['_rawValue'][0]['children']
const courseData = list.find((item) => item._path === path)
const courseList = list.filter((item) => item._path !== path)
</script>

<template>
  <main>
    <div class="container">
      <h1>{{ courseData.title }}</h1>
      <ContentDoc />
      <h2>Lista de clases:</h2>
      <ul class="list-class">
        <li v-for="link of courseList" :key="link._path">
          <NuxtLink :to="link._path">
            <div class="card-class">
              <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none"
                xmlns="http://www.w3.org/2000/svg" color="#FFF">
                <path
                  d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6zM8 10h8M8 18h8M8 14h4"
                  stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M16 2v3.4a.6.6 0 00.6.6H20" stroke="#FFF" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg>
              {{ link.title }}
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
.list-class li {
  padding: 8px;
  padding-left: 12px;
  margin: 8px 0;
  border: 1px solid #2c2c31;
  border-radius: 8px;
}

.card-class {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>