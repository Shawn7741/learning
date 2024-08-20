from tkinter import *

def create_button(parent, text, command, width=6, height=2, bg='light gray', fg='black', font=('Arial', 18, 'bold')):
    return Button(parent, text=text, width=width, height=height, bg=bg, fg=fg, font=font, bd=3, command=command)
