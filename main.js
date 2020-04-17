"use strict";
/*
    TO RUN:
    tsc main.ts or just tsc main, creates a main.js file
    Node main.js or just node main.

    Automatically watch for new code/updates in main.ts
    tsc main.--watch
 */
exports.__esModule = true;
{
    var msg = 'helloworld';
    console.log("msg:", msg);
}
{
    console.log("\nTypes Declarations:");
    // var isBeginner of type Boolean, initialised to true;
    var isBeginner = true;
    var msgOut = !isBeginner ? "I am not a typescript beginner" : "I am a typescript beginner";
    // var total of type number, initialised to zero;
    var age = 26;
    // var name of type string, initialised to Jake;
    var name_1 = 'Jake';
    // var sentence of type string, initialised to string lateral with name;
    var sentence = "\tMy name is " + name_1 + ", I am " + age + "." + msgOut;
    console.log(sentence);
}
{
    // null & undefined:classified as subtypes of all other types.
    var n = null;
    var u = undefined;
    var isNew = null;
    var myName = undefined;
}
{
    console.log("\nArray Types:");
    var list1 = [1, 2, 3];
    var list2 = [4, 5, 6];
    console.log('\tlist1 :', list1);
    console.log('\tlist2 :', list2);
}
{
    console.log("\nTuples:");
    var tuples = ['Jake', 25];
    console.log('\ttuples :', tuples);
}
{
    console.log("\nEnums:");
    var Color = void 0;
    (function (Color) {
        Color["Red"] = "red";
        Color["Green"] = "green";
        Color["Blue"] = "blue";
    })(Color || (Color = {}));
    ;
    var colour = Color.Green;
    console.log('\tcolour :', colour);
}
{
    console.log("\nType Any:");
    var randomValue = 10;
    console.log('\trandomValue :', randomValue);
    randomValue = true;
    console.log('\trandomValue :', randomValue);
    randomValue = "I changed from number, bool and now to String";
    console.log('\trandomValue :', randomValue);
}
{
    console.log("\nType Unknown:");
    var val = "hi";
    var x = val.toUpperCase();
    console.log('\tx :', x);
}
{
    console.log("\nMultiple Types:");
    var out = 25;
    console.log('\tout :', out);
    out = true;
    console.log('\tout :', out);
}
