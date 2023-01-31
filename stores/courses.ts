import { defineStore } from 'pinia'

export const useCourses = defineStore('courses', {
  state: () =>
  ({
    courseList: {},
  }),

  getters: {
  },
  actions: {
    addCourse(id: string, lessons: unknown) {
      this.courseList = {...this.courseList, [id]: lessons}
    },
  }
})
