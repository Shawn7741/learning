class Staff:
    def __init__(self, pPosition, pName, pPay):
        self._position = pPosition
        self.name = pName
        self.pay = pPay
        
        print("Creating staff object")
        
    def __str__(self):
        return "Postion = %s, Name = %s, Pay = %d"%(self._position, self.name, self.pay)
    
    def calculatePay(self):
        hours = input('\nEnter number of hours worked for %s:'%(self.name))
        hourlyRate = input('Enter the hourly rating for %s:'%(self.name))
        self.pay = int(hours) * int(hourlyRate)
        return self.pay
 
    class Management:
        def __init__(self, pName, pPay, pBonus, pAllowance):
            super().__init__('Ceo', pName, pPay)
            self.allowance = pAllowance
            self.bonus = pBonus
            
        def calculatePay(self):
            basicPay = super().calculatePay()
            self.pay = basicPay + self.allowance
            return self.pay
        
        def calculatePerfBonus(self):
            grade = input('Enter perfomance grade for %s'%(self.name))
            if (grade == 'A'):
                self.bonus = 1000
            else:
                self.bonus = 0
            
            return self.bonus
    
    
    
    
    
    
    
    
    
    
    
    
    
#     @property #decorator
#     def position(self):
#         print("Getter Method")
#         return self._position
    
#     @position.setter
#     def position(self, value):
#         if value == 'CEO' or value == 'Owner':
#             self._position == value
#         else:
#             print("Position is invalid. No changes made")
            
        
        
# staff1 = Staff('CEO','Joan', 650000)
# staff1.position = 'manager'

# print(staff1)

# # staff1.calculatePay()

# # print(staff1)