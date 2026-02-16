// Search bar functionality
const searchBar = document.getElementById('searchBar');
const courses = document.querySelectorAll('.course-card');

searchBar.addEventListener('keyup', (e) => {
    const searchText = e.target.value.toLowerCase();
    courses.forEach(course => {
        const courseName = course.querySelector('h3').textContent.toLowerCase();
        if (courseName.includes(searchText)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
});

// Modal functionality
const modal = document.getElementById('courseModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.querySelector('.close');

const enrollButtons = document.querySelectorAll('.enroll-btn');
enrollButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const course = btn.parentElement;
    modalTitle.textContent = course.querySelector('h3').textContent;
    modalDescription.textContent = course.querySelector('p').textContent;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
