#method1
# address = 'amosnyaundi4@gmail.com@github.com'
# amos = address.split('@')[2]

# print(amos)
# #output = gmail.com
# #@ used as separator
# #amosnyaundi4   index as 0
# #gmail.com index as 1
# #github.com index as 2

#method2
address = 'amosnyaundi4@gmail.com'

# name, domain = address.split('@')

# print(domain)

#method3
# address = 'amosnyaundi4@gmail.com'
# data = address.split('@')
# domain = data[1]
# name = data[0]

# print(domain)


#method4 slicing
domain = address[13:]

print(domain)


