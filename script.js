// Live Time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('live-time').textContent = timeString;
}
setInterval(updateTime, 1000);
updateTime();

// Motivational Quotes (one for each day)
const quotes = {
    Saturday: "Start your weekend strong!",
    Sunday: "Push yourself, because no one else is going to do it for you.",
    Monday: "New week, new goals!",
    Tuesday: "Keep going, you're halfway there!",
    Wednesday: "Stay consistent, results are coming!",
    Thursday: "Finish the week strong!"
};

// Routine Data
const routines = {
    Saturday: `
        <h2>Morning Routine</h2>
        <p>6:00 AM – Wake up, Fajr prayer</p>
        <p>6:15 – 6:45 AM – Workout (Light stretching, height growth)</p>
        <p>6:45 – 7:00 AM – Shower, skincare, hygiene</p>
        <p>7:00 – 7:20 AM – Breakfast</p>
        <p>7:20 – 7:40 AM – Quran reading (Recitation & meaning)</p>
        <p>7:40 – 8:00 AM – Study (Revision: Bangla, English, Quran recitation)</p>
        <h2>Daytime</h2>
        <p>Relax, personal projects, or light activities (No school)</p>
        <h2>Evening Routine</h2>
        <p>5:30 PM – Light snack, rest</p>
        <p>6:30 – 7:00 PM – Workout (Light stretching, height growth)</p>
        <p>7:00 – 7:20 PM – Shower, freshen up</p>
        <p>7:20 – 7:30 PM – Maghrib prayer</p>
        <p>7:30 – 8:00 PM – Dinner</p>
        <p>8:00 – 9:30 PM – Study (Math, Science, ICT, coding)</p>
        <p>9:30 – 9:45 PM – Isha prayer + Quran reading</p>
        <p>9:45 – 10:00 PM – Free time (Relax, coding, mobile)</p>
        <p>10:00 PM – Sleep</p>
    `,
    Sunday: `
        <h2>Morning Routine</h2>
        <p>6:00 AM – Wake up, Fajr prayer</p>
        <p>6:15 – 6:45 AM – Workout (Full-body, fat loss)</p>
        <p>6:45 – 7:00 AM – Shower, skincare, hygiene</p>
        <p>7:00 – 7:20 AM – Breakfast</p>
        <p>7:20 – 7:40 AM – Quran reading (Recitation & meaning)</p>
        <p>7:40 – 8:00 AM – Study (Revision: Bangla, English, Quran recitation)</p>
        <h2>Coaching</h2>
        <p>8:00 – 11:00 AM – Coaching</p>
        <h2>School</h2>
        <p>11:30 AM – Light lunch before leaving</p>
        <p>12:00 – 5:00 PM – School (Duhr & Asr prayers in school)</p>
        <h2>Evening Routine</h2>
        <p>5:30 PM – Arrive home, light snack, rest</p>
        <p>6:30 – 7:00 PM – Workout (Biceps, height growth)</p>
        <p>7:00 – 7:20 PM – Shower, freshen up</p>
        <p>7:20 – 7:30 PM – Maghrib prayer</p>
        <p>7:30 – 8:00 PM – Dinner</p>
        <p>8:00 – 9:30 PM – Study (Math, Science, ICT, coding)</p>
        <p>9:30 – 9:45 PM – Isha prayer + Quran reading</p>
        <p>9:45 – 10:00 PM – Free time (Relax, coding, mobile)</p>
        <p>10:00 PM – Sleep</p>
    `,
    Monday: `
        <h2>Morning Routine</h2>
        <p>6:00 AM – Wake up, Fajr prayer</p>
        <p>6:15 – 6:45 AM – Workout (Strength: Biceps, chest, core)</p>
        <p>6:45 – 7:00 AM – Shower, skincare, hygiene</p>
        <p>7:00 – 7:20 AM – Breakfast</p>
        <p>7:20 – 7:40 AM – Quran reading (Recitation & meaning)</p>
        <p>7:40 – 8:00 AM – Study (Revision: Bangla, English, Quran recitation)</p>
        <h2>School</h2>
        <p>11:30 AM – Light lunch before leaving</p>
        <p>12:00 – 5:00 PM – School (Duhr & Asr prayers in school)</p>
        <h2>Evening Routine</h2>
        <p>5:30 PM – Arrive home, light snack, rest</p>
        <p>6:30 – 7:00 PM – Workout (Biceps, height growth)</p>
        <p>7:00 – 7:20 PM – Shower, freshen up</p>
        <p>7:20 – 7:30 PM – Maghrib prayer</p>
        <p>7:30 – 8:00 PM – Dinner</p>
        <p>8:00 – 9:30 PM – Study (Math, Science, ICT, coding)</p>
        <p>9:30 – 9:45 PM – Isha prayer + Quran reading</p>
        <p>9:45 – 10:00 PM – Free time (Relax, coding, mobile)</p>
        <p>10:00 PM – Sleep</p>
    `,
    Tuesday: `
        <h2>Morning Routine</h2>
        <p>6:00 AM – Wake up, Fajr prayer</p>
        <p>6:15 – 6:45 AM – Workout (Full-body, fat loss)</p>
        <p>6:45 – 7:00 AM – Shower, skincare, hygiene</p>
        <p>7:00 – 7:20 AM – Breakfast</p>
        <p>7:20 – 7:40 AM – Quran reading (Recitation & meaning)</p>
        <p>7:40 – 8:00 AM – Study (Revision: Bangla, English, Quran recitation)</p>
        <h2>Coaching</h2>
        <p>8:00 – 11:00 AM – Coaching</p>
        <h2>School</h2>
        <p>11:30 AM – Light lunch before leaving</p>
        <p>12:00 – 5:00 PM – School (Duhr & Asr prayers in school)</p>
        <h2>Evening Routine</h2>
        <p>5:30 PM – Arrive home, light snack, rest</p>
        <p>6:30 – 7:00 PM – Workout (Biceps, height growth)</p>
        <p>7:00 – 7:20 PM – Shower, freshen up</p>
        <p>7:20 – 7:30 PM – Maghrib prayer</p>
        <p>7:30 – 8:00 PM – Dinner</p>
        <p>8:00 – 9:30 PM – Study (Math, Science, ICT, coding)</p>
        <p>9:30 – 9:45 PM – Isha prayer + Quran reading</p>
        <p>9:45 – 10:00 PM – Free time (Relax, coding, mobile)</p>
        <p>10:00 PM – Sleep</p>
    `,
    Wednesday: `
        <h2>Morning Routine</h2>
        <p>6:00 AM – Wake up, Fajr prayer</p>
        <p>6:15 – 6:45 AM – Workout (Strength: Biceps, chest, core)</p>
        <p>6:45 – 7:00 AM – Shower, skincare, hygiene</p>
        <p>7:00 – 7:20 AM – Breakfast</p>
        <p>7:20 – 7:40 AM – Quran reading (Recitation & meaning)</p>
        <p>7:40 – 8:00 AM – Study (Revision: Bangla, English, Quran recitation)</p>
        <h2>School</h2>
        <p>11:30 AM – Light lunch before leaving</p>
        <p>12:00 – 5:00 PM – School (Duhr & Asr prayers in school)</p>
        <h2>Evening Routine</h2>
        <p>5:30 PM – Arrive home, light snack, rest</p>
        <p>6:30 – 7:00 PM – Workout (Biceps, height growth)</p>
        <p>7:00 – 7:20 PM – Shower, freshen up</p>
        <p>7:20 – 7:30 PM – Maghrib prayer</p>
        <p>7:30 – 8:00 PM – Dinner</p>
        <p>8:00 – 9:30 PM – Study (Math, Science, ICT, coding)</p>
        <p>9:30 – 9:45 PM – Isha prayer + Quran reading</p>
        <p>9:45 – 10:00 PM – Free time (Relax, coding, mobile)</p>
        <p>10:00 PM – Sleep</p>
    `,
    Thursday: `
        <h2>Morning Routine</h2>
        <p>6:00 AM – Wake up, Fajr prayer</p>
        <p>6:15 – 6:45 AM – Workout (Full-body, fat loss)</p>
        <p>6:45 – 7:00 AM – Shower, skincare, hygiene</p>
        <p>7:00 – 7:20 AM – Breakfast</p>
        <p>7:20 – 7:40 AM – Quran reading (Recitation & meaning)</p>
        <p>7:40 – 8:00 AM – Study (Revision: Bangla, English, Quran recitation)</p>
        <h2>Coaching</h2>
        <p>8:00 – 11:00 AM – Coaching</p>
        <h2>School</h2>
        <p>11:30 AM – Light lunch before leaving</p>
        <p>12:00 – 5:00 PM – School (Duhr & Asr prayers in school)</p>
        <h2>Evening Routine</h2>
        <p>5:30 PM – Arrive home, light snack, rest</p>
        <p>6:30 – 7:00 PM – Workout (Biceps, height growth)</p>
        <p>7:00 – 7:20 PM – Shower, freshen up</p>
        <p>7:20 – 7:30 PM – Maghrib prayer</p>
        <p>7:30 – 8:00 PM – Dinner</p>
        <p>8:00 – 9:30 PM – Study (Math, Science, ICT, coding)</p>
        <p>9:30 – 9:45 PM – Isha prayer + Quran reading</p>
        <p>9:45 – 10:00 PM – Free time (Relax, coding, mobile)</p>
        <p>10:00 PM – Sleep</p>
    `
};

// Workout Plans
const workouts = {
    Saturday: `
        <h3>Morning Workout (Light Stretching, Height Growth)</h3>
        <p>1. Cobra Stretch – 30 seconds (Spine flexibility, height improvement)</p>
        <p>2. Standing Toe Touch – 3 sets of 10 (Hamstring stretch, posture)</p>
        <p>3. Side Stretches – 2 sets of 15 seconds each side (Flexibility, height growth)</p>
        <p>4. Cooldown Stretches – 2 minutes (Flexibility & Recovery)</p>
        <h3>Evening Workout (Light Stretching, Height Growth)</h3>
        <p>1. Hanging (if possible) – 30 seconds (Height growth, spine stretch)</p>
        <p>2. Cobra Stretch – 30 seconds (Spine flexibility, height improvement)</p>
        <p>3. Standing Toe Touch – 3 sets of 10 (Hamstring stretch, posture)</p>
        <p>4. Side Stretches – 2 sets of 15 seconds each side (Flexibility, height growth)</p>
    `,
    Sunday: `
        <h3>Morning Workout (Full-Body Fat Loss)</h3>
        <p>1. Jump Rope / Jumping Jacks – 3 minutes (Warm-up)</p>
        <p>2. High Knees – 3 sets of 30 seconds</p>
        <p>3. Plank – 30 seconds</p>
        <p>4. Push-ups – 3 sets of 10</p>
        <p>5. Squats – 3 sets of 15</p>
        <p>6. Lunges – 3 sets of 10 per leg</p>
        <p>7. Mountain Climbers – 3 sets of 20</p>
        <p>8. Cooldown Stretches – 2 minutes</p>
        <h3>Evening Workout (Biceps, Height Growth)</h3>
        <p>1. Push-ups (Wide & Close Grip) – 3 sets of 10</p>
        <p>2. Arm Circles – 2 minutes</p>
        <p>3. Wall Push-ups – 3 sets of 15</p>
        <p>4. Superman Hold – 30 seconds</p>
        <p>5. Hanging (if possible) – 30 seconds</p>
        <p>6. Cobra Stretch – 30 seconds</p>
        <p>7. Standing Toe Touch – 3 sets of 10</p>
        <p>8. Side Stretches – 2 sets of 15 seconds each side</p>
    `,
    Monday: `
        <h3>Morning Workout (Strength: Biceps, Chest, Core)</h3>
        <p>1. Push-ups (Wide & Close Grip) – 3 sets of 10</p>
        <p>2. Plank – 30 seconds</p>
        <p>3. Arm Circles – 2 minutes</p>
        <p>4. Wall Push-ups – 3 sets of 15</p>
        <h3>Evening Workout (Biceps, Height Growth)</h3>
        <p>1. Push-ups (Wide & Close Grip) – 3 sets of 10</p>
        <p>2. Arm Circles – 2 minutes</p>
        <p>3. Wall Push-ups – 3 sets of 15</p>
        <p>4. Superman Hold – 30 seconds</p>
        <p>5. Hanging (if possible) – 30 seconds</p>
        <p>6. Cobra Stretch – 30 seconds</p>
        <p>7. Standing Toe Touch – 3 sets of 10</p>
        <p>8. Side Stretches – 2 sets of 15 seconds each side</p>
    `,
    Tuesday: `
        <h3>Morning Workout (Full-Body Fat Loss)</h3>
        <p>1. Jump Rope / Jumping Jacks – 3 minutes (Warm-up)</p>
        <p>2. High Knees – 3 sets of 30 seconds</p>
        <p>3. Plank – 30 seconds</p>
        <p>4. Push-ups – 3 sets of 10</p>
        <p>5. Squats – 3 sets of 15</p>
        <p>6. Lunges – 3 sets of 10 per leg</p>
        <p>7. Mountain Climbers – 3 sets of 20</p>
        <p>8. Cooldown Stretches – 2 minutes</p>
        <h3>Evening Workout (Biceps, Height Growth)</h3>
        <p>1. Push-ups (Wide & Close Grip) – 3 sets of 10</p>
        <p>2. Arm Circles – 2 minutes</p>
        <p>3. Wall Push-ups – 3 sets of 15</p>
        <p>4. Superman Hold – 30 seconds</p>
        <p>5. Hanging (if possible) – 30 seconds</p>
        <p>6. Cobra Stretch – 30 seconds</p>
        <p>7. Standing Toe Touch – 3 sets of 10</p>
        <p>8. Side Stretches – 2 sets of 15 seconds each side</p>
    `,
    Wednesday: `
        <h3>Morning Workout (Strength: Biceps, Chest, Core)</h3>
        <p>1. Push-ups (Wide & Close Grip) – 3 sets of 10</p>
        <p>2. Plank – 30 seconds</p>
        <p>3. Arm Circles – 2 minutes</p>
        <p>4. Wall Push-ups – 3 sets of 15</p>
        <h3>Evening Workout (Biceps, Height Growth)</h3>
        <p>1. Push-ups (Wide & Close Grip) – 3 sets of 10</p>
        <p>2. Arm Circles – 2 minutes</p>
        <p>3. Wall Push-ups – 3 sets of 15</p>
        <p>4. Superman Hold – 30 seconds</p>
        <p>5. Hanging (if possible) – 30 seconds</p>
        <p>6. Cobra Stretch – 30 seconds</p>
        <p>7. Standing Toe Touch – 3 sets of 10</p>
        <p>8. Side Stretches – 2 sets of 15 seconds each side</p>
    `,
    Thursday: `
        <h3>Morning Workout (Full-Body Fat Loss)</h3>
        <p>1. Jump Rope / Jumping Jacks – 3 minutes (Warm-up)</p>
        <p>2. High Knees – 3 sets of 30 seconds</p>
        <p>3. Plank – 30 seconds</p>
        <p>4. Push-ups – 3 sets of 10</p>
        <p>5. Squats – 3 sets of 15</p>
        <p>6. Lunges – 3 sets of 10 per leg</p>
        <p>7. Mountain Climbers – 3 sets of 20</p>
        <p>8. Cooldown Stretches – 2 minutes</p>
        <h3>Evening Workout (Biceps, Height Growth)</h3>
        <p>1. Push-ups (Wide & Close Grip) – 3 sets of 10</p>
        <p>2. Arm Circles – 2 minutes</p>
        <p>3. Wall Push-ups – 3 sets of 15</p>
        <p>4. Superman Hold – 30 seconds</p>
        <p>5. Hanging (if possible) – 30 seconds</p>
        <p>6. Cobra Stretch – 30 seconds</p>
        <p>7. Standing Toe Touch – 3 sets of 10</p>
        <p>8. Side Stretches – 2 sets of 15 seconds each side</p>
    `
};

// Day Button Click Handler
const dayButtons = document.querySelectorAll('.day-btn');
let currentDay = 'Sunday'; // Default day

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentDay = button.dataset.day;
        document.getElementById('routine-content').innerHTML = routines[currentDay] || '<p>No routine available for this day.</p>';
        document.getElementById('quote').textContent = quotes[currentDay] || 'Stay motivated!';
        document.getElementById('workout-content').innerHTML = workouts[currentDay] || '<p>No workout plan for this day.</p>';
    });
});

// Default load
document.getElementById('routine-content').innerHTML = routines[currentDay];
document.getElementById('quote').textContent = quotes[currentDay];
document.getElementById('workout-content').innerHTML = workouts[currentDay];

// Tab Click Handler for Diet and Workout Plans
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetId = tab.dataset.target;
        const targetSection = document.getElementById(targetId);
        const allSections = document.querySelectorAll('.plan-section');

        allSections.forEach(section => {
            section.classList.add('hidden');
        });

        targetSection.classList.remove('hidden');
    });
});
