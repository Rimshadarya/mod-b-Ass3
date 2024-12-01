// Question 1

// Solve the below code of expressions using short circuit?

// let a = 5

// Part1

// let exp1 = ((4 + 5) && "abc" || false + "test") * (a-- || --a) || (false && (++a + 1)) * "end";
// console.log(exp1);  //Answer is NaN

// Part2

// let exp2 = 10 * ("foo" && 5 + (++a) || "bar") && (false + "test") || 0 && true;
// console.log(exp2)  //Answer is falsetest

// Part3

// let exp3 = 3 + (a-- || "start") * 4 && (--a + "value") * (1 + 2) + "result";
// console.log(exp3);  // Answer is Nanresult

// Part4

// let exp4 = "hello" * (++a + true) || (2 + 3 * "abc") * (0 + 1) + "xyz" && 0;
// console.log(exp4);  // Answer is 0 

// Part5

// let exp5 = (true || (0 + 1) * "test" && 4) || (false && 3 + "value") * a-- + 2;
// console.log(exp5);  // Answer is true

// Part6

// let exp6 = ++a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello") || a--;
// console.log(exp6);  // Answer is 11

// Part7

// let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
// console.log(exp7);  // Answer is 9

// Part8

// let exp8 = (0 + 1) && (true + 0) || (false + "test") * 4 && 3 + 2 || "value";
// console.log(exp8);  // Answer is 1

// Part9

// let exp9 = 3 * "abc" + (true + 1) || (++a + "test") && (3 + "result") || null;
// console.log(exp9);  //Answer is 3result

// Part10

// let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
// console.log(exp10);  // Answer is start

// Part11

// let exp11 = (false && "hello") + (a++ || 3 + "test") * 4 || 5 * "abc" && 0;
// console.log(exp11);  // Answer is 20

// Part 12

// let exp12 = "hello" * (true + 0) + 2 || (false + 1) * 3 && "result" || 4 + "test";
// console.log(exp12);  // Answer is result

// Part13 

// let exp13 = 5 * (a++ || false) + 2 && (false + "test") || 3 * "end" && 4;
// console.log(exp13);  //Answer is falsetest

// Part14

// let exp14 = (false + "abc") * 2 || (--a + 1) * "start" + 3 && 4 || "end";
// console.log(exp14);  // Answer is end

// Part15

// let exp15 = (0 + "foo") * 3 + (true && "result") || "start" + (++a + 1) * 4;
// console.log(exp15);  // ANswer is NaNresult

// Part16

// let exp16 = 2 * "end" || (false && true) || "start" + (--a + 2) * 5 && null;
// console.log(exp16);  //Answer is null

// Part17

// let exp17 = 3 + 2 * ("test" + a--) && (false + 3) * 5 || 0 + "value" && 4;
// console.log(exp17);  //Answer is 4

// Part18

// let exp18 = "start" && (false || 2 * "end") || (++a + 1) * 3 + "result" && 0;
// console.log(exp18);   //Answer is 0

// Part19

// let exp19 = ((5 + 1) && "foo") || (++a + 2) * (false + 3) + "test" && 7;
// console.log(exp19);  //Answer is foo

// Part20

// let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
// console.log(exp20);  //Answer is end5

// PArt21

// let exp21 = 5 * (true + ++a) && ("test" + false) || 7 * (true + 2) + "value";
// console.log(exp21);  // Answer is testfalse

// Part22

// let exp22 = "foo" + 4 && (++a + 1) * "start" || 5 + 6 * (false + true) && "test";
// console.log(exp22);  //Answer is test

// Part23

// let exp23 = (false && 2) || (a++ + 1) * "end" && "start" || 4 * 5 && "result";
// console.log(exp23);  //Answer is result

// Part24

// let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
// console.log(exp24);  //Answer is 2

// Part25

// let exp25 = (3 + 4) * (false || a--) && 5 || "start" + 1 + "test" && 0;
// console.log(exp25);  //Answer is 5

// Part26

// let exp26 = "hello" && 3 * 2 + (a++ + 1) || (false + true) * "result" + "end";
// console.log(exp26);  //Answer is 12

// Part27

// let exp27 = 3 * "test" + (true + 2) && (false || "value") || "start" + a++;
// console.log(exp27);  //Answer is start5

// Part28

// let exp28 = (false + 1) * "hello" || 3 + (a-- && 5) * "result" || "world";
// console.log(exp28);  //Answer is world

// Part29

// let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
// console.log(exp29);  //Answer is Nanresult

// Part30

// let exp30 = (true + 3) * "test" || 1 * 5 && (false + "value") + "end" || a--;
// console.log(exp30);  //Answer is falsevalueend

// Part31

// let exp31 = 3 + "end" || 2 * "test" && (++a + true) || "start" + 1;
// console.log(exp31);  //Answer is 3end

// part32

// let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false + "test");
// console.log(exp32);  //Answer is 3

// // Part33

// let exp33 = 2 + 3 && ("end" + a++) || (false + "test") * 4 && 5;
// console.log(exp33);  //Answer is end5

// // Part34

// let exp34 = "hello" + 4 * (false + a--) || 3 && "start" + 1 || (true + "test");
// console.log(exp34);  //Answer is hello20

// // Part35

// let exp35 = "start" && (a-- || "test") * 4 + 5 && (false + "end") || 2;
// console.log(exp35);  //Answer is falseend

// Part36

// let exp36 = 1 + "value" && (++a + 2) || (3 + "result") * true && 4;
// console.log(exp36);  //Answer is 8

// Part37

// let exp37 = "hello" && 2 + "test" || (++a + 3) && (true + "value") + 1;
// console.log(exp37);  //Answer is 2test

// Part38

// let exp38 = 5 * (a-- || "test") && 6 * "result" || 2 + "end";
// console.log(exp38);  //Answer is 2end

// Part39

// let exp39 = "start" && (false + 1) * 2 || 3 + 4 * "hello" + 5 && 0;
// console.log(exp39);  //Answer is 2

// Part40

// let exp40 = (false || "test") * 5 || 6 + (a-- && "result") * 4;
// console.log(exp40);  //Answer is NaN

// Part41

// let exp41 = "start" && (3 + 2) * "test" + 5 || 4 * (false + 1) && "hello";
// console.log(exp41);  //Answer is hello

// Part42

// let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 + a--;
// console.log(exp42);  //Answer is Nan

// Part43

// let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
// console.log(exp43);  //Answer is start5

// Part44

// let exp44 = 3 + 2 * (true + 5) && "value" + 1 || (++a + 2) + "test";
// console.log(exp44);  //Answer is value1

// Part45

// let exp45 = (false || 1) + "test" && 5 + (3 * a--) || "end" + 2;
// console.log(exp45);  //Answer is 20

// Part46

// let exp46 = (2 * a-- + 4) && "test" || 3 + "hello" && (false + 1) * 5;
// console.log(exp46);  //Answer is test

// Part47

// let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
// console.log(exp47);  //Answer is 8

// Part48

// let exp48 = (false || 1) * "test" && 4 || (true + 2) * "hello" + a--;
// console.log(exp48);  //Answer is NaN

// Part49

// let exp49 = (2 * 3) + "result" && 4 * (a-- + 1) || "start" + 2 + "end";
// console.log(exp49);  //Answer is 24

// Part50

// let exp50 = 32 && true - ++a && " " || "true";
// console.log(exp50);  //Answer is " "

// Part51

// let exp51 = (5 + 2) * (a-- + 1) || "start" + (++a + "end") * 3;
// console.log(exp51);  //Answer is 42

// Part52

// let exp52 = (++a && 3) * "test" || 4 + "start" * (a-- + "result");
// console.log(exp52);  //Answer is NaN

// Part53

// let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
// console.log(exp53);  //Answer is startend

// Part54

// let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
// console.log(exp54);  //Answer is NaN

// Part55

// let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
// console.log(exp55);  //Answer is startNaN

// Part56

// let exp56 = 4 * (a-- + 1) + "test" || (++a + 3) * "start" + 5;
// console.log(exp56);  //Answer is 12test

// Part57

// let exp57 = (3 * "test" + 1) || (++a && a--) * "result" || "value";
// console.log(exp57);  //Answer is value

// Part58

// let exp58 = (a-- + "start") * "result" || (false + 2) + "end" + 3;
// console.log(exp58);  //Answer is 2end3

// Part59

// let exp59 = 5 * (a-- + 3) * "test" || (false && "start") + 2;
// console.log(exp59);  //Answer is 2  

// Part60

// let exp60 = (a-- + "value") * "test" + 4 || (false + 2) * "end";
// console.log(exp60);  //Answer is NaN

// Part61

// let exp61 = 3 + (++a + "result") || (a-- + 2) * "test" + 5;
// console.log(exp61);  //Answer is 3-1result

// Part62

// let exp62 = "start" + (a-- + "test") * 3 || (false && 4) * "end" + 5;
// console.log(exp62);  //Answer is startNaN

// Part63

// let exp63 = (++a + 2) * "test" || "value" + (a-- + 3) * "result";
// console.log(exp63);  //Answer is valueNaN

// Part64

// let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
// console.log(exp64);  //Answer is startfalse

// Part65

// let exp65 = "value" + 3 * (a-- + "test") || (false + 1) * "end";
// console.log(exp65);  //Answer is valueNaN

// Part66

// let exp66 = (++a + "test") * 2 || (a-- + 1) * "start" + "result";
// console.log(exp66);  //Answer is NaNresult

// Part67

// let exp67 = "start" + (a-- + 3) * "end" || (++a + "test") * 5;
// console.log(exp67);  //Answer is startNaN

// Part68

// let exp68 = 2 * (a-- + 1) + "result" || (false && "start") * 3;
// console.log(exp68);  //Answer is -8reslut

// Part69

// let exp69 = 4 + (a-- + "test") * 5 || (false + 2) * "start";
// console.log(exp69);  //Answer is NaN

// Part70

// let exp70 = (a-- + 2) * "result" || (false && "end") + 3;
// console.log (exp70);  //Answer is 3

// Part71

// let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
// console.log(exp71);  //Answer is test-10

// Part72

// let exp72 = 3 * (a-- + "value") || (false + 2) * "test";
// console.log(exp72);  //Answer is NaN

// Part73

// let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
// console.log(exp73);  //Answer is Nanstart

// Part74

// let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
// console.log(exp74);  //Answer is NaNstart

// Part75

// let exp75 = (3 * "test") + (a-- + "start") || (false + 1) * "result";
// console.log(exp75);  //Answer is NaN-11start
