This is the project exercise code from a Udemy "NodeJS - The Complete Guide" course.

https://www.udemy.com/course/nodejs-the-complete-guide

This code check in corresponds to the end of the "14 - Session and Cookie" section 
on Lesson #248 just prior to working with adding Authentication to the application.
Please keep in mind that I am now maintaining this branch on my own as Max has now
abandoned any further changes to the MySQL database in favor of MongoDB. I was able
to add "Session and Cookie" support to this code base, but presently the Sessions
are in memory only. I will need to visit the code in the future to see if I can add
Session support to the database like what Max did on the MongoDB stream. But I also
want to re-evaluate Sequelize and how it is being used in this project as presently
it kind of polutes the "app.js" file. Stay tuned.

As usual with anything related to Node JS, the "node_modules" folder was excluded so the 
need to run "npm install" will have to be done if/when this repository is copied to a 
different machine and/or folder than the original master instance.

Deviations from course's original code:

1) The "util/database.js" file was excluded from the repository since it contains the
   password to the local MySQL database. A copy of the original "database.js" file is
   included in this repository called "util/databaseOriginal.js" and one only needs to
   rename this file to "database.js" and of course use the appropriate DB password.

2) The user is still being hard coded. Inside of the "controllers/Auth.js" file you
   will see that the "postLogin()" function fetches the user via a hard coded value.
   You are going to need to replace this value with your own.

What's coming next?

1) This is the end of the SQL section of the Udemy course. Moving forward Max is now
   going to be working with the MongoDB. I suspect the fundamentals of the models and
   controllers should not go through radical changes though clearly there will be some
   changes since Max will be dealing with Mongoose and not Sequelize. 

2) The code has been forked, so this branch will remain as a SQL solution. But now it 
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
   