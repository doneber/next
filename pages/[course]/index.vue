<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useSeens } from '@/stores/seens'
const { path } = useRoute()
const { navigation: pageData} = await queryContent(path).findOne()
const authorData= pageData?.author

const seens = useSeens()
const parentPath = path
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(parentPath))
const currentCourse = navigation['_rawValue'].find(course => course._path === parentPath)
const classList = currentCourse.children.filter((item) => item._path !== parentPath)
classList.forEach(item => {
  const seen = seens.history.get(item._path) ? true : false
  item.seen = seen
});

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
        <LessonList :lesson-list="classList" />
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