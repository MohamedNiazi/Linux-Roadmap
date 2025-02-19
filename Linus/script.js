document.addEventListener("DOMContentLoaded", function () {
    const courses = [
        { title: "Linux Essentials", url: "https://linux.org", completed: false, timestamp: "2025-02-20" },
        { title: "Server Management", url: "https://serveracademy.com", completed: false, timestamp: "2025-02-22" },
        { title: "Web Hosting & Deployment", url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side", completed: false, timestamp: "2025-02-25" }
    ];

    function loadCourses() {
        const roadmap = document.getElementById("roadmap");
        roadmap.innerHTML = "";

        courses.forEach((course, index) => {
            const div = document.createElement("div");
            div.classList.add("course");
            if (course.completed) div.classList.add("completed");

            div.innerHTML = `
                <h2>${course.title}</h2>
                <p><a href="${course.url}" target="_blank">Visit Course</a></p>
                <p>Planned Date: ${course.timestamp}</p>
                <button onclick="toggleCompletion(${index})">${course.completed ? "Mark as Incomplete" : "Mark as Completed"}</button>
            `;

            roadmap.appendChild(div);
        });
    }

    window.toggleCompletion = function (index) {
        courses[index].completed = !courses[index].completed;
        loadCourses();
    };

    window.searchCourses = function () {
        const query = document.getElementById("search").value.toLowerCase();
        const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(query));
        
        document.getElementById("roadmap").innerHTML = "";
        filteredCourses.forEach((course, index) => {
            const div = document.createElement("div");
            div.classList.add("course");
            if (course.completed) div.classList.add("completed");

            div.innerHTML = `
                <h2>${course.title}</h2>
                <p><a href="${course.url}" target="_blank">Visit Course</a></p>
                <p>Planned Date: ${course.timestamp}</p>
                <button onclick="toggleCompletion(${index})">${course.completed ? "Mark as Incomplete" : "Mark as Completed"}</button>
            `;

            document.getElementById("roadmap").appendChild(div);
        });
    };

    loadCourses();
});
