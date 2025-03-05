let employees = [];
let idCounter = 1;

function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();
    const message = document.getElementById("message");

    if (!name || !profession || !age) {
        message.textContent = "All fields are required.";
        message.className = "error";
        return;
    }

    const employee = {
        id: idCounter++,
        name,
        profession,
        age: parseInt(age)
    };
    employees.push(employee);
    displayEmployees();
    message.textContent = "Employee added successfully!";
    message.className = "success";
    document.getElementById("name").value = "";
    document.getElementById("profession").value = "";
    document.getElementById("age").value = "";
}

function displayEmployees() {
    const employeeList = document.getElementById("employeeList");
    employeeList.innerHTML = "";
    employees.forEach(employee => {
        const div = document.createElement("div");
        div.className = "employee";
        div.innerHTML = `${employee.id}. ${employee.name} - ${employee.profession} - ${employee.age} 
            <button onclick="deleteEmployee(${employee.id})">Delete</button>`;
        employeeList.appendChild(div);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
}