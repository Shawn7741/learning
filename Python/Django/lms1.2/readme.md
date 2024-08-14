# lms1.2
This project contains files and folders used to achieve template inheritance

# Step 1
Create a folder and give it the name lms1.2

# Step 2
Open the folder in the intergrated terminal and run the following commands in order
1.pip install Django
2.pip install virtualenv
3.virtualenv myenv
4.source myenv/Scripts/activate(activates the virtual environment)

# Step 3
Create the project folder and give it the name tem by running the command (django-admin startproject temproject .) in your terminal.

# Step 4
Create the app folder and give it the name 'temp' by runing the command (python manage.py startapp tempapp)

# Step 5
In the temproject folder add your projectapp (tempapp) under settings.py installed apps and add a urlpattern to the tempapp


# Step 6
Create a templates folder under tempapp and incoorporate the files you'd like under the tempaltes folder as html(base.html, about.html, index.html, navbar.html)

# Step 7
Define the base template to include a navbar

# Step 8
Define the about and index templates

# Step 9
Use template inheritance for the about template and index template which will extend from base

# Step 10
In the tempapp under views.py implement the templates which will  be rendered on the web browser

# Step 11
In the tempapp create a new file and name it urls.py which will import views.py and the path to the templates

# Step 12
Open the terminal NB YOU SHOULD BE IN THE PARENT FOLDER ie, lms1.2 then run the command python manage.py runserver