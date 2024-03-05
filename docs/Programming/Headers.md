---
sidebar_position: 2
---


# Headers

'stdio.h' is a basically a header “Library”

When your code is compiled it goes through compile stages, it is first compiled turned into a object file then the linker:
takes all the object files and turns them into a executable or a library file. 

Now looking into a declared addition program made with a header file and a separate function file. 

We have our main program that looks prints hello world and adds sends two numbers 3 & 7 to the ft_add() function:

```c
file: main .c

#include <stdio.h>

int main(){
   printf("Hello World!\n");
   int x = ft_add(3,4);
   printf("%d\n", x);
   return 0;
}
```
we now have the function that adds the two numbers:

```c
file: ft_add.c

#include <stdio.h>

int ft_add(int a, int b)
{
	return a+b;
}
```

but now we need to create a header file to be able to comple these two as one without having to add the fuction definition in the main function:
to do that we create a header.h file which then allows us to define all our functions. 

```c
file: header.h

#ifndef HEADER_H
#define HEADER_H

int ft_add(int a, int b);

#endif
```
```c
file: header.h

#ifndef <name of header file>
#define <name of header file>
^
|
|
what ever is defined between the #ifndef and #endif will be included in compiling, and linking:
|
|
V
#endif

there should be a successful output, you might see a .h.gch file which enables gcc to compile faster nothign to be worried about. 

```
