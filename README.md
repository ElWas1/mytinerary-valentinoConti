# React + Vite

Front-End repository for MyTinerary Single-Page Application.

Currently, it supports several features:

. Atractive home page
. A cities page, which shows a list of the available cities to access to at the moment and a search input, which will help you find the city you are looking for.
. Unique page for each of the cities available, each one with their itineraries with activities and comments posted by registered users.
. Sign in/Sign up page, where you can sign in/up with your Google account as there has been added a GoogleAuth button which will create your user automatically.
. Registering and signing in.
. Profile page for any user you find (or username you enter in the URL, if it exists) in the web application, including yourself.
. Posting comments on any itinerary available as long as you have signed in.
. Connection with Firebase Storage, a cloud storage for media files, which provides the images uploaded by users. (e.g. Profile Photos, cities, itineraries and activities pictures).
. Use of JWT to allow authorized users perform actions like commenting, liking itineraries (available soon) and editing their own profile.
. For even more security, there has been implemented an auto-renovation system for JWT, which will renovate your token in case you are active when it expires.

Unavailable features that will be added in the future:

. Creating cities and itineraries with their activities.
. Likes count for each itinerary and a private section in sidebar where you can find all the itineraries you have liked.
. Another private section in the sidebar that shows you all the itineraries you have created.
. Profile settings page, where you will be able to change your profile photo, username, email, password and perform other actions like permanently deleting your account if needed.