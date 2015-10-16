/*
 *  resumeBuilder.js has 3 stages:
 *  1) Initialize JSON containing core resume information
 *  2) Create display functions for DOM manipulation purposes
 *  3) Call the display functions to render resume to user
 */


/*
 *   Stage 1: Initialize JSON containing core Resume Information
 */

// Initialize Bio data
var bio = {
    "name": "Jaspreet Singh",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "(626)XXX-XXXX",
        "email": "jaspreet_xps@yahoo.com",
        "github": "jsjaspreet",
        "twitter": "@jaspreet_js",
        "location": "Los Angeles"
    },
    "welcomeMessage": "I'm a software engineer passionate about technology, I'm always eager to learn more about the industry so feel free to connect.",
    "skills": ["Java", "Hadoop", "HBase", "Hive",
        "Git", "Docker", "Linux", "HTML", "CSS"],
    "biopic": "http://jaspreetsingh.me/UdacityPortfolioProject/resources/styles/images/profilepic/profile-pic-small.jpg"
};

// Initialize Education data
var education = {
    "schools": [{
        "name": "University of California, Berkeley",
        "location": "Berkeley, CA",
        "degree": "Bachelor of Science",
        "majors": "Electrical Engineering and Computer Science",
        "dates": "2015",
        "url": "www.berkeley.edu"
    }
    ],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2015",
        "url": "www.udacity.com"
    }]
};

// Initialize work data
var work = {
    "jobs": [{
        "employer": "YP",
        "title": "Software Engineer",
        "location": "Glendale, California",
        "dates": "06/01/15 - Present",
        "description": "I'm a generalist for YP, I mainly work with big data (Hbase/Hive/Custom Map Reduce jobs) and designing API's."
    },
        {
            "employer": "YP",
            "title": "Data Engineering Intern",
            "location": "Glendale, California",
            "dates": "06/01/14 - 09/01/14",
            "description": "As an intern for YP, I worked with big data (Hbase/Hive/Custom Map Reduce jobs) and designing API's."
        },
        {
            "employer": "Practice Fusion",
            "title": "Technology Operations Intern",
            "location": "San Francisco, California",
            "dates": "06/01/13 - 09/01/13",
            "description": "I provided general technical support for Windows 7 / Mac OS X operating systems and helped on-board new employees with their technical equipment"
        }
    ]
};

// Initialize projects data
var projects = {
    "projects": [{
        "title": "Personal Website",
        "dates": "09/01/2015 - Present",
        "description": "This website started out as a Udacity project and evolved to replace my old personal website",
        "images": ["https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150"]
    }]
};

/*
 *  Stage 2: Create display functions for DOM manipulation purposes
 */
bio.display = function () {
    // Manipulate DOM
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
};

work.display = function () {
    // for each job..
    for (var i = 0; i < work.jobs.length; i++) {
        // append a work directory
        $("#workExperience").append(HTMLworkStart);
        // select dom element for easy insertion
        var workEntry = $("#workExperience").children().last();
        // append work entry information
        workEntry.append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title));
        workEntry.append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        workEntry.append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
        workEntry.append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

projects.display = function () {
    // for each project
    for (var i = 0; i < projects.projects.length; i++) {
        // append a project start element
        $("#projects").append(HTMLprojectStart);
        // select element for easy insertion
        var projEntry = $("#projects").children().last();

        projEntry.append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        projEntry.append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        projEntry.append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        projEntry.append(HTMLprojectImage.replace("%data%", projects.projects[i].images[0]));

    }
};

education.display = function () {
    // for each school
    for (var i = 0; i < education.schools.length; i++) {
        // append school elem
        $("#education").append(HTMLschoolStart);
        // select elem for easy dom manipulation
        var schoolEntry = $("#education").children().last();
        // insert data
        schoolEntry.append(HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree));
        schoolEntry.append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        schoolEntry.append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        schoolEntry.append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }
    $("#education").append(HTMLonlineClasses);
    // for each online course
    for (i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var schoolEntry = $("#education").children().last();
        schoolEntry.append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
        schoolEntry.append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
        schoolEntry.append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
};

/*
 *  Stage 3: Call the display functions to render resume to user
 */

bio.display();
work.display();
projects.display();
education.display();

/*
 * Google Map Div
 */

$("#mapDiv").append(googleMap);













