# Project Task Expert (Next.js version)

Live link: https://taskexpert.vercel.app/

This is a simplistic drag and drop task management web app that anybody can use for their daily life task management. It has three stages of task management - todo, ongoing, completed. Dragging and dropping updates UI along with the database itself. It is completely responsive. I used HTML drag and drop API for the drag and drop functionality. Currently it doesn't offer drag and drop support for touchscreens but I'm working on it and will add the functionality soon.

# Language/Libraries/Frameworks

-  Next.js
-  Redux Toolkit
-  Tailwind CSS
-  React Toastify
-  React Icons
-  Iconify
-  Firebase Authentication
-  JWT
-  Axios
-  Express
-  MongoDB
-  Mongoose

# Features

## Client-side:

1. Users can register their accounts and login to the dashboard.
2. Users can create, edit, delete, pin/unpin tasks from the dashboard.
3. If user views the details of a task they can see the live countdown of the time remaining before they should complete the task.
4. Users can drag and drop tasks into three statuses - Todo, Ongoing, Completed.
5. Users can filter and sort their tasks based on priorities and can also search for specific tasks using the searchbar.
6. Firebase authentication has been used for login and registration.
7. Redux toolkit has been used for local UI state management.
8. Website is fully responsive.

## Server-side

1. The server side has been created using Express JS, MongoDB, Mongoose.
2. JSON Web Token has been used for authorization, users cannot see other users' data.
3. If Token has expired, users will be automatically logged out.
