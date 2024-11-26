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
        if (section.id === sectionId) {
            section.classList.remove('hide'); 
            section.classList.add('show');  
        } else {
            section.classList.remove('show'); 
            section.classList.add('hide');  
        }
    });


    const tabs = document.querySelectorAll('.menu-tabs .tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`.tab[onclick="showSection('${sectionId}')"]`).classList.add('active');
}


document.addEventListener('DOMContentLoaded', () => {
    showSection('brunch');
});
