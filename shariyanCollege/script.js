// TOPIC: JS IS SINGLE THREAD

// js is singel thread this apply even for assynchrounous code or multithreading code, JS does not execute multithreading code
// or assynchronous concurently. Instad it execute some part of one thread fucntion and then execute some part of 
// another thread code, then it take some more part of first thread and execute it, then agian it take some part of code
// from second thread or any other thread. Behind the scences the execution is performed as above mentioned, but as 
// this execution is performed at very fast speed and too small time it seems that java is executing the tasks all at a 
// same time. BUT IN REALITY JS IS SINGLE THREAD AND IT HANDLE MULTITHREADING CODE BY TIMESHARING
