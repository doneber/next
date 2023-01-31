<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted } from 'vue'
import { useCourses } from '@/stores/courses'

const { path } = useRoute()
const parentPath = path.split('/').slice(0, -1).join('/')

const { data: navigation } = await useAsyncData(path, () => fetchContentNavigation(parentPath))
const currentLessonList = navigation['_rawValue'].find(course => course._path === parentPath).children
const currentdata = currentLessonList.find((item) => item._path === parentPath)
const authorData = currentdata.author

/* Obtiene la información de la navegación de contenidos. */
const courses = useCourses()
if (!courses.courseList[parentPath]) {
  let lessonListWithoutIndexMd = currentLessonList.filter((item) => item._path !== parentPath)
  lessonListWithoutIndexMd.forEach(item => {
    item.seen = false
  });
  courses.addCourse(parentPath, lessonListWithoutIndexMd)
}

let lessonList = courses.courseList[parentPath]


/* Verifica si el usuario ha llegado al final de la página */
const scrolling = (e) => {
  const clientHeight = e.target.clientHeight
  const scrollHeight = e.target.scrollHeight
  const scrollTop = e.target.scrollTop

  if (scrollTop >= (scrollHeight - clientHeight - 130)) {
    const lesson = lessonList.find(e => e._path === path)
    lesson.seen = true
  }
}
/* al cargar la página dispara el evento scroll */
const input = ref(null)
onMounted(() => {
  input.value.dispatchEvent(new Event("scroll"))
})

</script>
<template>
  <div class="wrapper">
    <main
      ref="input"
      class="rich-content"
      @scroll="scrolling"
    >
      <LessonList
        :path="parentPath"
        :lesson-list="lessonList"
      />
      <div class="container">
        <TheBreadcrumb />
        <AuthorInfo :author="authorData" />
        <ContentDoc />
        <!-- <TheFooter /> -->
      </div>
    </main>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  height: calc(100vh - var(--app-bar-height));
}

.rich-content {
  display: flex;
  overflow: auto;
}

@media (max-width: 900px) {
  .rich-content {
    flex-direction: column-reverse;
  }
}
</style>