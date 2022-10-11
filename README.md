Chitter Challenge
=================

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
```
##As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

##As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

##As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

##As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

##As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

##As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

## You don't have to be logged in to see the peeps.
## Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewithers@digitalfutures.com, password123, Edward Withers, dearshrewdwit).
## The username and email are unique.
## Peeps (posts to chitter) have the name of the trainee and their user handle.
#* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
#### Line of thoughts ####

Initial setup 
------------------------------------------------------------------------------------
I used ReactJs, NodeJs an express to build this project. For the database i used mongoDB

To initial setup, open the terminal and run both folders, Public and server on terminals with the command npm start, and it should connect the server and the DataBase.

After that you should run the command npm i, so all the dependencies can be installed and the project can run properly.

THE APP
------------------------------------------------------------------------------------

The app is simple and intituitive, if you already have an account you should be able to Login with your email and password, otherwise click Register and fill the form and complete the signup.

After that you should be redirected to the main page, with a feed with all peeps showing the user and the date it was created.

At the top right you can find the Logout button and it should take you to the login page with the Feed and you will be able to see the peeps even if you are not logged in.



## BACKEND

I started installing dependencies, and then I prepared the Peep Schema, and User Schema, as the backend i am still learning and didnt have the chance to do so much in the team engineering challenge i researched a lot, and used some of our team project as a reference adapting for this challenge, and with Hugo's help i prepared authControllers, and the async function on the file authModel using bcrypt and also authMiddleware file. He also helped me with the token, because i tried doing by myself and it wasnt working.

I created my database using mongoDB, and connected it in the file index.js, I didnt use .env, because of some reason it was giving me an auth error when it tried to connect. 

once all was working I created the routes, and started working on the frontend.

## FRONTEND

I created an app using npx command, and identifying the components using a ui sketch


![](image0(6).jpeg)
![](image1(4).jpeg)
![](image2(1).jpeg)

then i created the components, and started working on styling at the same time, again my first option was bootstrap, but had little time to make it fully work so i decided to stick to CSS, styling needs more improving and will go back to it to make it look better.


once you login you are directed to the feed page, that has a box for you to peep and shows the peeps in chronological order. You also have the option to logout and be redirected to the login page where you can see your peeps even if you are not logged in.


to make the peep appear in chronological order i used .reverse()
and for the peep to load after submiting it and clearing the peepbox i used window.location = '/' on the file peep.jsx





