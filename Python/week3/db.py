import mysql.connector
from mysql.connector import Error

import pandas as pd

# A function to our mysql server
def create_connection(host_name, user_name, password,db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host = host_name,
            user = user_name,
            passwd = password,
            database = db_name
        )
        print("MySQL connection has been successful")
    except Error as error:
        print(f"Error: {error}")
        
    return connection


def create_database(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        print("Database created successfully")
        
    except Error as error:
        print(f"Error: {error}")
        
        
# query = "CREATE database school"

# database = create_database(connection, query)

def execute_query(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query successful")
    except Error as error:
        print(f"Error: {error}")


create_tables_teacher = """
CREATE TABLE teacher (
    teacher_id INT PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    dob DATE,
    phone_no VARCHAR(13)

);
"""

create_tables_client = """
CREATE TABLE client (
    client_id INT PRIMARY KEY,
    client_name VARCHAR(40),
    industry VARCHAR(20)

);
"""

create_tables_course = """
CREATE TABLE course (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(40) NOT NULL,
    level VARCHAR(2),
    start_date DATE,
    teacher INT,
    client INT

);
"""

connection = create_connection("localhost", "root", "","school")
# execute_query(connection, create_tables_course)


# populating tables
pop_teacher = """
INSERT INTO teacher VALUES
(1, 'Amos', 'Ngisa', '1998-10-10', '0707772715');

"""

pop_client = """
INSERT INTO client VALUES
(2, 'Shawn', 'Software development'),
(3, 'Teddy', 'Software development'),
(4, 'Joan', 'Software development'),
(5, 'Allan', 'Software development'),
(6, 'Jeremy', 'Software development')
"""

pop_course = """
INSERT INTO course VALUES
(1, 'Javascript', '1', '2024-05-20', 1, 2),
(2, 'Javascript', '2', '2024-05-20', 1, 3),
(3, 'Javascript', '3', '2024-05-20', 1, 4),
(4, 'Javascript', '4', '2024-05-20', 1, 5),
(5, 'Javascript', '5', '2024-05-20', 1, 6),
(6, 'Python', '6', '2024-05-20', 1, 2),
(7, 'Python', '7', '2024-05-20', 1, 3),
(8, 'Python', '8', '2024-05-20', 1, 4),
(9, 'Python', '9', '2024-05-20', 1, 5),
(10, 'Python', '10', '2024-05-20', 1, 6)
"""
# execute_query(connection, pop_course)
# ########
## Create relationships


alter_course = """
ALTER TABLE course
ADD FOREIGN KEY(teacher)
REFERENCES teacher(teacher_id)
ON DELETE SET NULL;
"""

alter_course_again = """
ALTER TABLE course
ADD FOREIGN KEY(client)
REFERENCES client(client_id)
ON DELETE SET NULL;
"""

# execute_query(connection, alter_course)
# execute_query(connection, alter_course_again)


##### Reading data from db
def read_query(connection, query):
    cursor = connection.cursor()
    result = None
    try:
        cursor.execute(query)
        result = cursor.fetchall()
        return result
    except Error as error:
        print(f"Error: {error}")
        

ql = """
SELECT *
FROM teacher;


"""

q2 = """
SELECT course.course_id, course.course_name, client.client_name
FROM course
JOIN client
ON course.client = client.client_id
"""

results = read_query(connection, ql)

mylist = []

for result in results:
    result = list(result)
    mylist.append(result)
    # print(result)

print(mylist)

########
# formating output into pandas data frame

# columns = ["course_id", "course_name", "client_name"]
# data_f = pd.DataFrame(mylist, columns=columns)

#display(data_f)
# print(data_f)

#updating records
update = """
UPDATE teacher
SET phone_no = '0781883760'
WHERE teacher_id = 1;


"""

execute_query(connection, update)
