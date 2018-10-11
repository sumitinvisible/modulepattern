// Basic structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function() {
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       // console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added....');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    // get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));



/* 

All right guys are the first pattern we're going to look into is the module pattern and a slight variation

of it called the revealing module pattern.

Now I do want to mention that E-6 or EIAS 20:15 introduced actual modules in javascript meaning that

we can use separate files to export modules which are just custom pieces of code and import them into

a new file.

However this is still not supported in browsers.

You'll have to use a compiler like Babel along with a module loader like web pack for that to work and

we will be getting into that later.

But in the last five we have something called the module pattern that allows us to break up parts of

our code into self-contained modules with private properties and methods or private variables and functions.

So this is actually my favorite pattern and we're going to build a 12 video calorie counter application

with it in the next section.

So let's take a look at how the module pattern works as well as the revealing module pattern.

So basically what we want to do where we have our index each team out here just have a heading and then

we're connecting our app.

J Yes but the way that the module pattern is set up.

Let me just give you a basic structure here.

So we have a module which is going to be in if we can if you guys remember what it is it's immediately

invoked function expression and it runs right away.

So we need to wrap it in parentheses to make it an expression we need to put a function in here an anonymous

function and we need to put parentheses after it to Dick to run it.

And then the idea of the module pattern is to declare

private variables and functions up here and then we have a return.

And what I mean by private meaning that we can't access it from outside the module.

And then whenever we return this is where we declare public variables and functions.

All right.

So that's that's the the blueprint for the module pattern.

Now we're going to have a pretty large project that's going to be a calorie tracker using the module

pattern where we're going to have an item controller.

Each module will be its own controller of an item controller that will take care of the meal items that

we add will have a UI controller that will take care of anything to do with the UI so clicks and form

submissions rendering stuff in the UI.

Anything to do with that will be in the UI controller will have a storage controller that will persist

things to local storage and then we'll have a main app controller where everything will kind of meet

and we'll call an initialiser.

All right so what are you going to do here is comment this out and let's create a module called UI controller.

So UI see TRL and we're going to set that to a module modules so this will be an iffy.

And like I said anything we we declare up here is going to be private so I'm going to create a variable

called text and when I said that to the text of hello world and then all I want to have here is a function

that's going to change this heading right here.

This H-1 to whatever is in this text.

So let's go ahead and create a variable.

So this would be a function expression will create a variable called Change text and we'll send it to

a function

and let's say Konst element and let's grab that H-1.

So document Daut let's do queries selector and we'll just grab it by the tags so H-1 and then we're

going to say elements Daut text content and set that to text.

Ok so we can access any any value any variables we put up here we can access from within this function.

Now both of these are private.

We can access these from outside of this module of the controller module we just put a comment here

saying that this is the standard module pattern and what we want to do is return something from this

module.

OK so what we return is going to be public which is stuff that we can access from outside.

So I'm going to have a function called Call change text and set that to a function and then let's run

change text because we can access the private values the private Boll's the private functions we can

access from within these public functions.

All right so we'll do that and we'll also go ahead and cons. Daut log text just to show you that we

can access that variable directly.

OK so now outside of the module which would be down here we can say UI control or Daut call change text.

All right.

So go ahead and save and you can see that it actually changes to Hello World.

It also logs hello world which is coming from right here.

Now if I were to try to console log actual Just do it over here.

And chrome if I were to take the UI controller and you can you'll see I can do.

Call change tax which you just did.

I can't however do change text if I do that it's going to see change text is not a function because

I can't access this private function from outside.

All right.

We get the same error if I try it over here in fact I'll do that.

It's a UI control word Daut change text and you see I get the same error.

And if we try to access say UI control text we try to access this right here and save that is see that

change sex is not a function.

Let me just comment that.

That's blocking and you'll see that will get undefined for that.

This hello world is coming from this right here.

If I were to comment this so you'll see we just get undefined.

OK so that's that's the foundation of the module pattern we have private stuff here.

And whatever is in this return is going to be public.

So let's go ahead and comment this so and I'm going to give you an example of the revealing module pattern

which is very very similar.

The main difference is that instead of returning our own public functions like we did here you basically

map an object literal and you map to private functions that you want to reveal.

And that's that's why it's called the revealing pattern because you can reveal certain methods from

your your module.

So what we're going to do here use a different example and let's call this the item controller.

So this would be like a databased controller and will set that to a module which is just an iffy function

that invokes automatically.

And let's say let data.

And we're going to set that to an empty array so this can be thought of as as our state.

All right.

And then we'll create private methods here like ADD

so will say add and I'll take an item and then we'll just take that data array and we'll push onto it

that item and then we'll simply just do a console log and we'll say item added

All right now a lot of times you might see an underscore with variables like this because this is a

private variable.

If you remember back in I think it was Section 2 when we talked about conventions for naming variables

I told you that this is you can do this it's allowed.

But you should only do it if it's a private variable and you won't you're only going to deal with private

variables in more advanced stuff like this like using different patterns so that's where you might see

that.

I don't do that.

I don't use the underscore but you might see that in other people's code.

Or you may want to use it yourself.

So let's also create a function called get and forget.

It's going to take in an ID.

OK so it'll take an item id and then I'm going to return the data and I'm just going to use the the

find method here and then passing a value actually will say item and let's add that to an arrow function

and then we'll return let's say return item Daut ID if it's equal to the ID that's passed in.

All right.

So those are adding getting.

Right now these are these are completely private.

So if we go down here and we say return and what we're going to return is an object literal here with

at let's say ADD and set that to add and then say get set to get making those make basically revealing

these methods.

So then we can go down here and we can say item controller Daut add and then let's pass and here an

object with an ID just say Id one name John and save that and we get item added.

All right.

And we could even go in here now and say item controller and we could do get in let's get the item with

the idea of one and it gives us John OK and we can do the same thing over here so will say item dog

gets the idea of one actually will need to console log that

flips item controller OK and I could add another item here if I wanted.

I don't know why items are people but that's fine I'll say Mark and then we'll get the item with two

and you can see we get Mark.

Now if I were to not have this right here if I comment that out that's going to make make this private.

OK if we don't include it in this return it's going to be private.

And if I save we're going to get an error saying that it's not a function.

All right.

So that's one of the main differences between the revealing module and the standard module pattern is

that we're mapping or we're returning an object literal that directly reveals methods that are inside

of the module.

All right.

Hopefully that makes sense.

Now this looks cleaner.

The revealing module pattern does look cleaner but this allows you to do more because you can.

You know you can call change tacks but you can do other stuff as well like console log something without

having to include it in your actual private method.

So I mean it's all up to you what you want to use and it depends on what you're building as well.

So you know it's all up to you.

My job is to just introduce you to these patterns in these ways of doing things and then you know you

make your choice on what you want to do.

All right guys that's going to be it for this video in the next video.

I want to talk about the singleton pattern which is actually a very another variation of the module

pattern that uses an iffy but it has it's a little different where you can it's use to create objects

but you can only instantiate the object once.

So we'll get into that next.

 Autoscroll inactive
Improve captions
Edit and submit for approval 

All right guys are the first pattern we're going to look into is the module pattern and a slight variation
of it called the revealing module pattern.
Now I do want to mention that E-6 or EIAS 20:15 introduced actual modules in javascript meaning that
we can use separate files to export modules which are just custom pieces of code and import them into
a new file.
However this is still not supported in browsers.
You'll have to use a compiler like Babel along with a module loader like web pack for that to work and
we will be getting into that later.
But in the last five we have something called the module pattern that allows us to break up parts of
our code into self-contained modules with private properties and methods or private variables and functions.
So this is actually my favorite pattern and we're going to build a 12 video calorie counter application
with it in the next section.
So let's take a look at how the module pattern works as well as the revealing module pattern.
So basically what we want to do where we have our index each team out here just have a heading and then
we're connecting our app.
J Yes but the way that the module pattern is set up.
Let me just give you a basic structure here.
So we have a module which is going to be in if we can if you guys remember what it is it's immediately
invoked function expression and it runs right away.
So we need to wrap it in parentheses to make it an expression we need to put a function in here an anonymous
function and we need to put parentheses after it to Dick to run it.
And then the idea of the module pattern is to declare
private variables and functions up here and then we have a return.
And what I mean by private meaning that we can't access it from outside the module.
And then whenever we return this is where we declare public variables and functions.
All right.
So that's that's the the blueprint for the module pattern.
Now we're going to have a pretty large project that's going to be a calorie tracker using the module
pattern where we're going to have an item controller.
Each module will be its own controller of an item controller that will take care of the meal items that
we add will have a UI controller that will take care of anything to do with the UI so clicks and form
submissions rendering stuff in the UI.
Anything to do with that will be in the UI controller will have a storage controller that will persist
things to local storage and then we'll have a main app controller where everything will kind of meet
and we'll call an initialiser.
All right so what are you going to do here is comment this out and let's create a module called UI controller.
So UI see TRL and we're going to set that to a module modules so this will be an iffy.
And like I said anything we we declare up here is going to be private so I'm going to create a variable
called text and when I said that to the text of hello world and then all I want to have here is a function
that's going to change this heading right here.
This H-1 to whatever is in this text.
So let's go ahead and create a variable.
So this would be a function expression will create a variable called Change text and we'll send it to
a function
and let's say Konst element and let's grab that H-1.
So document Daut let's do queries selector and we'll just grab it by the tags so H-1 and then we're
going to say elements Daut text content and set that to text.
Ok so we can access any any value any variables we put up here we can access from within this function.
Now both of these are private.
We can access these from outside of this module of the controller module we just put a comment here
saying that this is the standard module pattern and what we want to do is return something from this
module.
OK so what we return is going to be public which is stuff that we can access from outside.
So I'm going to have a function called Call change text and set that to a function and then let's run
change text because we can access the private values the private Boll's the private functions we can
access from within these public functions.
All right so we'll do that and we'll also go ahead and cons. Daut log text just to show you that we
can access that variable directly.
OK so now outside of the module which would be down here we can say UI control or Daut call change text.
All right.
So go ahead and save and you can see that it actually changes to Hello World.
It also logs hello world which is coming from right here.
Now if I were to try to console log actual Just do it over here.
And chrome if I were to take the UI controller and you can you'll see I can do.
Call change tax which you just did.
I can't however do change text if I do that it's going to see change text is not a function because
I can't access this private function from outside.
All right.
We get the same error if I try it over here in fact I'll do that.
It's a UI control word Daut change text and you see I get the same error.
And if we try to access say UI control text we try to access this right here and save that is see that
change sex is not a function.
Let me just comment that.
That's blocking and you'll see that will get undefined for that.
This hello world is coming from this right here.
If I were to comment this so you'll see we just get undefined.
OK so that's that's the foundation of the module pattern we have private stuff here.
And whatever is in this return is going to be public.
So let's go ahead and comment this so and I'm going to give you an example of the revealing module pattern
which is very very similar.
The main difference is that instead of returning our own public functions like we did here you basically
map an object literal and you map to private functions that you want to reveal.
And that's that's why it's called the revealing pattern because you can reveal certain methods from
your your module.
So what we're going to do here use a different example and let's call this the item controller.
So this would be like a databased controller and will set that to a module which is just an iffy function
that invokes automatically.
And let's say let data.
And we're going to set that to an empty array so this can be thought of as as our state.
All right.
And then we'll create private methods here like ADD
so will say add and I'll take an item and then we'll just take that data array and we'll push onto it
that item and then we'll simply just do a console log and we'll say item added
All right now a lot of times you might see an underscore with variables like this because this is a
private variable.
If you remember back in I think it was Section 2 when we talked about conventions for naming variables
I told you that this is you can do this it's allowed.
But you should only do it if it's a private variable and you won't you're only going to deal with private
variables in more advanced stuff like this like using different patterns so that's where you might see
that.
I don't do that.
I don't use the underscore but you might see that in other people's code.
Or you may want to use it yourself.
So let's also create a function called get and forget.
It's going to take in an ID.
OK so it'll take an item id and then I'm going to return the data and I'm just going to use the the
find method here and then passing a value actually will say item and let's add that to an arrow function
and then we'll return let's say return item Daut ID if it's equal to the ID that's passed in.
All right.
So those are adding getting.
Right now these are these are completely private.
So if we go down here and we say return and what we're going to return is an object literal here with
at let's say ADD and set that to add and then say get set to get making those make basically revealing
these methods.
So then we can go down here and we can say item controller Daut add and then let's pass and here an
object with an ID just say Id one name John and save that and we get item added.
All right.
And we could even go in here now and say item controller and we could do get in let's get the item with
the idea of one and it gives us John OK and we can do the same thing over here so will say item dog
gets the idea of one actually will need to console log that
flips item controller OK and I could add another item here if I wanted.
I don't know why items are people but that's fine I'll say Mark and then we'll get the item with two
and you can see we get Mark.
Now if I were to not have this right here if I comment that out that's going to make make this private.
OK if we don't include it in this return it's going to be private.
And if I save we're going to get an error saying that it's not a function.
All right.
So that's one of the main differences between the revealing module and the standard module pattern is
that we're mapping or we're returning an object literal that directly reveals methods that are inside
of the module.
All right.
Hopefully that makes sense.
Now this looks cleaner.
The revealing module pattern does look cleaner but this allows you to do more because you can.
You know you can call change tacks but you can do other stuff as well like console log something without
having to include it in your actual private method.
So I mean it's all up to you what you want to use and it depends on what you're building as well.
So you know it's all up to you.
My job is to just introduce you to these patterns in these ways of doing things and then you know you
make your choice on what you want to do.
All right guys that's going to be it for this video in the next video.
I want to talk about the singleton pattern which is actually a very another variation of the module
pattern that uses an iffy but it has it's a little different where you can it's use to create objects
but you can only instantiate the object once.
So we'll get into that next.

 */


 