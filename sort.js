// реализовать алгоритм сортировки курсов по цене

let courses = [
    { name: "Courses in England", prices: [0, 100] }, //  b
    { name: "Courses in Germany", prices: [500, null] }, // a
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

function sortCourses(arr) {
     return arr.sort((a, b) => {
         console.log(a.prices[0],  b.prices[0])
            if(a.prices[a.prices.length - 1] === null || b.prices[b.prices.length - 1] === null) {
                return a.prices[0] - b.prices[0]
            }
            if(Math.abs(a.prices[0] - a.prices[a.prices.length - 1]) > Math.abs(b.prices[0] - b.prices[b.prices.length - 1])) {
                return 1;
            } if (Math.abs(a.prices[0] - a[a.prices.length - 1]) < Math.abs(b.prices[0] - b.prices[b.prices.length - 1])) {
                    return -1;
                } else {
                    return 0;
                }
     })
}

const changedArr = sortCourses(courses);
console.log(changedArr);

