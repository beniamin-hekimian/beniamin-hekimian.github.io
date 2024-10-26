document.addEventListener("DOMContentLoaded", function () {
    // Get all filter checkboxes
    const checkboxes = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');

    // Function to filter the events
    function filterEvents() {
        // Get all selected (checked) categories
        const selectedCategories = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedCategories.push(checkbox.id.split('-')[0]);  // Get the category part of the id
            }
        });

        // Get all event sections
        const timelineEvents = document.querySelectorAll('.timeline .event');

        // Loop through the timeline events and toggle visibility
        let visibleEventCount = 0;
        timelineEvents.forEach(event => {
            const eventCategory = event.getAttribute('data-category');

            // Show or hide based on whether the category is selected
            if (selectedCategories.includes(eventCategory)) {
                event.style.display = 'block';  // Show the event
                event.classList.remove('left', 'right'); // Reset class

                // Apply left-right classes based on visible event count
                if (visibleEventCount % 2 === 0) {
                    event.classList.add('left');
                } else {
                    event.classList.add('right');
                }

                visibleEventCount++;
            } else {
                event.style.display = 'none';  // Hide the event
            }
        });
    }

    // Attach change event listeners to all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterEvents);
    });

    // Initialize filter to apply default settings
    filterEvents();
});
