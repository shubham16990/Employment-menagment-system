const employee = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Update Project Report",
                "description": "Prepare and submit the weekly status report.",
                "date": "2025-11-12",
                "category": "Work"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Fix UI Bugs",
                "description": "Resolved header layout and button alignment issues.",
                "date": "2025-11-09",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Prepare Presentation",
                "description": "Missed submission deadline for Q4 presentation.",
                "date": "2025-11-10",
                "category": "Office"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Client Meeting",
                "description": "Schedule and attend meeting with client ABC Corp.",
                "date": "2025-11-13",
                "category": "Business"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Research Competitors",
                "description": "Analyzed three competitor websites.",
                "date": "2025-11-08",
                "category": "Research"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Submit Expense Report",
                "description": "Forgot to attach travel receipts.",
                "date": "2025-11-06",
                "category": "Finance"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Update CRM Data",
                "description": "Add recent client interactions to CRM system.",
                "date": "2025-11-14",
                "category": "Data Entry"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Design Landing Page",
                "description": "Create a new landing page for the winter sale.",
                "date": "2025-11-15",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Update Logo",
                "description": "Designed and uploaded the new company logo.",
                "date": "2025-11-07",
                "category": "Branding"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Deliver Client Mockups",
                "description": "Missed delivery due to missing assets.",
                "date": "2025-11-10",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Revise Banner",
                "description": "Adjust typography and colors for banner.",
                "date": "2025-11-13",
                "category": "Design"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Test New Feature",
                "description": "Perform QA testing on the recent release build.",
                "date": "2025-11-12",
                "category": "QA"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Write Test Cases",
                "description": "Created test cases for payment gateway module.",
                "date": "2025-11-09",
                "category": "Testing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Bug Verification",
                "description": "Missed retesting due to time constraints.",
                "date": "2025-11-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "title": "Content Review",
                "description": "Review and edit new blog posts.",
                "date": "2025-11-11",
                "category": "Content"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "title": "Publish Newsletter",
                "description": "Sent out October newsletter.",
                "date": "2025-11-05",
                "category": "Marketing"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "title": "Write Product Copy",
                "description": "Missed product description updates deadline.",
                "date": "2025-11-09",
                "category": "Writing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "title": "Keyword Research",
                "description": "Analyze keywords for next ad campaign.",
                "date": "2025-11-14",
                "category": "SEO"
            }
        ]
    }
]

// Admin data //                                                                                                             

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }

];

// Save data in local storage //

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employee))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const empData = localStorage.getItem("employees")
    const adminData = localStorage.getItem("admin")
if(empData && adminData) {
    console.log(JSON.parse(empData));
    console.log(JSON.parse(adminData))
    return {empData,adminData}
}else{
    console.log("Your data not found in localStorage")
    return {empData:[], adminData:[]}
}
}



