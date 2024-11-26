const tabs = document.querySelectorAll('.menu-tabs .tab');
const sections = document.querySelectorAll('.menu-section');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        sections.forEach(section => {
            section.classList.remove('show');
            section.classList.add('hide');
            setTimeout(() => {
                section.style.display = 'none';
            }, 500);
        });

  
        const targetSection = sections[index];
        setTimeout(() => {
            targetSection.style.display = 'block';
            targetSection.classList.remove('hide');
            targetSection.classList.add('show');
        }, 500); 
    });
});


function showSection(sectionId) {
    const sections = document.querySelectorAll('.menu-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    const tabs = document.querySelectorAll('.menu-tabs .tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    showSection('brunch');
});
