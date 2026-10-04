
// Data structure for Roadmap Nodes
const roadmapData = {
    1: {
        title: "Basics of Python",
        level: "PYTHON BASICS",
        desc: "Learn how Python executes statements, outputs data to standard console, and handles user input formatting.",
        subtopics: ["Fundamentals:",
                    "Variables & Data Types",  
                    "Conditions & Loops",  
                    "Functions",  
                    "Lists, Tuples, Dictionaries & Sets",  
                    "List Comprehensions",  
                    "Indexing & Slicing",  
                    "Exception Handling",  
                    "Modules & Packages",  
                    "File Handling",  
                    "OOP Basics",  
                    "Virtual Environments & pip"],
        yt: "https://youtu.be/ix9cRaBkVe0?si=uE044hQ_aznjGJJH",
        gh: "https://docs.python.org/3",
        completed: true
    },  
    2: {
        title: "NumPy",
        level: "Library: NumPy",
        desc: "Understand NumPy arrays and their operations.",
        subtopics: ["Arrays",  
                    "Indexing & Slicing",  
                    "Reshaping",  
                    "Broadcasting",  
                    "Mathematical Operations"],
        yt: "https://youtu.be/VXU4LSAQDSc?si=kBNfCnSjXrrLkPj5",
        gh: "https://numpy.org/doc/stable/user/absolute_beginners.html",
        completed: true
    },
    3: {
        title: "Pandas",
        level: "Library: Pandas",
        desc: "understand Pandas DataFrames and their operations.",
        subtopics: ["Series & DataFrames",  
                    "Data Loading",  
                    "Filtering & Sorting",  
                    "Missing Values",  
                    "GroupBy",  
                    "Merging",  
                    "Data Cleaning"],
        yt: "https://youtu.be/VXtjG_GzO7Q?si=AdnxQ_-P3rXywGN2",
        gh: "https://pandas.pydata.org/docs/getting_started/index.html#getting-started",
        completed: false
    },
    4: {
        title: "Matplotlib",
        level: "Library: Matplotlib",
        desc: "Learn to create visualizations with Matplotlib.",
        subtopics: ["Line plots",  
                    "Bar plots",  
                    "Histograms",  
                    "Scatter plots",  
                    "Box plots" ],
        yt: "https://youtu.be/c9vhHUGdav0?si=SUW7KrsRWSpGsAW4",
        gh: "https://matplotlib.org/stable/",
        completed: false
    },
    5: {
        title: "Linear Algebra",
        level: "Math for ML",
        desc: "understand the fundamentals of linear algebra, which is essential for machine learning and data science.",
        subtopics: ["Vectors",  
                    "Matrices",  
                    "Matrix Operations",  
                    "Dot Product",  
                    "Eigenvalues & Eigenvectors"],
        yt: "#",
        gh: "#",
        completed: false
    },
    6: {
        title: "Probability & Statistics",
        level: "Math for ML",
        desc: "Learn the fundamentals of probability and statistics, which are essential for understanding machine learning models.",
        subtopics: ["Mean, Median, Variance",  
                    "Probability",  
                    "Distributions",  
                    "Correlation & Covariance",  
                    "Conditional Probability",  
                    "Bayes Theorem",  
                    "Basic Hypothesis Testing" ],
        yt: "#",
        gh: "#",
        completed: true
    },  
    7: {
        title: "Getting Into ML",
        level: "Machine Learning",
        desc: "Understand the basics of machine learning and how it applies to real-world problems.",
        subtopics: ["Dataset → EDA → Cleaning → Feature Engineering → Train/Test Split → Preprocessing → Model → Training → Prediction → Evaluation → Hyperparameter Tuning → Final"],
        yt: "https://youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcJgxHH&si=Iv0n0r-wP5DlSlR9",
        gh: "https://scikit-learn.org/stable/?utm_source=chatgpt.com",
        completed: true
    },
    8: {
        title: "Projects",
        level: "Projects",
        desc: "Apply your knowledge to build real-world machine learning projects.",
        subtopics: ["If-Elif-Else structures", "Logical operators (AND, OR, NOT)", "Nested evaluation"],
        yt: "https://www.youtube.com/results?search_query=python+conditionals",
        gh: "https://github.com/topics/python-programming",
        completed: false
    },
    9: {
        title: "Regression",
        level: "ML Algorithms",
        desc: "understand the basics of regression analysis, which is used to predict continuous outcomes based on input features.",
        subtopics: ["Linear Regression", 
                    "Polynomial Regression", 
                    "Ridge & Lasso Regression"],
        yt: "#",
        gh: "#",
        completed: false
    },
    10: {
        title: "Classification",
        level: "ML Algorithms",
        desc: "Learn about classification algorithms used to predict categorical outcomes.",
        subtopics: ["Logistic Regression", 
                    "KNN", 
                    "Naive Bayes", 
                    "Decision Trees", 
                    "Random Forest", 
                    "SVM"],
        yt: "#",
        gh: "#",
        completed: false
    },
    11: {
        title: "Ensemble Learning",
        level: "ML Algorithms",
        desc: "Learn how to combine multiple models to improve prediction performance.",
        subtopics: ["Bagging", 
                    "Boosting", 
                    "Gradient Boosting", 
                    "XGBoost"],
        yt: "#",
        gh: "#",
        completed: true
    },  
    12: {
        title: "Unsupervised Learning",
        level: "ML Algorithms",
        desc: "Understand the fundamentals of unsupervised learning techniques.",
        subtopics: ["K-Means", 
                    "Hierarchical Clustering", 
                    "DBSCAN", 
                    "PCA", 
                    "Anomaly Detection"],
        yt: "#",
        gh: "#",
        completed: true
    },
    13: {
        title: "Model Evaluation and Improvement",
        level: "ML Algorithms",
        desc: "understand how to evaluate and improve machine learning models using various metrics and techniques.",
        subtopics: [ "MAE MSE RMSE R²",  
                    "Accuracy",  
                    "Precision & Recall",  
                    "F1 Score",  
                    "Confusion Matrix",  
                    "ROC-AUC",  
                    "Cross Validation",  
                    "Feature Engineering",  
                    "Hyperparameter Tuning",  
                    "Data Leakage",  
                    "Class Imbalance",  ],
        yt: "#",
        gh: "#",
        completed: false
    },
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
function openNodeModal(nodeId) {
    const data = roadmapData[nodeId];
    if (!data) return;

    currentActiveNode = nodeId;
    document.getElementById('modal-level-badge').innerText = data.level;
    document.getElementById('modal-node-title').innerText = data.title;
    document.getElementById('modal-node-desc').innerText = data.desc;

    const subtopicsContainer = document.getElementById('modal-subtopics');
    subtopicsContainer.innerHTML = data.subtopics.map(sub => `
        <div class="flex items-center space-x-2 text-violet-200">
            <i class="fa-solid fa-circle-check text-violet-400 text-xs"></i>
            <span>${sub}</span>
        </div>
    `).join('');

    document.getElementById('modal-yt-link').href = data.yt;
    document.getElementById('modal-gh-link').href = data.gh;

    document.getElementById('node-modal').classList.remove('hidden');
}

function closeNodeModal() {
    document.getElementById('node-modal').classList.add('hidden');
}

function completeNodeAction() {
    if (currentActiveNode && roadmapData[currentActiveNode]) {
        roadmapData[currentActiveNode].completed = true;
        
        // const xpElem = document.getElementById('stat-xp');
        // let currentXP = parseInt(xpElem.innerText) || 350;
        // xpElem.innerText = `${currentXP + 50} XP`;

        // triggerConfetti();
        closeNodeModal();
    }
}

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
