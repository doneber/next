<script setup>
const { path } = useRoute()
const currentContent = await queryContent(path).findOne()

</script>

<template>
  <main>
    <div class="container">
      <Breadcrumb />
      <h1>{{ currentContent.navigation.title }}</h1>
      <ContentDoc />
      <h2>Lista de clases:</h2>
      <ClassSideBar />
    </div>
    <Footer />
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