# syntax
# for a in iterable:
#     print(a)

# pets = ['cats', 'dogs', 'rabbits', 'hamsters' ]

# for pet in pets:
#     # print(pet)
    
# # List uses [square brackets]    
# cars = ['audi', 'bmw', 'mercedes', 'tesla', 'porsche']

# for index, car in enumerate(cars):
#     # print(index,car)
    
    
# Dictionary
age = {'Shawn': 21, 'Jeremy': 18}

for i,k in age.items():
    print("Name: %s, Age:%s"%(i,k))
    
    
for i in age:
    print("Name: %s, Age: %s "%(i, age[i]))
    
message = "Shawn"

for i in message:
    print(i) 
    
    
genZ = 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007
genZ2 = genZ[1:5]

print(genZ2)