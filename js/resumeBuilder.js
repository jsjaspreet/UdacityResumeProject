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
    "biopic": "http://jaspreetsingh.me/UdacityPortfolioProject/resources/styles/images/profilepic/profile-pic-small.jpg",
    "display": "function(){}"
};

var education = {
    "schools": [{"name": "University of California, Berkeley",
        "location": "Berkeley, CA",
        "degree": "Bachelor of Science",
        "majors": "Electrical Engineering and Computer Science",
        "dates":051515,
        "url": "www.berkeley.edu"}
    ],
    "onlineCourses": [{"title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 0,
        "url": "www.udacity.com"}],
    "display": "function(){}"
};

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
            "dates": "06/01/13 - 09/01/13"
        }
    ],
    "display": "function(){}"
};

var projects = {
    "projects": [{
        "title": "Personal Website",
        "dates": "09/01/2015 - Present",
        "description": "This website started out as a Udacity project and evolved to replace my old personal website",
        "images": ["http://placehold.it/350x150"]
    }],
    "display": "function(){}"
};

// Data Replacements for header element

var HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
var HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);

var HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
var HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var HTMLgithub= HTMLgithub.replace("%data%", bio.contacts.github);
var HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);

var HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
var HTMLwelcomeMsg= HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);




$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);


$("#topContacts").append(HTMLmobile);
$("#topContacts").append(HTMLemail);
$("#topContacts").append(HTMLtwitter);
$("#topContacts").append(HTMLgithub);
$("#topContacts").append(HTMLlocation);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLwelcomeMsg);

$("#header").append(HTMLskillsStart);

for(var i=0; i<bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
}









