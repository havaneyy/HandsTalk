// ============================================
// CATEGORY DATA
// ============================================
const categoryData = {
    alphabets: {
        title: 'Alphabets',
        icon: '🔤',
        items: [
            { label: 'A', image: 'sign-a.png' },
            { label: 'B', image: 'sign-b.png' },
            { label: 'C', image: 'sign-c.png' },
            { label: 'D', image: 'sign-d.png' },
            { label: 'E', image: 'sign-e.png' },
            { label: 'F', image: 'sign-f.png' },
            { label: 'G', image: 'sign-g.png' },
            { label: 'H', image: 'sign-h.png' },
            { label: 'I', image: 'sign-i.png' },
            { label: 'J', image: 'sign-j.png' },
            { label: 'K', image: 'sign-k.png' },
            { label: 'L', image: 'sign-l.png' },
            { label: 'M', image: 'sign-m.png' },
            { label: 'N', image: 'sign-n.png' },
            { label: 'O', image: 'sign-o.png' },
            { label: 'P', image: 'sign-p.png' }
        ]
    },
    numbers: {
        title: 'Numbers & Counting',
        icon: '🔢',
        items: [
            { label: '1', image: 'sign-1.png' },
            { label: '2', image: 'sign-2.png' },
            { label: '3', image: 'sign-3.png' },
            { label: '4', image: 'sign-4.png' },
            { label: '5', image: 'sign-5.png' },
            { label: '6', image: 'sign-6.png' },
            { label: '7', image: 'sign-7.png' },
            { label: '8', image: 'sign-8.png' },
            { label: '9', image: 'sign-9.png' },
            { label: '10', image: 'sign-10.png' }
        ]
    },
    greetings: {
        title: 'Greetings & Social Graces',
        icon: '👋',
        items: [
            { label: 'Hello', image: 'sign-hello.png' },
            { label: 'Goodbye', image: 'sign-goodbye.png' },
            { label: 'Thank You', image: 'sign-thankyou.png' },
            { label: 'Please', image: 'sign-please.png' },
            { label: 'Nice to Meet You', image: 'sign-nice.png' },
            { label: 'How Are You', image: 'sign-howareyou.png' }
        ]
    },
    personal: {
        title: 'Personal Information',
        icon: '👤',
        items: [
            { label: 'Name', image: 'sign-name.png' },
            { label: 'Age', image: 'sign-age.png' },
            { label: 'Birthday', image: 'sign-birthday.png' },
            { label: 'Address', image: 'sign-address.png' },
            { label: 'Phone', image: 'sign-phone.png' },
            { label: 'Email', image: 'sign-email.png' }
        ]
    },
    family: {
        title: 'Family & People',
        icon: '👨‍👩‍👧‍👦',
        items: [
            { label: 'Mother', image: 'sign-mother.png' },
            { label: 'Father', image: 'sign-father.png' },
            { label: 'Sister', image: 'sign-sister.png' },
            { label: 'Brother', image: 'sign-brother.png' },
            { label: 'Grandmother', image: 'sign-grandma.png' },
            { label: 'Grandfather', image: 'sign-grandpa.png' }
        ]
    },
    time: {
        title: 'Time & Days',
        icon: '⏰',
        items: [
            { label: 'Monday', image: 'sign-monday.png' },
            { label: 'Tuesday', image: 'sign-tuesday.png' },
            { label: 'Wednesday', image: 'sign-wednesday.png' },
            { label: 'Thursday', image: 'sign-thursday.png' },
            { label: 'Friday', image: 'sign-friday.png' },
            { label: 'Saturday', image: 'sign-saturday.png' }
        ]
    },
    actions: {
        title: 'Common Actions',
        icon: '🎬',
        items: [
            { label: 'Walk', image: 'sign-walk.png' },
            { label: 'Run', image: 'sign-run.png' },
            { label: 'Jump', image: 'sign-jump.png' },
            { label: 'Sit', image: 'sign-sit.png' },
            { label: 'Stand', image: 'sign-stand.png' },
            { label: 'Eat', image: 'sign-eat.png' }
        ]
    },
    emotions: {
        title: 'Feelings & Emotions',
        icon: '😊',
        items: [
            { label: 'Happy', image: 'sign-happy.png' },
            { label: 'Sad', image: 'sign-sad.png' },
            { label: 'Angry', image: 'sign-angry.png' },
            { label: 'Surprised', image: 'sign-surprised.png' },
            { label: 'Tired', image: 'sign-tired.png' },
            { label: 'Excited', image: 'sign-excited.png' }
        ]
    },
    foods: {
        title: 'Foods & Drinks',
        icon: '🍎',
        items: [
            { label: 'Bread', image: 'sign-bread.png' },
            { label: 'Milk', image: 'sign-milk.png' },
            { label: 'Apple', image: 'sign-apple.png' },
            { label: 'Banana', image: 'sign-banana.png' },
            { label: 'Water', image: 'sign-water.png' },
            { label: 'Coffee', image: 'sign-coffee.png' }
        ]
    },
    places: {
        title: 'Places & Directions',
        icon: '🗺️',
        items: [
            { label: 'Home', image: 'sign-home.png' },
            { label: 'School', image: 'sign-school.png' },
            { label: 'Hospital', image: 'sign-hospital.png' },
            { label: 'Store', image: 'sign-store.png' },
            { label: 'Left', image: 'sign-left.png' },
            { label: 'Right', image: 'sign-right.png' }
        ]
    },
    colors: {
        title: 'Colors',
        icon: '🎨',
        items: [
            { label: 'Red', image: 'sign-red.png' },
            { label: 'Blue', image: 'sign-blue.png' },
            { label: 'Yellow', image: 'sign-yellow.png' },
            { label: 'Green', image: 'sign-green.png' },
            { label: 'Black', image: 'sign-black.png' },
            { label: 'White', image: 'sign-white.png' }
        ]
    },
    nature: {
        title: 'Weather & Nature',
        icon: '🌤️',
        items: [
            { label: 'Sunny', image: 'sign-sunny.png' },
            { label: 'Rainy', image: 'sign-rainy.png' },
            { label: 'Cloudy', image: 'sign-cloudy.png' },
            { label: 'Snow', image: 'sign-snow.png' },
            { label: 'Wind', image: 'sign-wind.png' },
            { label: 'Tree', image: 'sign-tree.png' }
        ]
    }
};

// ============================================
// SIDEBAR CLICK HANDLERS
// ============================================
document.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', function() {
        const categoryKey = this.getAttribute('data-category');
        
        // Remove active class from all items
        document.querySelectorAll('.sidebar-item').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked item
        this.classList.add('active');
        
        // Update content
        updateCategory(categoryKey);
    });
});

// ============================================
// UPDATE CATEGORY CONTENT
// ============================================
function updateCategory(categoryKey) {
    const category = categoryData[categoryKey];
    
    if (!category) return;
    
    // Update header
    const categoryHeader = document.querySelector('.category-header');
    categoryHeader.innerHTML = `
        <div class="category-icon">${category.icon}</div>
        <h2>${category.title}</h2>
    `;
    
    // Update grid
    const signsGrid = document.querySelector('.signs-grid');
    signsGrid.innerHTML = '';
    
    category.items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'sign-card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.innerHTML = `
            <div class="sign-image">
                <img src="${item.image}" alt="${item.label}">
            </div>
            <p class="sign-label">${item.label}</p>
        `;
        signsGrid.appendChild(card);
    });
}

// ============================================
// SMOOTH SCROLL & NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// SIGN CARD CLICK - OPTIONAL: OPEN DETAIL VIEW
// ============================================
document.addEventListener('click', function(e) {
    if (e.target.closest('.sign-card')) {
        const card = e.target.closest('.sign-card');
        const label = card.querySelector('.sign-label').textContent;
        console.log('Clicked sign:', label);
        // You can add modal or detail view here
    }
});

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0.95';
