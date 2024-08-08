class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_borrowed = False
        
    def borrow(self):
        if self.is_borrowed:
            return(f"Book '{self.title}' is borrowed.")
        self.is_borrowed = True
        
    def return_book(self):
        if not self.is_borrowed:
            return(f"Book '{self.title}' is not borrowed.")
        self.is_borrowed = False
        
    def __str__(self):
        availability = "Borrowed" if self.is_borrowed else "Available"
        return f"'{self.title}' by {self.author} (ISBN: {self.isbn}) - {availability}"
    

class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []
        
    def borrow_book(self, book):
        if len(self.borrowed_books) >= 6:
          return ("Cannot borrow more than 6 books.")
        book.borrow()
        self.borrowed_books.append(book)
        
    def return_book(self, book):
        if book not in self.borrowed_books:
           return (f" The book '{book.title}' is not borrowed by this member.")
        book.return_book()
        self.borrowed_books.remove(book)
        
    def __str__(self):
        borrowed_titles = [book.title for book in self.borrowed_books]
        return f"Member '{self.name}' (ID: {self.member_id}) - Borrowed Books: {', '.join(borrowed_titles)}"
    
    
class Library:
    def __init__(self):
        self.books = []
        self.members = []
        
    def add_book(self, book):
        self.books.append(book)
        
    def register_member(self, member):
        self.members.append(member)
        
    def find_book(self, isbn):
         for book in self.books:
            if book.isbn == isbn:
                return book
         return None
     
    def find_member(self, member_id):
        for member in self.members:
            if member_id == member_id:
                return member
            return None
        
    def borrow_book(self, member_id, isbn):
        member = self.find_member(member_id)
        book = self.find_book(isbn)
        
        if member and book:
            if not book.is_borrowed:
                member.borrow_book(book)
                print(f"The book '{book.title}' is borrowed by '{member.name}'.")
                
            else:
                print("Book is already borrowed.")
                
        else:
            print("Member is not found.")
            
    def return_book(self, member_id, isbn):
