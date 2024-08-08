# Integers: Numbers with no decimals
userAge = 21
mobileNumber = 799001556

# Float: numbers that have decimal parts
userHeight = 1.82
userWeight = 67.2

#  String : refers to text
userName = 'Shawn'
userName2 = 'Paul'

# print(userName + userName2)

# String formating
message = 'The name of our student is %s and he is %d years old. He is %.2f tall',(userName,userAge,userHeight)
# print(message)

message2 = 'The name of our student is {0:s} and he is {1:d} years old. He is {2:.2f} metres tall'.format(userName, userAge, userHeight)
print(message)

# List
# Tuple
# Dictionary
# type casting: converting from one data type to another, we use inbuilt functions; float()