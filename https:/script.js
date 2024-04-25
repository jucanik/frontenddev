
// // var a = 10;

// // function x() {
// //     var a = 7;
// //     console.log(this.a);
// //     function y(){
// //         console.log(a);
// //     }
// //     y();
// //     console.log(this.a);a
// // }
// // x();

// // console.log(this.a);


// //block -> grouping of multiple statements where Js engine expects single statement. combiningg multiple statements

// //block scope -> what all variables and fumctiions we can access inside the block

// /// let const comes inside the block and block scoped . but var is global scoped . let is either script or block scoped

// const c =100;
// function x() {
//     const c = 10;
//     console.log(c);
// }
// x();
// console.log(c);

// /// illegal shadowing


// Hoisting : Accessing variables even before initialisation.

// Window is created in global space -> in the global level this points to the 

// Whenever any Javascript program is run , a global object is created , global execution context is created and along with the exception context this variable created . 
// Chrome V8 Javascript engine.
// Global object created -> browser window / same with node
// In base level , this === window
// Whenever any exceution context, (global execution context / functional execution context) created , this created .
// At global level , this points to global window object


// Scope => where a variable can be accessed in our code

// Call Stack -> Global Execution Context -> Memory Context -> Code Context

// Lexical environment is local memory along with lexical environment of its parent . Whenever any execution context is created lexical environment is also created

// child function is lexically sitting inside parent function and any function is lexically inside Global scope

// Scope chain -> the chain of all the lexical environments

// Closure -> close inside a

// let a =10;
// var b =100;
// Accessing variables before initialisation -> hoisting. Let and var both are allocated memory before initialisation . but let variables are stored in different memory space other than Global (in Script memory space)
// Temporal dead zone -> time between let variables are hoisted and initialised. When let variable initialised temporal dead zone ends. Access let variable in temporal dead zone will throw error i.e cannot access variable before initialisation.-> Uncaught Reference Error

// Any random variable -> 
// X is not defined -> Uncaught Reference Error 

// Var b is attached to window object
// But let & const not attached to window

// In global level this refers to window object. {this.let variable} -> defined

// Repetitive deceleration of let -> Syntax error . Single line of code is not executed

// Same let variable name can not be used in the same scope.

// Diff between let and const ->

// Let can be declared first and then initialised 
// But const need to be declared and initialised together.
// If const initialised later without initialising while declaration it throws Syntax Error 
// If const initialised twice it throws type error ;


// Let a =10;
// Let a =20; -> Syntax error

// Const a;
// A = 10; -> Syntax error
// Const a = 10;
// A =20; -> Type Error

// When we try to access any random variable -> Reference error
// When let and const are accessed without initialisation & declaration . Variable is in temporal Dead Zone -> Reference error

// Use const when value is initialised once . Then use let and var.
// Initialise let and const in start of the scope itself

// Block scope:->
// {

// } => compound multiple statements

// Blocks coped => what variables we can access inside the block-> let and const are stores are in separated memory space i.e reserved for block

// var is inside global scope even if it is present inside block .but let const are block scope if defined inside block

// If let variables kept inside block , it is script scoped

// We can define const  in the same scope only once. Let and. Const are block scoped , but var is function scoped
// Closure is a function which bundles with lexical environment. Function along with lexical scope forms a closure. Closure is the combination of function bundled together with its references to surrounding state (i.e lexical environment).

// Module Design Pattern
// Currying
// Functions like once
// Memoize
// Maintaining state in async world
// Settimeout
// Iterators
// Data hiding and encapsulation


// ///function statement or function declaration

// Function a() {
// console.log();
// }
// a();
// // function expression
// Var b= function (){
// 	console.log();
// }
// b();

// Function statement can be accessed before initialised 
// But defining functions as function expression -> we cannot access them before initialisation . Because we are storing the functions as variables . So while hoisting they are stored as undefined . Now we cannot do undefined();
// var b= function(){
// 	console.log();
// }
// b(); -> valid

// But 

// b()
// Var b= function(){
// console.log();
// }. -> not valid

// function(){
// } -> Anonymous functions. It will throw syntax error

// var b = function xyz() {
// console.log();
// }
// b(); -> 
// Here if we call xyz() it will throw reference error -> xyz() function not defined . Reason ->xyzzy function is not defined in the outer scope as a function . It is defined as variable.
// Var b = function xyz(){
// console.log(xyz)
// }
// b() ;
// f xyz(){
// Console.log(xyz)
// }


// Parameters and arguments . Values and identifiers we get are parameters and when we pass them inside a function are arguments.
// function a(param1, param2)
// a()

// First Class Function ->
// Passing a function inside another function ->
// Var b = function (param1) {
// 	return function(){}
// }

// Function xyz(){}
// b(xyz)
// Ability to use functions as values is first class function -> pass function as arguments / receive as parameters / return function

// //First class citizens /first class functions
// We can take a function and pass it into another function.theseare callback functions
// Javascript is synchronous single threaded language.

// //callback functions -> take a function and pass into another function . The function we pass to another function 


// // let and const are stored in seperate memory space Script before initialization 

// // temporal dead zone time between let variable is hoisted and initialized some value

// //window is global object. only var can be accessed with window object (e.g window .variable). but let and const can not be accessed via window

// //let snd const variable can not be redeclared within same scope

// //in case of let , declaration and initialisation need to be simultaneously .

// abccd(((())))de

// //dns zone>
// ////www.google.com
// //bard.google.com -> dns zone mapping there would be a place where mapping is stored
// // for every domain (google.com) zonre configuration . logical grouping of all the sundomains dns records
// Authoritative Name Server (Zones are hosted)
// buy domain from godaddy but use AWS name server to manage DNS through route 53
// DNS Resolver ->ISP level . DNS resolver is server that carries the resolution of domain name to IP Address DNS 
// most home routers are DNS resolvers
// DNS Resolution:
//Client-> browser -> router (ISP) -> rootserver (13 fixed root name servers in the world i.e 13 fixed ip addresses)this does not mean there are 13 physical servers . Root servers from single 


// operator are distributed across the world and they leverage anycast (advertising same ip address)
// 	different physical servers distributed across the world and they all are broadcasting same IP address 
// any request comes (google.com) -> route -> trying to resolve google.com .request will go to one of 13 root name servers -> it will reach out to nearesrt servber broadcasting same ip address
// and return the response
// // how google use anycast to improve their load balancers
// the closest root name server when queried for domain name, the server responds with IP address of another srver(which is top level domail tld .com)
// now ISP makes a request to TLD . TLD responds with authoritative name server ns1.gns.com ip address. further isp makes request bto authoritative name server which  provides IP address 17.53.31.253 of load balancer
// then isp sends IP address  to browser
// browser further establisgh the connection with ip address which is a load balancer then load balancer forwards the request to one of the backend or frontend servers 



//// Asynchronous Javascript . js synchrounous single threaded language. it has one call stack inside js engine and all the code executed inside call stack
///  whenever a js program is run a global execution contextr is created and then this global execution context is polled into the call stack .to execute code of a function , a execution 
// context is created for the function. and this function execution context is pushed into call stack. at last gec pops out of the call stack
//call stack is inside js engine and it is inside  browser. browser has js engine , local storage , timer , https:// . browser can fetch data from backend servers , fetch data and displays
//js engine needs a way to access these super powers
//web apis -> needed to access browser propertes-> i) set TimeOut () ->not part of js rather property of browser ii) DOM APIs iii) fetch (make connection to external servers)
// iv) local storage -> local databases v) console vi) location .we get these web APIs inside call stack because of Global object i.e window
//e.g window.set TimeOut() ii) window.console.log . but we just do set timeout because we are already in global scope
// set Timeout ( function cb(){}, 5000)-> browser registers the function and set the timer and js engine proceeds .gec poped . but timer runs . and when 5000 ms ends , call back function
// cb need to be send to call stack. it will go to call stack through the call back queue. whenever timer expires call back functions move to call back queue. job of Event Loop is to check the 
// call back queue and put this cb function to call stack. event loop checks call back queue and pushes the cb functions present in cb queue inside call stack. and cb function context is
// executed inside call stack
// add EventListener or getElementById is web DOM (Document Object Model) API which is provided by browser to JS Engine. getElementById DOM API internally is some html code which basically finds out the html element with some id 
// and returns to JS Engine.
//add Event Listener also registers a call back on event .in web apis environment , call back will be registered and event Click will be attached to it -> regiatering a callback inside WEb API Environment. After registering the call back , JS Engiune execute s the remaining lines 
// and when all the lines are executed GEC popped out of the call stack .
// but this event handler will stay in Web API Env unless we explicitly remove the event listener or close the browser
// when user clicks on the button , the cb function pushed in the call back queue from web api env.  and event loop has the job to constantly monitor call stack and call back queue.
// if there is a function inside call back queue and call stack is empty , then call stack quickly executed
// fetch Web ApI makes API call and fetch function returns a promise. we also need to return a call back function which will be exceuted after fulfilling the promise.
// in case of network calls or promises it will go to micro task queue not call back queue
// console.log(start)
// setTimeOut(function cb(){
// console.log()
//}, 5000) 
// fetch(https://).then(function cb(){
// console.log();
//})
// all the call back functions which comes through promises (e.g fetch().then()) will be pushed inside micro task queue and has higher priority over call back queue. and mutation observer 
// are also part of micro task queue . mutation observer monitors dom tree and if there is any update any update in dome tree execute the promises and the promise function pushed into the microtask queue
// call back queue is also known as task queue
// micro task queue only consists of call backs which comes through promises and mutation observers
// starvation of the call back queue -> when there are multiple tasks inside micro task queue and call back queue did not get a chance to execute. 
// event loop is property of browser . The JS Engine is responsible for compiling and executing the JS code inside call stack while event loop is responsible for handling asynchronous events

// JS can run on browser or server --> all possible because of JavaScript Run time Environment powered by JS Engine

// Browser can run JS code because of JS Run Time Environment. JS Runtime Environment in the browser has an API named as local storage-> can access local storage from our code
// set timeout API is present in JS run time environment of browser
// Code -> Parsing -> Compilation -> Execution
// Syntax Parser creates AST (Amazon Syntax Tree). AST which is generated passed to Compilation phase
// JIT (Just in time compilation )
// Interpreter vs Compiler -> both compiles the code -> Interpreter executes the codse line by line
// in compiler , first whole code uis compiled even before executing
// original code is modified and made it to optimised version of the code . then  this new optimised version of the code and then it is exceuted
// it depends on JS Engine . both interpreter and compiler
// AST is send to interpreter . Interpreter converts the high level code to byte code and executes line by line . while runtime compiler talks with interpreter and optimises the code as much as it can 
// so it is called Just in time compilation . AOT -> Ahead of time compilation . takes the code and compiles it as much as it can 
// JS can behave like interpreted + compiled language 
// AST after parsing goes to interpreter . Now this interpreter converts this high level JS Code to bytecode and the code moves to execution step.. while doing so , it takes the help of compiler to optimize the code
// compiler job is optimize the code as much as possible . 
// js engine components -> 1-> memory heap + call stack
// JS Enginre is present inside JS Runtime Environment. Mark and Sweep Algorithm Garbage Collector. Parsing -> Compilation -> Exceution. V8 has ignition interpreter and Turbo Fan Compiler
// JS source code -> Parser and generates Abstract Syntax Tree-> Interpreter Ignition -> generates byte code. Along with Interpreter , Turbo Fan compiler constantly working to optimize the code
// and this optimized machine code generates Byte code. Orinoco Garbage collector
// JS Run time environment consists of JS Engine + Web APIs + Callback Queue+ microTask Queue + Event Loop
// code is paassed throgh Parsing + Compilation + Execution Phase. interpreter & compiler works togeher to run the code faster -> Just In Time Compilation
// Inlining + Copy Elision + Inline caching
// WE can do functional Programming + OOP Programminmg
// function cb(){}
// setTimeOut (cb , 5000);

// IPV4 -> 32 bits Nid / Hid (8 / 24) -> how many N/W  & How many hosts per Network 
// 2^8 -> 256 networks are possible -> 2 ^24 ip addresses / hosts ate possible 
// unicasting broadcasting multicasting
