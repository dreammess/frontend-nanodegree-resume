// BIO

var bio = {
    "name" : "Magdalena Stevens",
    "role" : " Front-End Ninja",
    "contacts" : {
        "email" : "magdalena.r.stevens@gmail.com",
        "phone" : "+4366403730352",
        "github" : "github.com/dreammess",
        "location": "Salzburg, Austria"
        },
    "welcomeMsg" : "Learning Front-End with Udacity and looking for ways to combine my artistic side with everyday life.",
    "skills" : [
        "CSS",
        "HTML",
        "Basic JavaScript",
        "Bootstrap",
        "jQuery",
        "P5",
        "JSON",
        "WordPress",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Gimp",
        "Corel Draw",
        "Languages: English, Polish, German"
    ],
    "biopic" : "images/Moi.png"
};
bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);

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


    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedGithub);


    $('#header .overlay').append(HTMLskillsStart);

    if (bio.skills.length > 0) {
         bio.skills.forEach (function(skill, index) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
    });
    }
};

bio.display();

//EDU

var education = {
    "schools" : [
    {
        "name" : "CRACOW SCHOOL OF ART AND FASHION DESIGN",
        "location" : "Cracow, Poland",
        "degree" : "Fashion Designer Diploma",
        "majors" : ["Artistic Fashion Design", " Jewelry"],
        "dates" : "2010 - 2014"
    },
        {
        "name" : "THE SOCIAL HIGH SCHOOL OF UNITED EUROPE",
        "location" : "Zory, Poland",
        "degree" : "High School Diploma and Matura",
        "majors" : "English, Polish Literature, Maths",
        "dates" : "2007 - 2010"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Front-End Web Developer Nanodegree Program",
        "name" : "UDACITY",
        "school" : "Udacity",
        "date" : "2017",
        "url" : "https://www.udacity.com/",
    },
    {
        "title" : "CSS Basics & CSS Selectors",
        "name" : "TREEHOUSE",
        "school" : "Treehouse",
        "date" : "2017",
        "url" : "https://teamtreehouse.com/home",
    },
    {
        "title" : "JavaScript Basics",
        "name" : "TREEHOUSE",
        "school" : "Treehouse",
        "date" : "2017",
        "url" : "https://teamtreehouse.com/home"
    },
    {
        "title" : "WordPress Basics & User Roles",
        "name" : "TREEHOUSE",
        "school" : "Treehouse",
        "date" : "2017",
        "url" : "https://teamtreehouse.com/home"
    }
    ]
};

education.display = function() {
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
        var formattedOnlineURL = HTMLonlineURL.replace("#", online.url).replace("%data%", online.name);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.date);
        $('.education-entry:last').append(formattedOnlineTitle);
        $('.education-entry:last').append(formattedOnlineURL);
        $('.education-entry:last').append(formattedOnlineSchool);
        $('.education-entry:last').append(formattedOnlineDates);
    });
};

education.display();

// WORK

var work = {
    "jobs" : [
    {
        "employer" : "Star Inn Hotel Premium Salzburg Gablerbraeu",
        "title" : "Receptionist",
        "location" : "Salzburg, Austria",
        "dates" : "May 2016 - current",
        "description" : `<ul ><li class="jobs-list">Using my language, people and organizational skills to concquer new, Austrian life.</li>
        <li class="jobs-list">Handling e-mails, reservations and customer requests.</li>
        <li class="jobs-list">Finding solutions to all problems large and small as they araise.</li>
        <li class="jobs-list">Learning and multitasking all day everyday.</li></ul><br>`
    },
    {
        "employer" : "Earthy Foods & Goods",
        "title" : "Head of Fruit and Veg Department and Duty Manager",
        "location" : "Edinburgh, Scotland, UK",
        "dates" : "August 2014 - December 2015",
        "description" : `<ul><li class="jobs-list">Responsible for international \
        and local orderings for 3 retail branches.</li>
        <li class = "jobs-list">Continually adjusting pricing to selectively \
        improve margins of profit, increse competitiveness and exeed targets \
        to achieve record sales and maintain strong growth in my department.</li>
        <li class = "jobs-list"> Using vm to wow the eye and place high-profit \
        items front and center in fresh, seasonally-oriented, ever-changing ways.</li>
        <li class = "jobs-list">Designing marketing materials and comercial \
        campains using Adobe Photoshop and Corel Draw.</li>
        <li class = "jobs-list">Banking and parts of bookkeeping in Microsoft Excel.</li></ul><br>`
    },
    {
        "employer" : "Frankie and Bennys Omni Centre",
        "title" : "Bar Supervisor",
        "location" : "Edinburgh, Scotland, UK",
        "dates" : "July 2013 - August 2014",
        "description" :`<ul><li class = "jobs-list">Responsible for orders and weekly stock checks.</li>
        <li class = "jobs-list">Managing and training a small team and cooerating with floor staff.</li>
        <li class = "jobs-list">Introducing newideas and developing more efficient bar work solutions.</li></ul><br>`
    },
    {
        "employer" : "Celtic Pub",
        "title" : "Bar Supervisor",
        "location" : "Rybnik, Poland",
        "dates" : "April - September 2010",
        "description" : "Working fast paste in the most popular pub in town while finishing high school."
    }
    ]
};

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
         "title": "RESPONSIVE PORTFOLIO",
         "dates": "May 2017",
         "description": "Responsive Portfolio made using HTML, CSS, JS, Bootstrap and Media Queries and even sneaking a Modal into the code.",
         "images": ["images/online_portfolio.png"]
     },
     {
         "title": "ANIMAL TRADING CARDS",
         "dates": "April 2017",
         "description": "First Udacity CSS project using HTML and CSS.",
         "images": ["images/animal_trading_card.png"]
     },
     {
         "title": "WORDPRESS BLOG",
         "dates": "December 2016",
         "description": "First website created in WordPress.",
         "images": ["images/Recenzjantka.png"]
     }]
 };

 projects.display = function() {
     projects.projects.forEach(function(project) {
         $("#projects").append(HTMLprojectStart);
         $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
         $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
         $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));

         project.images.forEach(function(image) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
        });
     });
 };

projects.display();

//MAP
$('#mapDiv').append(googleMap);