This is the project exercise code from a Udemy "NodeJS - The Complete Guide" course.

https://www.udemy.com/course/nodejs-the-complete-guide

This initial code check in starts at Lesson #139 just prior to hooking up the MySQL database
and the plan is to carry forward with all coding changes using MySQL even though the course
itself will change direction fairly soon and begin using the NoSQL database mongoDB. As far
as mongoDB is concerned, it is believed that I will fork this repository when the time is
right and I will then need to make sure all non-database related code changes are made in
this respository as well as the forked repository.

As usual with anything related to Node JS, the "node_modules" folder was excluded so the 
need to run "npm install" will have to be done if/when this repository is copied to a 
different machine and/or folder than the original master instance.

Deviations from course's original code:

1) The "util/database.js" file was excluded from the repository since it contains the
   password to the local MySQL database. A copy of the original "database.js" file is
   included in this repository called "util/databaseOriginal.js" and one only needs to
   rename this file to "database.js" and of course use the appropriate DB password.

2) A number of minor tweaks were made to the code such as re-ordering some of the 
   functions in the Shop and Admin controllers, minor tweaks to some of the console
   log statements.

What's coming next?

1) This is the end of the SQL section of the Udemy course. Moving forward Max is now
   going to be working with the MongoDB. I suspect the fundamentals of the models and
   controllers should not go through radical changes though clearly there will be some
   changes since Max will be dealing with Mongoose and not Sequelize. 

2) The code will be forked, so this branch will remain as a SQL solution. But now it 
   is time for myself to get to work as I do not like how "app.js" is organized. there
   is extemely tight coupling there towards setting up Sequelize and I am sure there
   is a better solution to de-couple the code to make it cleaner. So expect changes
   outside the scope of Max's course to happen.

3) I do suspect I will also need to revisit this branch to merge non-database changes 
   such as User Authentication, E-Mail Support, Validation, Error Handling as well as 
   File Upload/Download and Pagination. 

4) Finally I would like to revisit the UI views screens (likely at the end of the 
   course) as while the styling isn't too bad, the layout of all the screens are
   pretty basic and could definitely be improved.
   