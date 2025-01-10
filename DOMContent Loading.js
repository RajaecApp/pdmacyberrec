document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
});

function loadCourses() {
    fetch('data/courses.json')  // Assuming you have a courses.json file in the data directory
        .then(response => response.json())
        .then(data => {
            const courseList = document.querySelector('.course-list');
            data.courses.forEach(course => {
                const courseItem = document.createElement('div');
                courseItem.classList.add('course-item');
                courseItem.innerHTML = `
                    <h2>${course.title}</h2>
                    <p>${course.description}</p>
                `;
                courseList.appendChild(courseItem);
            });
        })
        .catch(error => console.error('Error loading courses:', error));
}