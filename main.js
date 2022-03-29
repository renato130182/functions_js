const students = [
	{
		name: 'João',
		grades: 5,
		schoolClass: '1B',
	},
	{
		name: 'Sofia',
		grades: 9,
		schoolClass: '1B',
	},
	{
		name: 'Paulo',
		grades: 6,
		schoolClass: '2C',
	},
    {
		name: 'Maria',
		grades: 3,
		schoolClass: '2C',
	},
];

function aprovedStudents(array,gpa = 5){
    let approved = [];
    for (student of students){
        const {name,grades} = student
        if(grades >= gpa){
            approved.push(name);
        }
        //console.log(name, grades);
    }
    return approved;
}

console.log(aprovedStudents(students));