// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


const filterCourses = (courses, arr) => {
    return courses.filter((course) => {
        if (course.prices[course.prices.length - 1] === null && arr[arr.length - 1] !== null) {
            return +(course.prices[0]) >= arr[0] && course.prices[0] <= arr[arr.length - 1] && course.prices[course.prices.length - 1] <= arr[arr.length - 1] && null > arr[arr.length - 1]
        } else if (arr[arr.length - 1] === null) {
            return +(course.prices[0]) >= arr[0] && course.prices[course.prices.length - 1] <= arr[arr.length - 1]
        }

      return +(course.prices[0]) >= arr[0] && course.prices[course.prices.length - 1] <= arr[arr.length - 1]
    });
};
const newArr = filterCourses(courses, requiredRange3);
// const newArr = filterCourses(courses, requiredRange2);
// const newArr = filterCourses(courses, requiredRange1);
console.log(newArr);
