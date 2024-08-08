# syntax of a function
# def functionName(list of parameters):
#     code what the function needs to do
#     return expression


# def checkIfNumberPrime(number):
#     for x in range(2, number):
#         if(number%x == 0):
#             return False
#         return True
    
# answer = checkIfNumberPrime(233)
# print(answer)


# Global variable
# message1 = "Global variable"

# def myfunction():
#     print("\n Inside the function")
#     print(message1)
    
#     message2 = "Local variable"
#     print(message2)
    
# myfunction()
# print(message1)



# default values
def someFunction(a,b,c=3,d=4,e=6):
    print(a,b,c,d,e)
    
# someFunction(1,2,4,8,11)

# variable length
def addNumbers(*num):
    sum = 0
    for i in num:
        sum = sum + 1
        print(sum)
        
# addNumbers(4,7)


def memberAge(**age):
    for i,j in age.items():
        print("Name = %s, Age = %s"%{i,j})
        
memberAge(Allan = 18, Joan = 18, Shawn = 21)