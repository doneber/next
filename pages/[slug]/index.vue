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
      <Breadcrumb />
      <h1>{{ courseData.title }}</h1>
      <ContentDoc />
      <h2>Lista de clases:</h2>
      <SideBar />
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