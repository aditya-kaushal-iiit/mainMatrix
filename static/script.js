
// Data structure for Roadmap Nodes
const roadmapData = {
    1: {
        title: "1. Print Statements & Basic I/O",
        level: "LEVEL 1: PYTHON BASICS",
        desc: "Learn how Python executes statements, outputs data to standard console, and handles user input formatting.",
        subtopics: ["print() syntax & f-strings", "Escaping characters & formatting", "Console input() handling"],
        yt: "https://www.youtube.com/results?search_query=python+print+statements+beginner",
        gh: "https://github.com/topics/python-basics",
        completed: true
    },
    2: {
        title: "2. Variables & Data Types",
        level: "LEVEL 1: PYTHON BASICS",
        desc: "Understand integers, floats, booleans, strings, and Python dynamic typing semantics.",
        subtopics: ["Integers & Floats", "Strings & Operations", "Type casting & mutability"],
        yt: "https://www.youtube.com/results?search_query=python+variables+and+data+types",
        gh: "https://github.com/topics/python-fundamentals",
        completed: true
    },
    3: {
        title: "3. Conditionals & Logic",
        level: "LEVEL 1: PYTHON BASICS",
        desc: "Master if, elif, else statements and logical boolean operations.",
        subtopics: ["If-Elif-Else structures", "Logical operators (AND, OR, NOT)", "Nested evaluation"],
        yt: "https://www.youtube.com/results?search_query=python+conditionals",
        gh: "https://github.com/topics/python-programming",
        completed: false
    },
    4: {
        title: "4. Loops & Iterations",
        level: "LEVEL 1: PYTHON BASICS",
        desc: "Learn iterative execution with For loops, While loops, break, and continue statements.",
        subtopics: ["For loops & range()", "While loop break/continue", "Iterating over collections"],
        yt: "https://www.youtube.com/results?search_query=python+loops+tutorial",
        gh: "https://github.com/topics/python",
        completed: false
    },
    5: {
        title: "5. Lists & Dictionaries",
        level: "LEVEL 1: PYTHON BASICS",
        desc: "Core data structures: Lists, Dictionaries, Tuples, and Sets in Python.",
        subtopics: ["List indexing & slicing", "Dictionary key-value pairs", "List comprehensions"],
        yt: "https://www.youtube.com/results?search_query=python+lists+and+dictionaries",
        gh: "https://github.com/topics/python-data-structures",
        completed: false
    }
};

let currentActiveNode = null;
let currentTargetProject = "";
let currentRequiredSkills = [];

// Tab Switcher
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-violet-600', 'text-white', 'shadow-md');
        btn.classList.add('text-violet-300');
    });

    document.getElementById(`tab-${tabId}`).classList.remove('hidden');
    const activeNav = document.getElementById(`nav-${tabId}`);
    if (activeNav) {
        activeNav.classList.add('bg-violet-600', 'text-white', 'shadow-md');
        activeNav.classList.remove('text-violet-300');
    }

    document.getElementById('mobile-menu').classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
}

// Project Filter Tab
function filterProjects(status) {
    const activeBtn = document.getElementById('proj-filter-active');
    const completedBtn = document.getElementById('proj-filter-completed');
    const activeCards = document.querySelectorAll('.active-proj');
    const completedCards = document.querySelectorAll('.completed-proj');

    if (status === 'active') {
        activeBtn.classList.add('bg-violet-600', 'text-white');
        activeBtn.classList.remove('text-violet-300');
        completedBtn.classList.remove('bg-violet-600', 'text-white');
        completedBtn.classList.add('text-violet-300');

        activeCards.forEach(c => c.classList.remove('hidden'));
        completedCards.forEach(c => c.classList.add('hidden'));
    } else {
        completedBtn.classList.add('bg-violet-600', 'text-white');
        completedBtn.classList.remove('text-violet-300');
        activeBtn.classList.remove('bg-violet-600', 'text-white');
        activeBtn.classList.add('text-violet-300');

        completedCards.forEach(c => c.classList.remove('hidden'));
        activeCards.forEach(c => c.classList.add('hidden'));
    }
}

// Open Node Modal
// function openNodeModal(nodeId) {
//     const data = roadmapData[nodeId];
//     if (!data) return;

//     currentActiveNode = nodeId;
//     document.getElementById('modal-level-badge').innerText = data.level;
//     document.getElementById('modal-node-title').innerText = data.title;
//     document.getElementById('modal-node-desc').innerText = data.desc;

//     const subtopicsContainer = document.getElementById('modal-subtopics');
//     subtopicsContainer.innerHTML = data.subtopics.map(sub => `
//         <div class="flex items-center space-x-2 text-violet-200">
//             <i class="fa-solid fa-circle-check text-violet-400 text-xs"></i>
//             <span>${sub}</span>
//         </div>
//     `).join('');

//     document.getElementById('modal-yt-link').href = data.yt;
//     document.getElementById('modal-gh-link').href = data.gh;

//     document.getElementById('node-modal').classList.remove('hidden');
// }

// function closeNodeModal() {
//     document.getElementById('node-modal').classList.add('hidden');
// }

// function completeNodeAction() {
//     if (currentActiveNode && roadmapData[currentActiveNode]) {
//         roadmapData[currentActiveNode].completed = true;
        
//         const xpElem = document.getElementById('stat-xp');
//         let currentXP = parseInt(xpElem.innerText) || 350;
//         xpElem.innerText = `${currentXP + 50} XP`;

//         triggerConfetti();
//         closeNodeModal();

//         showAlertModal("Level Milestone Completed!", "Great work! You earned +50 XP on your AI–ML journey.");
//     }
// }

// Open Skill Checker Modal
function openSkillChecker(projectName, skills) {
    currentTargetProject = projectName;
    currentRequiredSkills = skills;

    document.getElementById('skill-project-name').innerText = `Contribute to ${projectName}`;
    
    const container = document.getElementById('skill-checkbox-container');
    container.innerHTML = skills.map((skill) => `
        <label class="flex items-center space-x-3 p-3 rounded-xl bg-violet-900/40 border border-violet-800 cursor-pointer hover:bg-violet-800/40">
            <input type="checkbox" value="${skill}" onchange="updateSkillMatchScore()" class="skill-chk w-4 h-4 text-violet-600 rounded focus:ring-violet-500 bg-violet-950 border-violet-700">
            <span class="text-xs font-semibold text-white">${skill}</span>
        </label>
    `).join('');

    updateSkillMatchScore();
    document.getElementById('skill-modal').classList.remove('hidden');
}

function closeSkillModal() {
    document.getElementById('skill-modal').classList.add('hidden');
}

function updateSkillMatchScore() {
    const checkboxes = document.querySelectorAll('.skill-chk');
    let checked = 0;
    checkboxes.forEach(c => { if(c.checked) checked++; });

    const matchPercent = Math.round((checked / checkboxes.length) * 100) || 0;
    document.getElementById('skill-match-percent').innerText = `${matchPercent}%`;
    document.getElementById('skill-progress-bar').style.width = `${matchPercent}%`;
}

function evaluateSkillMatch() {
    const checkboxes = document.querySelectorAll('.skill-chk');
    let checked = 0;
    checkboxes.forEach(c => { if(c.checked) checked++; });

    const matchPercent = Math.round((checked / checkboxes.length) * 100) || 0;

    closeSkillModal();

    if (matchPercent >= 75) {
        switchTab('recruitment');
        showAlertModal("Qualified Contributor!", `Awesome match (${matchPercent}%)! Complete the recruitment form to register as a project contributor.`);
    } else {
        showAlertModal("Skill Check Recommendation", `Your score is ${matchPercent}%. Explore our Roadmap section to level up key tools before contributing.`);
    }
}

// Form Submit Handler
// function handleRecruitmentSubmit(e) {
//     e.preventDefault();
//     triggerConfetti();
//     showAlertModal("Application Received!", "Welcome! Your application has been logged for the AI–ML Club at IIIT Bhopal. The founding team will reach out soon.");
//     document.getElementById('recruitment-form').reset();
// }

// Alert Modal Helper
function showAlertModal(title, msg) {
    document.getElementById('alert-title').innerText = title;
    document.getElementById('alert-msg').innerText = msg;
    document.getElementById('alert-modal').classList.remove('hidden');
}

function closeAlertModal() {
    document.getElementById('alert-modal').classList.add('hidden');
}

// Simple Canvas Confetti Effect
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#7C3AED', '#A78BFA', '#10B981', '#06B6D4', '#F59E0B'];

    for (let i = 0; i < 75; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 4 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 6 + 4
        });
    }

    let frame = 0;
    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        frame++;
        if (frame < 120) {
            requestAnimationFrame(render);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    render();
}

window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});