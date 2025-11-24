        let students = [];

        function calculateGrade(marks) {
            if (marks >= 90) return "A+";
            if (marks >= 80) return "A";
            if (marks >= 70) return "B";
            if (marks >= 60) return "C";
            if (marks >= 50) return "D";
            return "F";
        }

        function addStudent() {
            const name = document.getElementById("studentName").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const marks = parseInt(document.getElementById("marks").value);

            if (!name || !subject || isNaN(marks)) {
                alert("Please fill all fields correctly.");
                return;
            }

            if (marks < 0 || marks > 100) {
                alert("Marks must be between 0 and 100.");
                return;
            }

            const grade = calculateGrade(marks);
            students.push({ name, subject, marks, grade });

            displayStudents();
            calculateAverage();
            showTopStudents();

            document.getElementById("studentName").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("marks").value = "";
        }

        function displayStudents() {
            const table = document.getElementById("studentTable");
            table.innerHTML = "";

            students.forEach((s, index) => {
                table.innerHTML += `
                    <tr>
                        <td>${s.name}</td>
                        <td>${s.subject}</td>
                        <td>${s.marks}</td>
                        <td>${s.grade}</td>
                        <td>
                            <button class="edit-btn" onclick="editRow(${index})">Edit</button>
                        </td>
                        <td>
                            <button class="delete-btn" onclick="deleteRow(${index})">X</button>
                        </td>
                    </tr>
                `;
            });
        }

        function deleteRow(index) {
            students.splice(index, 1);
            displayStudents();
            calculateAverage();
            showTopStudents();
        }

        function editRow(index) {
            const s = students[index];

            document.getElementById("studentName").value = s.name;
            document.getElementById("subject").value = s.subject;
            document.getElementById("marks").value = s.marks;

            students.splice(index, 1);
            displayStudents();
            calculateAverage();
            showTopStudents();
        }

        function calculateAverage() {
            if (students.length === 0) {
                document.getElementById("average").innerText = "Average Marks: -";
                return;
            }

            const sum = students.reduce((a, b) => a + b.marks, 0);
            const avg = (sum / students.length).toFixed(2);

            document.getElementById("average").innerText = `Average Marks: ${avg}`;
        }

        function showTopStudents() {
            if (students.length === 0) {
                document.getElementById("topStudents").innerText = "Top Students: -";
                return;
            }

            const top = students.filter(s => s.marks >= 75).map(s => s.name);
            document.getElementById("topStudents").innerText =
                `Top Students: ${top.length ? top.join(", ") : "None"}`;
        }
