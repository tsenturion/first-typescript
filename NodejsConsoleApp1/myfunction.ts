const isComplete = (course: { name: string, lessons: string[], }): boolean => course.lessons.length > 3;


export default isComplete;
