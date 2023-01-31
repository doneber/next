<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useCourses } from '@/stores/courses'
const { path } = useRoute()
const { data: navigation } = await useAsyncData(path, () => fetchContentNavigation(path))
const currentLessonList = navigation['_rawValue'].find(course => course._path === path).children

const pageData = currentLessonList.find(item => item._path === path)
const authorData = pageData?.author

const courses = useCourses()
if (!courses.courseList[path]) {
  let lessonListWithoutIndexMd = currentLessonList.filter((item) => item._path !== path)
  lessonListWithoutIndexMd.forEach(item => {
    item.seen = false
  });
  courses.addCourse(path, lessonListWithoutIndexMd)
}

let lessonList = courses.courseList[path]

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
        <LessonList
          :path="path"
          :lesson-list="lessonList"
        />
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