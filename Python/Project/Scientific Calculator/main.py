# main.py
from tkinter import *
import tkinter.messagebox
from calc import Calc
from styles import create_button

def iExit():
    iExit = tkinter.messagebox.askyesno("Scientific Calculator", "Do you want to exit?")
    if iExit:
        root.destroy()
        return

def Scientific():
    root.resizable(width=False, height=False)
    root.geometry("944x568+0+0")

def Standard():
    root.resizable(width=False, height=False)
    root.geometry("480x568+0+0")

root = Tk()
root.title("Scientific Calculator")
root.configure(background='white')
root.resizable(width=False, height=False)
root.geometry("480x568+450+90")

calc = Frame(root)
calc.grid()

txtDisplay = Entry(calc, font=('Helvetica', 20, 'bold'), bg='black', fg='white', bd=30, width=28, justify=RIGHT)
txtDisplay.grid(row=0, column=0, columnspan=4, pady=1)
txtDisplay.insert(0, "0")

# Pass txtDisplay to the Calc instance
added_value = Calc(txtDisplay)

numberpad = "789456123"
i = 0
btn = []
for j in range(2, 5):
    for k in range(3):
        btn.append(create_button(calc, numberpad[i], lambda x=numberpad[i]: added_value.numberEnter(x)))
        btn[i].grid(row=j, column=k, pady=1)
        i += 1

btnClear = create_button(calc, 'C', added_value.Clear_Entry, bg='powder blue')
btnClear.grid(row=1, column=0, pady=1)

btnAllClear = create_button(calc, 'CE', added_value.All_Clear_Entry, bg='powder blue')
btnAllClear.grid(row=1, column=1, pady=1)

btnsq = create_button(calc, "\u221A", added_value.squared, bg='powder blue')
btnsq.grid(row=1, column=2, pady=1)

btnAdd = create_button(calc, "+", lambda: added_value.operation("add"), bg='powder blue')
btnAdd.grid(row=1, column=3, pady=1)

btnSub = create_button(calc, "-", lambda: added_value.operation("sub"), bg='powder blue')
btnSub.grid(row=2, column=3, pady=1)

btnMul = create_button(calc, "x", lambda: added_value.operation("multi"), bg='powder blue')
btnMul.grid(row=3, column=3, pady=1)

btnDiv = create_button(calc, "/", lambda: added_value.operation("divide"), bg='powder blue')
btnDiv.grid(row=4, column=3, pady=1)

btnZero = create_button(calc, "0", lambda: added_value.numberEnter(0), bg='black', fg='white')
btnZero.grid(row=5, column=0, pady=1)

btnDot = create_button(calc, ".", lambda: added_value.numberEnter("."), bg='powder blue')
btnDot.grid(row=5, column=1, pady=1)

btnPM = create_button(calc, chr(177), added_value.mathPM, bg='powder blue')
btnPM.grid(row=5, column=2, pady=1)

btnEquals = create_button(calc, "=", added_value.sum_of_total, bg='powder blue')
btnEquals.grid(row=5, column=3, pady=1)

btnPi = create_button(calc, "pi", added_value.pi, bg='black', fg='white')
btnPi.grid(row=1, column=4, pady=1)

btnCos = create_button(calc, "Cos", added_value.cos, bg='black', fg='white')
btnCos.grid(row=1, column=5, pady=1)

btntan = create_button(calc, "tan", added_value.tan, bg='black', fg='white')
btntan.grid(row=1, column=6, pady=1)

btnsin = create_button(calc, "sin", added_value.sin, bg='black', fg='white')
btnsin.grid(row=1, column=7, pady=1)

btn2Pi = create_button(calc, "2pi", added_value.tau, bg='black', fg='white')
btn2Pi.grid(row=2, column=4, pady=1)

btnCosh = create_button(calc, "Cosh", added_value.cosh, bg='black', fg='white')
btnCosh.grid(row=2, column=5, pady=1)

btntanh = create_button(calc, "tanh", added_value.tanh, bg='black', fg='white')
btntanh.grid(row=2, column=6, pady=1)

btnsinh = create_button(calc, "sinh", added_value.sinh, bg='black', fg='white')
btnsinh.grid(row=2, column=7, pady=1)

btnlog = create_button(calc, "log", added_value.log, bg='black', fg='white')
btnlog.grid(row=3, column=4, pady=1)

btnExp = create_button(calc, "exp", added_value.exp, bg='black', fg='white')
btnExp.grid(row=3, column=5, pady=1)

btnMod = create_button(calc, "Mod", lambda: added_value.operation("mod"), bg='black', fg='white')
btnMod.grid(row=3, column=6, pady=1)

btnE = create_button(calc, "e", added_value.e, bg='black', fg='white')
btnE.grid(row=3, column=7, pady=1)

btnlog10 = create_button(calc, "log10", added_value.log10, bg='black', fg='white')
btnlog10.grid(row=4, column=4, pady=1)

btncos = create_button(calc, "log1p", added_value.log1p, bg='black', fg='white')
btncos.grid(row=4, column=5, pady=1)

btnexpm1 = create_button(calc, "expm1", added_value.expm1, bg='black', fg='white')
btnexpm1.grid(row=4, column=6, pady=1)

btngamma = create_button(calc, "gamma", added_value.lgamma, bg='black', fg='white')
btngamma.grid(row=4, column=7, pady=1)

btnlog2 = create_button(calc, "log2", added_value.log2, bg='black', fg='white')
btnlog2.grid(row=5, column=4, pady=1)

btndeg = create_button(calc, "deg", added_value.degrees, bg='black', fg='white')
btndeg.grid(row=5, column=5, pady=1)

btnacosh = create_button(calc, "acosh", added_value.acosh, bg='black', fg='white')
btnacosh.grid(row=5, column=6, pady=1)

btnasinh = create_button(calc, "asinh", added_value.asinh, bg='black', fg='white')
btnasinh.grid(row=5, column=7, pady=1)

lblDisplay = Label(calc, text="Scientific Calculator", font=('Helvetica', 30, 'bold'), bg='black', fg='white', justify=CENTER)
lblDisplay.grid(row=0, column=4, columnspan=4)

menubar = Menu(calc)

filemenu = Menu(menubar, tearoff=0)
menubar.add_cascade(label='File', menu=filemenu)
filemenu.add_command(label="Standard", command=Standard)
filemenu.add_command(label="Scientific", command=Scientific)
filemenu.add_separator()
filemenu.add_command(label="Exit", command=iExit)

editmenu = Menu(menubar, tearoff=0)
menubar.add_cascade(label='Edit', menu=editmenu)
editmenu.add_command(label="Cut")
editmenu.add_command(label="Copy")
editmenu.add_separator()
editmenu.add_command(label="Paste")

root.config(menu=menubar)

root.mainloop()
