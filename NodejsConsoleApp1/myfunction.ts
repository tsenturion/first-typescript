const isComplete = (course: { name: string, lessons: string[], }) => course.lessons.length > 3;


export default isComplete;
