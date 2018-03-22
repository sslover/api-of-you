The API of You Syllabus
============================================
Overview
---------------------
- **Instructor** - Sam Slover (email: slover@nyu.edu)
- **Office Hours** - Wednesday 7-9 and virtual office hours if you absolutely cannot make the Weds time (but please use in person time as much as possible).
Signup at [Google Calendar](https://calendar.google.com/calendar/selfsched?sstoken=UUtad0RGeVgzU0pxfGRlZmF1bHR8MzE4NGE0MjVkOTZkY2RjMTdmMmE2ZDlmYTRhMjcyMWY)
- **Group/Listserv**: Go [here](https://groups.google.com/forum/#!forum/the-api-of-you) and click "Apply for membership"
- **Technical Questions** Always email the listserv email (not me directly!). People often have similar questions, so it's helpful for everyone to see your questions: (email: the-api-of-you@googlegroups.com)

Description
--------------------------------
Every year, the amount of data created in the world grows exponentially. However, for designers to build truly meaningful applications and experiences around data, it usually helps to start small and design around our own problems, interests and use cases. In short: designing around our own data. In this class, we will build our own personal datasets from the ground up: tracking and designing around a datatset of our own (or of our community's) that we'd like to better understand and bring to life.

Over 6 weeks, we'll learn how to collect our own data, store it, and make it available via RESTful APIs. We'll then design digital or physical interfaces to bring our data to life in a way that we find personally meaningful.

Students will learn techniques on how to work with existing Web APIs, how to build their own Web APIs from the ground up (with Node.js and Mongodb), how to make their data available via RESTful APIs, and will ultimately design around the collected data via digital (web, p5, etc.) and physical (connected objects) formats.

Class examples will be presented in Javascript. Javascript tutorials will be assigned as a pre-requisite for those with little to no Javascript experience.

You will have 2 main projects to complete over the course of 6 weeks:

1. **Project 1 (Midterm - Due in Week 3) - The Dashboard of You**. Collect a dataset from the ground up (in JSON) and then represent it via a dashboard medium of your choosing (Web page, P5.js, Illustration, Physical Installation, etc.). Be prepared to discuss 1) why you chose to collect this data; 2) how you collected it; and 3) what you built, how you built it, and the design choices you made along the way.

2. **Project 2 (Final - Due in Week 6) - Designing Around Your Own Data**. Choose a dataset that you want to better understand and bring to life (it could be your own or data from a community around you). Using your Node/Mongo/Express application, track that dataset over the course of at least 7 days (ideally longer). Your final project will be to 1) design a digital or physical interface that brings your data to life in a way that you find personally meaningful and 2) to make your API publicly accessible (i.e. you must provide documentation or a guide to your API)

Objectives
---------------------

By the end of the class, you should have a solid understanding of the following concepts:

- **Full-Stack Javascript** - Familiarity with both client-side and server-side Javascript.
- **Designing Data-Driven Applications**- How to design and build a 'full-stack' data application.
- **User-facing Web design & data visualization concepts** - How to design and build user-facing interfaces & visualizations that effectively communicate data.
- **Using APIs** - How to interact with and use an API from within your client application.
- **Structuring Data** - How to intelligently structure data.
- **Storing Data** - How to build systems to store your own data.
- **Building APIs** - How to build your own APIs and make the data available to client applications.

Grades
------

Grades will be determined according to the following breakdown:
- 2 Projects: 75%
    - Project 1 - 25%
    - Project 2 (Final) -  50%
- Participation and Attendance: 25%

Class Blog
----------

It is expected that everyone in the class will create and maintain a blog for their assignments.

Email slover@nyu.edu with a link to you blog. I will add it to a list here:

* [Your Name Will Go Here](https://tisch.nyu.edu/itp)

Listserv
--------

We will use a listserv both to conduct discussions outside of class, and for any technical help questions. **Please email the listserv with all technical help questions (often, someone else will have a very similar question, or will at least find the answer informative).**

Go [here](https://groups.google.com/forum/#!forum/the-api-of-you) and click "Apply for membership"

**Reminder About Technical Questions** Always email the listserv email (not me directly!). People often have similar questions, so it's helpful for all to see your questions: (email: the-api-of-you@googlegroups.com)


Laptops
-------

This class covers numerous Web programming topics, and as a result, we will use laptops extensively throughout class time. However, use of the computer outside of class topics (for example, chatting on Gmail, compulsively checking Facebook/Twitter, etc.) is disrespectful and repeated violations will be met with 1) requests to close your laptop and 2) requests to leave class if you are consistently disengaged.

Also - while your classmates are presenting, it is **mandatory** to put your laptop lid down and focus all of your attention on your colleague's presentation.

Weekly Assignments
------------------

We will sometimes have small weekly assignments that build on material presented in class. It is expected that you post all assignments to your blog, and come prepared to talk about your work (and respectfully engage with your peers when they are presenting).

Attendance
----------

Attendance is mandatory. You must inform me via email if you are going to miss a class. Habitually showing up late for class or an excessive number of absences will adversely affect your grade.

Class Participation
-------------------

Class participation is a critical part of the class, and (along with attendance) makes up 25% of your final grade. We expect pro-active participation and feedback throughout class discussions and presentations.

Javascript Resources
---------------------
For those who may not have prior experience with Javacsript, it is strongly recommended to do some outside tutorials. The following are a list of suggested tutorials:

Client-side Javascript:
- [JS for Cats - Fun intro](http://jsforcats.com/)
- [CodeSchool - JS Road Trip Part 1 and Part 2](https://www.codeschool.com/paths/javascript)
- [Codecademy - Javascript](https://www.codecademy.com/tracks/javascript)

Server-side Javascript
- [CodeSchool - Real-time Web with Node.js](https://www.codeschool.com/courses/real-time-web-with-node-js)
- [MEAN (MongoDB Express.js AngularJS Node.js) tutorial - More Advanced](https://thinkster.io/mean-stack-tutorial/)

HTML/CSS Resources
-------------------

While not specifically required for the class, you may find the following tutorials helpful in building your projects.

* [Codecademy - HTML & CSS](https://www.codecademy.com/tracks/web)
* [Learn To Code HTML/CSS](http://learn.shayhowe.com/html-css/)
* [Learn CSS Layout](http://learnlayout.com/)
* [W3 - Intro to HTML](http://www.w3schools.com/html/html_intro.asp)
* [W3 - Intro to CSS](http://www.w3schools.com/css/css_intro.asp)


Week-by-Week Topics & Assignments
=================================

Week 1 -- Introduction, Welcome to the Web & Web APIs: HTML/CSS Primer, JSON, Dashboard Example
-----------------------------------------------------------------------------------------------
* Class Exercise: get to know eachother via data collection
    * Download [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=en)
    * Get the following information from your partner, which we will POST to our API:
        * name
        * imageURL
        * homeMilesFromNyc
        * dataInterest
        * jsLevel (1 to 10)
* Intro to Designing for Data Personalization:
    * Instructor/Topic Intro
    * Syllabus Overview
* Design Topic: Examples & Inspiration for the class
    * **Self-tracking Projects**
        * [Feltron Annual Reports](http://feltron.com/)
        * [WrapGenius - Personalized Journey Into Food](http://wrapgenius.me/)
        * [Reporter App to self track](http://www.reporter-app.com/)
        * [Gyroscope - Dashboard of You](https://gyrosco.pe/)
        * [AprilZero - Self-Tracking Dashboard](https://aprilzero.com/)
        * [Wellness Mirror - Physical](http://itp.nyu.edu/~msd403/blog/?p=1301)
        * [Glance - Physical](http://www.natashadzurny.com/blog/glance/)

**BREAK**

* Technical topics:
    * Quick intro to JSON (JSON is the data format we will work with all semester):
        * [Sample JSON](https://github.com/sslover/designing-for-data-personalization/blob/master/week1/sam.json)
    * HTML/CSS/JS 101 (Dashboard example): a wellformed page and simple script. How to structure a Web project.
        * Create project folder (index.html, css, images, js)
        * Code is at https://github.com/sslover/designing-for-data-personalization/tree/master/week1/instagram-html-css-demo.
    * List of Useful Tools
        * [HTML Shell](http://htmlshell.com/)
        * [JSONLint](http://jsonlint.com/)
        * [POSTMAN](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=en)
        * [JSONView](https://chrome.google.com/webstore/detail/jsonview)
        * [Sublime Text Editor](http://www.sublimetext.com/3),
        * [Bootstrap HTML/CSS/JS Framework](http://getbootstrap.com/)
        * [WrapBootstrap - Bootstrap Themes](https://wrapbootstrap.com)
        * [Google Fonts](https://www.google.com/fonts)
        * [Github](http://www.github.com)

* **Assignment Week 1:**
    * Sign up to the listserv: Go [here](https://groups.google.com/forum/#!forum/the-api-of-you) and click "Apply for membership"
    * Set up your class blog. Email slover@nyu.edu with the link.
    * Download useful tools:
        * [JSONView - Chrome Extension That Formats JSON](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
        * [POSTMAN - Chrome Extension That Simulates API requests](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop/related?hl=en)
        * [Sublime Text Editor](http://www.sublimetext.com/3)
    * Read about JSON:
        * [A Non-Programmer's Introduction to JSON](http://blog.scottlowe.org/2013/11/08/a-non-programmers-introduction-to-json/)
        * [Examples of JSON files](http://www.sitepoint.com/10-example-json-files/)
        * [Sam's Sample JSON](https://github.com/sslover/designing-for-data-personalization/blob/master/week1/sam.json)
    * Using the above examples as a starting place, create a simple JSON file on any dataset. Don't overthink it, something simple is fine... but it should be something that is interesting to you. Examples could be:
        * make your CV/resume into JSON.. example: [Sam's Sample JSON](https://github.com/sslover/designing-for-data-personalization/blob/master/week1/sam.json)
        * create a list of your pets - name, the year you got them, color, weight;
        * create a list of vacations you've been on - location, year, companions, favorite activity;
        * compile information about your family - relationship, name, year born, current location;
        * create a list of your favorite bands - year founded, list of albums, awards won, links to songs;
    * Use [JSON Lint](http://jsonlint.com) to validate the JSON you create and then **post it to your class blog**
    * If all of the above was very easy for you, write a simple Javascript program that renders your JSON from above onto a Webpage.

Week 2 -- Going deeper into Web - design, JS strategies, JSON 101
------------------------------------------------------------------
* Design Topic - Common Design Structures + Wireframing
* Design Exercise/Sprint - Pen & Paper Wireframing
* Color Theory in Data Visualization

* Technical Topics

    * Updating the DOM with JS example
    * P5js example
    * Chartjs Example

* Assignment

    * **Project 1 (Midterm - Due in Week 3) - The Dashboard of You**. Collect a dataset from the ground up (in JSON) and then represent it via a dashboard medium of your choosing (Web page, P5.js, Illustration, Physical Installation, etc.). Be prepared to discuss 1) why you chose to collect this data; 2) how you collected it; and 3) what you built, how you built it, and the design choices you made along the way.


Week 3 - Getting Started with Node.js
-------------------------------------
* Lightning Round - Present Project 1
* Finish Web (p5/chartJS) examples
* Build "Hello World" node.js app together

* Assignment

    * Read about [RESTful APIs](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services)
    * Get the boilerplate up and running.

Week 4 - More Node.js (Routing, Models, Schemas, oh my!)
--------------------------------------------------------

* Propose your final! Which dataset will you track and why? What are you thinking of building?
* More Nodejs/Mongo/Express examples (routing, models, schemas)
* AJAX example of consuming your own API

* Assignment

    * Build your first custom API
    * Post your final project to your blog. Start tracking your dataset.

Week 5 - More Node.js (TBD: NPM libraries, S3 file storage, SMS integration)
----------------------------------------------------------------------------

* NPM module example
* S3 file storage example
* SMS example

* Assignment

    * **Project 2 (Final - Due in Week 6) - Designing Around Your Own Data**. Choose a dataset that you want to better understand and bring to life (it could be your own or data from a community around you). Using your Node/Mongo/Express application, track that dataset over the course of at least 7 days (ideally longer). Your final project will be to 1) design a digital or physical interface that brings your data to life in a way that you find personally meaningful and 2) to make your API publicly accessible (i.e. you must provide documentation or a guide to your API)

Week 6
-------
* **Student Presentations - Final Project**
