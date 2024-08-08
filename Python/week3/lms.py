class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.is_borrowed = False

    def borrow(self):
        if self.is_borrowed:
            raise Exception(f"Book '{self.title}' is already borrowed.")
        self.is_borrowed = True

    def return_book(self):
        if not self.is_borrowed:
            raise Exception(f"Book '{self.title}' was not borrowed.")
        self.is_borrowed = False

    def __str__(self):
        status = "Borrowed" if self.is_borrowed else "Available"
        return f"'{self.title}' by {self.author} (ISBN: {self.isbn}) - {status}"


class Member:
    def __init__(self, name, member_id):
        self.name = name
        self.member_id = member_id
        self.borrowed_books = []

    def borrow_book(self, book):
        if len(self.borrowed_books) >= 5:
            raise Exception("Cannot borrow more than 5 books.")
        book.borrow()
        self.borrowed_books.append(book)

    def return_book(self, book):
        if book not in self.borrowed_books:
            raise Exception(f"Book '{book.title}' is not borrowed by this member.")
        book.return_book()
        self.borrowed_books.remove(book)

    def __str__(self):
        borrowed_titles = [book.title for book in self.borrowed_books]
        return f"Member '{self.name}' (ID: {self.member_id}) - Borrowed Books: {', '.join(borrowed_titles)}"


class PremiumMember(Member):
    def __init__(self, name, member_id):
        super().__init__(name, member_id)

    def borrow_book(self, book):
        if len(self.borrowed_books) >= 10:
            raise Exception("Cannot borrow more than 10 books.")
        book.borrow()
        self.borrowed_books.append(book)


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
            if member.member_id == member_id:
                return member
        return None

    def borrow_book(self, member_id, isbn):
        member = self.find_member(member_id)
        book = self.find_book(isbn)
        if not member:
            raise Exception("Member not found.")
        if not book:
            raise Exception("Book not found.")
        member.borrow_book(book)

    def return_book(self, member_id, isbn):
        member = self.find_member(member_id)
        book = self.find_book(isbn)
        if not member:
            raise Exception("Member not found.")
        if not book:
            raise Exception("Book not found.")
        member.return_book(book)

    def __str__(self):
        book_list = "\n".join(str(book) for book in self.books)
        member_list = "\n".join(str(member) for member in self.members)
        return f"Library Books:\n{book_list}\n\nLibrary Members:\n{member_list}"


# Main Program
if __name__ == "__main__":
    # Create the library
    library = Library()

    # Add books
    library.add_book(Book("The Blossoms of the savannah", "Henry R. Ole Kulet", "651571671"))
    library.add_book(Book("Goosebumbs: Welcome to Dead House", "R.L. Stine", "671828917827"))
    library.add_book(Book("The Book Thief", "Markus Zusak", "1768688701818"))

    # Register members
    library.register_member(Member("Shawn", "001"))
    library.register_member(PremiumMember("Ivy", "002"))

    # Print initial state
    print(library)

    # Borrow books
    library.borrow_book("001", "651571671")
    library.borrow_book("002", "671828917827")

    # Print state after borrowing
    print("\nAfter Borrowing:")
    print(library)

    # Return books
    library.return_book("001", "651571671")

    # Print final state
    print("\nAfter Returning:")
    print(library)
