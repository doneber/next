<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const { path } = useRoute()
const { navigation: pageData} = await queryContent(path).findOne()
const authorData= pageData?.author

</script>

<template>
  <div class="wrapper">
    <main class="rich-content">
      <div class="container">
        <TheBreadcrumb />
        <h1 class="course-title">
          {{ pageData.title }}
        </h1>
        <AuthorInfo :author="authorData" />
        <ContentDoc />
        <h2>Lista de clases:</h2>
        <ClassSideBar />
      </div>
      <TheFooter />
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  height: calc(100vh - var(--app-bar-height));
}

.rich-content {
  height: 100%;
  overflow: auto;
}

.course-title {
  margin-bottom: 8px;
}

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