const updateStudentGradeByCity = (students, city, newGrade) => 
  students
    .filter((student) => student.location === city) // Filter students by city
    .map((student) => {
      // Create a new student record to avoid mutating the original
      const newRecord = { ...student };

      // Find the corresponding new grade for the student
      const matchingNewGrade = newGrade.find((grade) => grade.studentId === student.id);

      // Update the grade if a matching record is found, otherwise set it to 'N/A'
      newRecord.grade = matchingNewGrade ? matchingNewGrade.grade : 'N/A';

      // Return the updated student record
      return newRecord;
    });

export default updateStudentGradeByCity;
