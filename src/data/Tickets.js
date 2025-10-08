// src/data/Tickets.js

const TICKET_DATA = [
    {
        id: 101,
        title: "Database connection failing after nightly update",
        description: "The primary MySQL database is unreachable following the deployment of v3.1 software patch. All application services are currently down, affecting live customer data access.",
        customer: "Alpha Corp Technologies",
        priority: "High",
        status: "open",
        createdAt: "2025-09-26T10:00:00Z"
    },
    {
        id: 102,
        title: "Incorrect VAT calculation on checkout for EU customers",
        description: "Customers in the European Union are reporting a consistent 5% discrepancy in VAT applied during the final checkout step. This issue is specific to the front-end display.",
        customer: "Beta Industries",
        priority: "Medium",
        status: "open",
        createdAt: "2025-09-25T14:30:00Z"
    },
    {
        id: 103,
        title: "Typographical error in 'About Us' footer link",
        description: "The hyperlink text in the website footer for the 'About Us' page currently reads 'Aboot Us'. This is a minor text correction needed for branding consistency.",
        customer: "Gamma Services",
        priority: "Low",
        status: "open",
        createdAt: "2025-09-24T09:15:00Z"
    },
    {
        id: 104,
        title: "API endpoint returning 500 error on batch requests",
        description: "Submitting more than 10 records simultaneously to the /api/v2/submit endpoint results in an internal server error (HTTP 500). Single requests are processed correctly.",
        customer: "Delta Group",
        priority: "High",
        status: "open",
        createdAt: "2025-09-23T18:45:00Z"
    },
    {
        id: 105,
        title: "User profile image upload fails silently",
        description: "Users attempting to update their profile picture experience no error message, but the image does not change. Backend logs confirm no file is being received.",
        customer: "Epsilon Solutions",
        priority: "Medium",
        status: "open",
        createdAt: "2025-09-22T11:00:00Z"
    },
    {
        id: 106,
        title: "Login page stuck in perpetual loading state",
        description: "Several users cannot proceed past the login screen; the spinning loader icon remains indefinitely. Affects users on Chrome and Firefox browsers only.",
        customer: "Zeta Financial",
        priority: "High",
        status: "open",
        createdAt: "2025-09-21T07:20:00Z"
    },
    {
        id: 107,
        title: "Missing 'Forgot Password' link on mobile view",
        description: "The option to reset a password is not visible when accessing the login page on any screen size below 768px (tablet/mobile views).",
        customer: "Eta Media",
        priority: "Medium",
        status: "open",
        createdAt: "2025-09-20T16:55:00Z"
    },
    {
        id: 108,
        title: "Tooltip text covers input fields in forms",
        description: "When hovering over the help icon, the tooltip text pops up and partially obstructs the required input field beneath it, hindering data entry.",
        customer: "Theta Robotics",
        priority: "Low",
        status: "open",
        createdAt: "2025-09-19T13:10:00Z"
    },
    {
        id: 109,
        title: "Search results pagination button is inactive",
        description: "The 'Next Page' button on the search results screen is visible but does not execute a function when clicked, regardless of the page number.",
        customer: "Iota Consulting",
        priority: "High",
        status: "open",
        createdAt: "2025-09-18T09:40:00Z"
    },
    {
        id: 110,
        title: "Color contrast compliance issue on dashboard charts",
        description: "Accessibility scan detected insufficient color contrast between the background and data bars on the monthly usage chart (AA standard violation).",
        customer: "Kappa Solutions",
        priority: "Medium",
        status: "open",
        createdAt: "2025-09-17T22:05:00Z"
    },
    {
        id: 111,
        title: "PDF generation service timeout error",
        description: "Generating large reports (over 50 pages) results in a timeout error after 30 seconds. Need to optimize the PDF rendering process or increase the timeout limit.",
        customer: "Lambda Technologies",
        priority: "High",
        status: "open",
        createdAt: "2025-09-16T17:10:00Z"
    },
    {
        id: 112,
        title: "Minor text overflow in Japanese locale translation",
        description: "When the application language is set to Japanese, some labels exceed the container width and wrap awkwardly on the user settings page.",
        customer: "Mu Corporation",
        priority: "Low",
        status: "open",
        createdAt: "2025-09-15T11:50:00Z"
    },
    {
        id: 113,
        title: "Coupon code validation fails for valid codes",
        description: "Users are unable to apply valid, unexpired coupon codes during checkout. The system returns a generic 'Invalid Code' error.",
        customer: "Nu Products",
        priority: "Medium",
        status: "open",
        createdAt: "2025-09-14T08:00:00Z"
    },
    {
        id: 114,
        title: "Broken image link on homepage carousel slide 3",
        description: "The third slide of the homepage image carousel displays a broken image icon. The source URL seems to be incorrect or the asset is missing.",
        customer: "Xi Engineering",
        priority: "Low",
        status: "open",
        createdAt: "2025-09-13T19:25:00Z"
    },
    {
        id: 115,
        title: "Unauthorized access attempt notification spam",
        description: "The system is sending excessive 'Unauthorized Access Attempt' emails (50+ per hour) to administrators, even during routine operations. Severity is high due to noise.",
        customer: "Omicron Security",
        priority: "High",
        status: "open",
        createdAt: "2025-09-12T15:40:00Z"
    }
];

export default TICKET_DATA;
