<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Explanation: In the given code, there is a typographical error. The variable "greeting" is declared, but it is misspelled as "greetign" when you attempt to assign an empty object to it. As a result, JavaScript will throw a ReferenceError because it cannot find a variable named "greetign."</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Explanation: JavaScript performs implicit type conversion in this case. When you try to add a number (1) to a string ("2"), JavaScript converts the number to a string and then concatenates the two strings, resulting in "12". So, the function returns the string "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>Explanation: In the code, an array food is defined with initial values. Then, an object info is created with a property favoriteFood that is assigned the first element of the food array, which is "🍕". Later, the property info.favoriteFood is reassigned to "🍝". However, this reassignment only affects the info object and does not modify the original food array. Therefore, when you log food, it remains unchanged, resulting in the output ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Explanation: The sayHi function expects a name parameter, but when it is called with sayHi(), no argument is provided. In this case, the name parameter inside the function will have the value of undefined. The function then returns a string with "Hi there," followed by the value of name, which is undefined. So, the output will be "Hi there, undefined."</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Explanation: The forEach method iterates over each element in the nums array and executes the provided callback function for each element. In this case, the callback function checks if the current element num is truthy (i.e., not equal to 0) and increments the count by 1 if num is truthy. Among the elements in the nums array (1, 2, and 3), three of them are truthy, so the count variable is incremented three times. Therefore, the final value of count is 3, and that's what gets logged to the console.</i>

</p>
</details>
