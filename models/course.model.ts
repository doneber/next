import Lesson from "@/models/lesson.model";

export default interface Course {
  id: string
  // name: string
  // description: string
  lessons: Lesson[]
}