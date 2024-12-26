document.getElementById('applicationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your application. We will review your submission and contact you shortly.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function selectTier(tierName) {
    const selectedTier = document.createElement('input');
    selectedTier.type = 'hidden';
    selectedTier.name = 'selectedTier';
    selectedTier.value = tierName;
    
    document.getElementById('applicationForm').appendChild(selectedTier);
    document.querySelector('#apply').scrollIntoView({ behavior: 'smooth' });
}

function registerEvent(eventName) {
    // Check if user is logged in (this would need to be implemented)
    const isLoggedIn = false; // This would be determined by your authentication system
    
    if (isLoggedIn) {
        alert(`Thank you for registering for ${eventName}. You will receive a confirmation email shortly.`);
    } else {
        alert('Please become a member to register for events. Redirecting to application form...');
        document.querySelector('#apply').scrollIntoView({ behavior: 'smooth' });
    }
}