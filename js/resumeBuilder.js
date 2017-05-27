/*
This is empty on purpose! Your code to build the resume will go here.
 */

//  var awesomeThoughts = "I am Magdalena and I am AWESOME";
//  console.log(awesomeThoughts);

//  var newAwsomeThoughts =
//     awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(newAwsomeThoughts);


// BIO
var bio = {
    "name" : "Magdalena",
    "role" : "Front-End Ninja",
    "contacts" : {
        "email" : "magdalena.r.stevens@gmail.com",
        "phone" : "+4366403730352",
        "github" : "github.com/dreammess",
        "location": "Salzburg, Austria"
        },
    "welcomeMsg" : "Bry!",
    "skills" : [
        "CSS",
        "HTML",
        "Basic JavaScript",
        "Bootstrap",
        "jQuery",
        "JSON",
        "languages: English, Polish, German"
    ],
    "biopic" : "images/Moi.png"
};


//EDU

var education = {
    "schools" : [
    {
        "name" : "CRACOW SCHOOL OF ART AND FASHION DESIGN",
        "location" : "Cracow, Poland",
        "degree" : "Fashion Designer Diploma",
        "majors" : "Artistic Fashion Design, Jewelry",
        "dates" : "2010 - 2014"
        // "url" : "http://www.ksa.edu.pl/fashion-college-english"
    },
        {
        "name" : "The Social High School of United Europe",
        "location" : "Zory, Poland",
        "degree" : "High School Diploma and Matura",
        "majors" : "English, Polish Literature, Maths",
        "dates" : "2007 - 2010"
        // "url" : "http://www.szkoladlawas.pl/liceum"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Front-End Web Developer Nanodegree Program",
        "school" : "Udacity",
        "date" : "2017",
        "url" : "https://www.udacity.com/"
    },
    {
        "title" : "CSS Basics & CSS Selectors",
        "school" : "Treehouse",
        "date" : "2017",
        "url" : "https://teamtreehouse.com/home"
    },
    {
        "title" : "JavaScript Basics",
        "school" : "Treehouse",
        "date" : "2017",
        "url" : "https://teamtreehouse.com/home"
    },
    {
        "title" : "WordPress Basics & User Roles",
        "school" : "Treehouse",
        "date" : "2017",
        "url" : "https://teamtreehouse.com/home"
    }
    ]
}


education.schools.forEach(function(school, index) {
    $('#education').append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);
    $('.education-entry:last').append(formattedSchoolName);
    $('.education-entry:last').append(formattedSchoolDates);
    $('.education-entry:last').append(formattedSchoolLocation);
    $('.education-entry:last').append(formattedSchoolDegree);
    $('.education-entry:last').append(formattedSchoolMajors);


});

$('#education').append(HTMLonlineClasses);
education.onlineCourses.forEach(function(online, index) {
    $('#education').append(HTMLschoolStart);
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.date);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", online.url);
    $('.education-entry:last').append(formattedOnlineTitle);
    $('.education-entry:last').append(formattedOnlineSchool);
    $('.education-entry:last').append(formattedOnlineDates);
    $('.education-entry:last').append(formattedOnlineURL);



});

// WORK

var work = {
    "jobs" : [
    {
        "employer" : "Star Inn Hotel Premium Salzburg Gablerbraeu",
        "title" : "Receptionist",
        "location" : "Salzburg, Austria",
        "dates" : "May 2016 - current",
        "description" : `<ul class = "bullets">
            <li>Fluff</li>
            <li>Fluff</li>
            <li>Fluff</li>
            <li>Fluff</li>
        </ul>`
    },
    {
        "employer" : "Earthy Foods & Goods",
        "title" : "Head of Fruit and Veg Department and Duty Manager",
        "location" : "Edinburgh, Scotland, UK",
        "dates" : "August 2014 - December 2015",
        "description" : ""
    },
    {
        "employer" : "Frankie and Bennys Omni Centre",
        "title" : "Bar Supervisor",
        "location" : "Edinburgh, Scotland, UK",
        "dates" : "July 2013 - August 2014",
        "description" : ""
    },
    {
        "employer" : "Celtic Pub",
        "title" : "Bar Supervisor",
        "location" : "Rybnik, Poland",
        "dates" : "April - September 2010",
        "description" : ""
    }
    ]
}

work.display = function () {
    work.jobs.forEach(function(job, index) {
        $('#workExperience').append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $('.work-entry:last').append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedLocation);
        $('.work-entry:last').append(formattedDescription);

    });
};

work.display();

//PROJECTS

   var projects = {
      "projects" : [
      {
         "title": "Online Resume",
         "dates": "May 2017",
         "description": "" + "Technologies used: HTML, CSS, JS, Bootstrap.",
         "images": ["images/online_portfolio.png"]
     },
     {
         "title": "Animal Trading Card",
         "dates": "April 2017",
         "description": "First CSS project using HTML and CSS.",
         "images": ["images/animal_trading_card.png"]
     }]
 };

 projects.display = function() {
     projects.projects.forEach(function(project, index) {
         $("#projects").append(HTMLprojectStart);

         $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
         $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
         $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
         $(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images));
     });
 };

projects.display();

// BIO
var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

var pictureURL = bio.biopic;
var formattedPic = HTMLbioPic.replace("%data%", pictureURL);

var welcomeMsg = bio.welcomeMsg;
var formattedMsg = HTMLwelcomeMsg.replace("%data%", welcomeMsg);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);

var phone = bio.contacts.phone;
var formattedMobile = HTMLmobile.replace("%data%", phone);

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%", github);



$("#header .overlay").prepend(formattedMsg);
$("#header .overlay").prepend(formattedRole);
$("#header .overlay").prepend(formattedName);
$("#header .overlay").prepend(formattedPic);


$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedGithub);


$('#header .overlay').append(HTMLskillsStart);

if (bio.skills.length > 0) {
     bio.skills.forEach (function(skill, index) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $('#skills').append(formattedSkill);
});
};

$('#mapDiv').append(googleMap);