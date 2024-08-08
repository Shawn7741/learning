def count_words(sentence):
    words = sentence.split('-')
    return len(words)


# Get input from the user
user_input = input("Hello Shawn how are you?: ")
word_count = count_words(user_input)
print(f"Hello Shawn how are you?: {word_count}")


# def are_anagrams(str1, str2):
#     return sorted(str1) == sorted(str2)

# # Get input from the user
# string1 = input("boy: ")
# string2 = input("boy: ")

# if are_anagrams(string1, string2):
#     print("The strings are anagrams.")
# else:
#     print("The strings are not anagrams.")

# madam aadmm
# sistas aisst
