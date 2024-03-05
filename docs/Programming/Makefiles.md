---
sidebar_position: 3
---


# Makefile

When making Makefiles it is almost like tag based command. 

Why do we need it ?

when you have a large program you would want to make a .o file
then link all these files to make your final program. 

yes you just use cc -FLAGS "file1" "file2" -o exe

but what happens when you have n files ? and you make a syntax
error on the first file ? 

this is why you would need a Makefile to compile codes faster

here we have a MakeFile 


```MKG
CFLAGS = -Wno-implicit-function-declaration

all: final

final: main.o hello.o
    @echo "linking and producing the  final program"
    gcc $(CFLAGS) main.o hello.o -o final
    chmod +x final

main.o: main.c
    @echo "compiling the main file"
    gcc $(CFLAGS) -c main.c

hello.o: hello.c
    @echo "compiling the hello file"
    gcc $(CFLAGS) -c hello.c

clean:
    @echo "cleaning everything but the source files"
    rm main.o hello.o final function.h.gch

```

to make it simple when ever you see " Item1 : Item2" 

remember item1: is the output that would be produced
         item2: is the file needed to produce item1

now explaining the Makefile
we will start with

```MKG
main.o: main.c
    @echo "compiling the main file"
    gcc $(CFLAGS) -c main.c
```
this also applies to hello.o the tag states that for main.o to be
produced we need main.c when running this tag we will echo "compiling 
the main file" we then compile using gcc with CFlAGS.

CFLAGS is mentioned above as: -Wno-implicit-function-declaration
for the sake of making makefiles clear we will skip both the flags -c 
& -Wno-implicit-function-declaration. just think of them something you
use to compile. 

when then need to get together these compiled files main.o and hello.o. 
but how do we do that ? we link them in another tag. 

```MKG
final: main.o hello.o
    @echo "linking and producing the  final program"
    gcc $(CFLAGS) main.o hello.o -o final
    chmod +x final
```

final will be produced from linking and producing the two other compiled files
into a running program using -o with the name final. 

now what happens if we make a mistake and we want to re-make the file ?

it will give us a warning saying "make: Nothing to be done for `all'."

that is because the files have been compiled and we need to delete the old ones 
and make new instance of the compiled files. that is when we use clean 

```MKG
clean:
    @echo "cleaning everything but the source files"
    rm main.o hello.o final function.h.gch
```
in a make file you can also use terminal command and here we are removing hello.o
main.o final function.h.gch

at the end we used "all" to call upon buidling the final running program

## Usefull Links

1. https://youtu.be/yWLkyN_Satk?si=c_vVOMT-c1O4TJjo
