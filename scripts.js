document.addEventListener('DOMContentLoaded', function() {
    const awardsList = document.getElementById('awards-list');
    const modal = document.getElementById('award-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    awardsList.addEventListener('click', function(e) {
        if (e.target && e.target.matches('li[data-award]')) {
            const award = e.target.getAttribute('data-award');
            showAwardDetails(award);
        }
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    function showAwardDetails(award) {
        modalTitle.textContent = award;

        switch (award) {
            case "Eagle Scout":
                modalDescription.textContent = "Achievement of becoming an Eagle Scout, the highest rank in the Boy Scouts.";
                break;
            case "Outdoor Track State Champion/School Record Holder 1600M 2022":
                modalDescription.textContent = "Achieved first place in the state championship and set a school record.";
                break;
            case "Cross Country Section V Sportsmanship Award 2021":
                modalDescription.textContent = "Received for displaying exceptional sportsmanship in cross country.";
                break;
            case "Cross Country State Qualifier 2019, 2020, 2021":
                modalDescription.textContent = "Qualified for the state championship for three consecutive years.";
                break;
            case "2021 Indoor Track Sectional Champion 1000m, 1600m, 3200m":
                modalDescription.textContent = "Won sectional titles in multiple events during the indoor track season.";
                break;
            case "Principal's List Honors 2018-2022":
                modalDescription.textContent = "Recognized for outstanding academic performance over multiple years.";
                break;
            case "Newark Greater Chamber of Commerce Outstanding Student 2020-2021":
                modalDescription.textContent = "Awarded for demonstrating excellence in academic and extracurricular activities.";
                break;
            case "USA Triathlon Age Group National Qualifier 2020-2021":
                modalDescription.textContent = "Qualified to compete at the national level in triathlons.";
                break;
            default:
                modalDescription.textContent = "Details about this award are not available.";
        }

        modal.style.display = "block"; 
    }
});