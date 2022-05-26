

var languages = [
    'javascript',
    'PHP',
    'Ruby',
]



function getLastElementOfArray(languages) {
    var result = languages[languages.length - 1]
    console.log(result)
    return result;
    
    }

    getLastElementOfArray(languages)

function writeLog() {
    var myString = '';
    for (var param of arguments) {
      myString += `${param} - `;
      
    }
    myString = myString.slice(0, myString.length - 3); //loại bỏ " - "
    console.log(myString);
  }
  writeLog("log 1", "Log 2", "log 3", 4, 5, 343);   

var emailKey = 'email abc';

var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
    [emailKey] : 'sondn@fullstack.edu.vn',
    getName:function(){
        return this.name;
    },
    getAge: function(){
        return this.age;
    }
  };

  var myKey = 'address';

  myInfo['my-email'] = 'sondn@gmail.com';
  myInfo.email = 'sondn@gmail.com';
  console.log(myInfo);
  
  console.log(myInfo.name);

  console.log(myInfo[myKey]); 
  
  console.log(myInfo.address); 
  //không được đặt là myInfo.mykey bởi vì .mykey sẽ hiểu là tìm mykey 
  //trong biến var
  //trong trường hợp nó là Function --> Phương thức / method
  //others --> thuộc tính / property
console.log(myInfo.getName());
console.log(myInfo.getAge());
//sử dụng toán tử call () để gọi 



function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    //getname là phương thức
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Nguyen', 'Dinh', 'Avatar');
var user = new User('Rous', 'Tran', 'Avatar');

//thêm thuộc tính title vào phương thức author
author.title= 'Chia sẻ dạo tại F8';   
user.comment = 'liệu có khóa asp.net k ad';

console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());

//-------------------------------------------------

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

//protype giúp ta thêm 1 thuộc tính ở bên ngoài cái hàm tạo
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}     

var user = new User('Nguyen', 'Dinh', 'Avatar');
var user2 = new User('Rous', 'Tran', 'Avatar');

console.log(user.className);
console.log(user2.getClassName());


// trong trường hợp đặt biến chỉ có date = Date(), thì khi console.log ra 
// nó cũng chỉ là 1 chuỗi 
// trong trường hợp muốn biến làm thành 1 đối tượng thì thêm new




var random = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]);

var random1 = Math.floor(Math.random() * 100);
if (random1 < 30) {
    console.log('Cường hóa thành công!');
}


//câu lệnh rẽ nhánh - if else

var date = 21;
if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date ===3) {
    console.log('Hôm nay là thứ 3');
} else if (date===4) {
    console.log('Hôm nay là thứ 4');
} else { 
    console.log('Không biết');
}

switch(date) {
    case 21:
        
    case 23:
        
    case 24:
        console.log('Hôm nay là thứ 24');
        break;
    case 25:
        console.log('Hôm nay là thứ 25');
        break;
    default:
        console.log('Không biết');
}

//if else: < > !==
//switch case trong trường hợp cho biết trước giá trị, số case > 3 mới dùng


var course = {
    name: 'Javascript',
    coin: 0
}

// if (course.coin > 0 ) {
//     console.log(`${course.coin} Coins`)
// } else { console.log('Miễn phí')}

var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);

/*
vòng lặp - Loop
1.for - lặp với điều kiên đúng
2. for/in - lặp qua key của đối tượng
3. for/of - lặp qua value của đối tượng
4. while - lặp khi điều kiện đúng 
5. do/ while - lặp ít nhất 1 lần sau đó lặp khi điều kiện đúng
*/

// for loop
// chạy var i = 1; xong thỏa mãn điều kiện i<=5 chạy console log 1
// rồi mới chạy tiếp vế thứ 3 i++
for (var i = 1; i <= 5; i++) {
    console.log(i);
}


// sau khi chạy trong () sẽ chạy trong {} i++ là 0+1
var i = 0;
for (; i  <6;) {
    i++;
    console.log(i);
} 

var myArray = [
    'JS',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python',
];

var arrayLength = myArray.length;

for (var i=0; i <6; i ++){
    console.log(myArray[i]);
}



//Không viết như vậy bởi vì nó làm chậm hiệu năng và ít tối ưu hơn
//for (var i=0; i < myArray.length; i ++){
//     console.log(myArray[i]);}

// For/in loop

var myInfo = {
    name: 'Son Dang',
    age: 18,
    address:'Ha Noi, VN'
};

for (var key in myInfo) {
    console.log(myInfo[key]);
}
// kết quả ra Son Dang, 18, Ha Noi,VN


var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]
for (var key in languages){
    console.log(languages[key]);
}
// kết quả ra Java,PHP,Ruby



var myString = 'Javascript';
console.log(myString[0])
// kết quả ra J

var languages = 'Javascript';
for (var key in languages){
    console.log(key);
}
// kết quả ra Key 0,1,2 … 9 

for (var value of languages) {
    console.log(value)
}
// kết quả ra value J a v a  s c r I p t 


//cách viết thứ 1
for ( var value of Object.values(myInfo)) {
    console.log(value);
}

// cách viết thứ 2
for ( var value of Object.keys(myInfo)) {
    console.log(myInfo[value]); 
}
// cho ra value trong name, age, address.


// while loop


//Cách viết thứ 1
// var  i =  0;
// while ( i < 6 ) {
//     i++;
//     console.log(i);
// }


//Cách viết thứ 2
var  i =  1;
while ( i <= 6 ) {
    console.log(i);
    i++;
}

// kết quả đều cho ra chạy từ 1 dến 6


var i = 0;
while (i < myArray.length) {
    
    console.log(myArray[i]);
    i++;
}


// do/while loop

var i = 0;
var isSuccess = false;
 do {
     i++;
     console.log(' nạp thẻ lần' + i);

     //thành công
     if (false) {
        isSuccess = true;
     }
 } while (!isSuccess && i <= 3);

 

 //Break & continue in loop

for ( var i = 0; i < 10 ; i ++) {
   
    if ( i % 2 !== 0) {  
// có nghĩa là nếu i chia 2 có dư thì nó sẽ tiếp tục chạy, bỏ qua số lẻ 
// bỏ qua console.log(i) không in ra, chỉ in ra số chẵn   
        continue;
    }

    console.log(i);
    // if (i >= 5 ) {
    // break;
    // }
}
// có nghĩa là vòng lặp chạy tới i >= 5 thì sẽ dừng.

// break thoát khỏi vòng lặp khi đúng điều kiện
// continue  bỏ qua khi đúng điều kiện 


//vòng lặp lồng nhau  - Nested loop

var myArray1 = [
    [1,2],
    [3,4],
    [5,6],
]
for ( var i = 0; i < myArray1.length; i++) {
    for (var j = 0; j < myArray1[i].length; j++) {
        console.log(myArray1[i][j]); 
    }
    
}

// loop ...
for ( var i = 10; i > 0; i--) {
    console.log(i);
} 

for ( var i = 0; i <= 20; i += 5 ) {
    console.log(i);
} 

var array = ['a', 'b' ,'c', 'a', 'b', 'c']
//... để vứt bỏ dấu ngoặt còn mỗi chữ thôi
console.log([...(new Set(array))]);


// 1. xác định điểm dừng
// 2. Logic handle => tạo ra điểm dừng

 function countDown(num) {
     if (num > 0 ) {
          console.log(num);
          return countDown (num - 1);
     }
      return num;
 }

 countDown(3);




 function loop(start, end, cb) {
    if(start < end) {
        cb(start);
        return loop(start +1, end, cb);
    }
 }

 var array = ['Js','PHP','Ruby'];
 
 loop(0, array.length, function(index){
     console.log(array[index]);
 })



 // giai thua 3*2*1
 function giaiThua(number) {
     var output = 1;
     for (var i = number; i > 0 ; i-- ){
         output = output * i;
     }
     return output;
 }

 console.log(giaiThua(5));


 function giaiThua1(number) {
    if (number > 0) {
        return number * giaiThua1( number - 1);
    }
    return 1;
}

console.log(giaiThua1(5));


/*array methods:
foreach()
every() kiểm tra tất cả các phần tử phải thỏa mãn 1 điều kiện nào đó
some()  chỉ cần 1 ông đúng, trả kết quả true
find()  trả về 1 đối tượng
filter() liệt kê những phần tử thỏa mãn
map()
reduce()
*/

var courses = [
    {
        id:1,
        name:'JS',
        coin:0
    },
    {
        id:2,
        name:'HTML, CSS',
        coin:200
    },
    {id:3,
        name:'Ruby',
        coin:0
    },
    {id:4,
        name:'PHP',
        coin:400
    },
    {id:5,
        name:'Ruby',
        coin:0
    },
    {id:6,
        name:'Ruby',
        coin:0
    },
];
//duyệt ra từng phần tử của mảng

courses.forEach(function(course, index) {
    console.log(index, course);
})

//giải các bài toán kiểm tra các phần tử có thỏa mãn 1 điều kiện nào đó
var isFree = courses.every(function(course,index) {
    console.log(index); // trả về số 0,1 rồi dừng có nghĩa là i = 1, điều kiện
    // không thỏa mãn với course.coin === 0
    return course.coin === 0;
});

console.log(isFree);  


//find trả về 1 đối tượng
var course = courses.find(function(course,index) {
    console.log(index);
    return course.name === 'Ruby';
});

console.log(course);  


var listCourses = courses.filter(function(course,index) {
    
    return course.name === 'Ruby';
});

console.log(listCourses);   



// var courseHandler = function(){}

function courseHandler(course, index, originArray){
    // console.log(course);
    return{
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        // originArray: courses,
        originArray: originArray,
        
    };
};

var newCourses = courses.map(courseHandler);

console.log(newCourses);


function courseHandler(course, index, originArray){
    // console.log(course);
    return `<h2>${course.name}</h2>`;
};
var newCourses = courses.map(courseHandler); 

console.log(newCourses.join(''));


//Biến lưu trữ
var totalCoin = 0;

// Lặp qua các phần tử
for (var course of courses) {

    //Thực hiện việc lữu trữ
    totalCoin += course.coin;
}

console.log(totalCoin);

//Biến lưu trữ
//Thực hiện việc lưu trữ

//accumulator là biến lưu trữ
//currentValue giá trị hiện tại

var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    i++;

    var total = accumulator + currentValue.coin;

     console.table({
         'Lượt chạy: ': i,
         'Biến tích trữ: ':accumulator,
         'Giá khóa học: ': currentValue.coin,
         'Tích trữ được: ': total

     });
     return total;
}
//0 là khởi tạo biến lưu trữ, khởi tạo cái gì thì accumulator sẽ chạy cái
//đó đầu tiên
var totalCoin = courses.reduce(coinHandler,0); //initial value


console.log(totalCoin);


var i = 0;

var totalCoin = courses.reduce(function(total,course){
    i++;
    
    console.log(i, total,);
    return total + course.coin;
    
}, 0); //initial value
//khi không có initial value thì sẽ lấy giá trị đầu tiên của mảng

console.log(totalCoin);



var numbers = [ 0, 200, 0, 400, 0, 0];

var totalCoin = numbers.reduce(function(total,number){
    return total + number;
},0);

console.log(totalCoin);


//Flat - Làm phẳng mảng từ depth array - Mảng sau

var depthArray = [ 1, 2, [3, 4],5 ,6, [7, 8, 9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem){
//concat nối mảng này với mảng kia lại
    return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);

//Lấy ra các khóa học đưa vào 1 mảng mới
var topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title:"HTML, CSS"
            },
            {
                id: 2,
                title:"Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title:"PHP"
            },
            {
                id: 2,
                title:"NodeJS"
            }
        ]
    },
];

var newCourses = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);
},[]);

console.log(newCourses);


var htmls = newCourses.map(function(course){
    return `
        <div>
            <h2>${course.title}</h2>
            <p>ID: ${course.id}</p>
        </div>
    `;
});

console.log(htmls);

console.log(htmls.join(''));



Array.prototype.reduce2 = function(callback, result) {
    let i = 0;
    if(arguments.length < 2) {
        i = 1;
        result = this[0]
    }
    for(; i <this.length; i++) {
        result = callback(result, this[i], i, this);
    } return result;
}

var numbers = [1, 2, 3, 4];
var result = numbers.reduce2((total, number) => {
    return total + number;
})

console.log(result)


var courses = ['Javascript','PHP','Dart'];

console.log(courses.includes('PHP',-2));


// Callback - Phàn 2?

//1. Là hàm
//2. Truyền qua đối số 
//3. Được gọi lại (trong hàm nhận đối số)

function myFunction(param) {
    if ( typeof param === 'function' ) {
        param('Học lập trình');
    }
}

function myCallback (value){
    console.log('Value: ', value);
}

 myFunction(myCallback);

Array.prototype.map2= function(callback) {
    var output = [], arrayLength = this.length;
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

 var courses =[
     'Javascript',
     'PHP',
     'Ruby'
 ];


 // đây cũng là 1 dạng callback

 //1 function vô danh
 courses.map(function(course){
    console.log(course);
 })

// hoặc cũng có thể viết dưới dang declaration function hoặc expression function 
 function myFunction(course) {
    console.log(course);
}

courses.map(myFunction);


//-----------------------------

// courses.map2(function(course, index){
//     console.log(index,course);
// });


var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`
});

console.log(htmls.join(''));

//  var htmls = courses.map(function(course) {
//     return `<h2>${course}</h2>`
// });

// console.log(htmls.join(''));

Array.prototype.forEach2 = function(callback){
    for ( var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
        
        
    }
}



var courses = new Array(100);

courses.push('Javascript',
'PHP',
)

courses.forEach2(function(course,index,array){
    console.log(course, index, array);
});





Array.prototype.filter2 = function(callback) {

    var output = [];

    for ( var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result){
                output.push(this[index]);
            }
        }
    }
    return output;
}

var courses = [
    {
        name:'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name:'Ruby',
        coin:980
    },
];

var filterCourses = courses.filter2(function(course,index, array){
    return course.coin >700;
});

console.log(filterCourses);



// Array.prototype.some2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)){
//             if (callback(this[index],index,this)){
//                 return true;
//             };
//         };
//     }
//     return false;
// }

/* hoặc */

Array.prototype.some2 = function(callback) {
    var output = false;
    for (var index in this) {
        if (this.hasOwnProperty(index)){
            if (callback(this[index],index,this)){
                output = true;
                break;
            };
        };
    }
    return output;
} 


var courses = [
    {
        name:'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name:'Ruby',
        coin:980,
        isFinish: false,
    },
];

var result = courses.some2(function(course,index,array) {
    return course.isFinish;
});

console.log(result);


//every : true / false
// chỉ cần 1 thằng sai sẽ sai hết, còn tất cả đều đúng sẽ đúng hết

Array.prototype.every2 = function(callback){
    var output = true;
    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}


var courses = [
    {
        name:'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false,
    },
    {
        name:'Ruby',
        coin:980,
        isFinish: false,
    },
];

var result = courses.every2(function(course,index,array){
    return course.coin > 680;

});
console.log(result);

var result = courses.every2(function(course,index,array){
    return course.coin > 300;
});


// HTML DOM

// 1. Element : ID, class, tag,
// ID trả trực tiếp đối tượng qua ID
// class trả về 1 mảng gồm nhiều element bên trong select qua class
// tag trả về 1 HTML collection gồm nhiều element bên trong khác ở chỗ
// tag trả qua tên thẻ

// CSS selector, HTML collection
// CSS selector querySelector lấy thẳng 1 đối tượng matching với class 
// được truyền vào qua cái CSS selector được truyền vào
// querySelectorAll select tất cả những đối tượng element có class
// matching với class bạn truyền vào

// HTML collection ví dụ thẻ a, thẻ form

// 2. Attribute
// 3. Text
var boxNode = document.querySelector('.box-1');
// Công việc 1: Sử dụng tới `boxNode`
console.log(boxNode);
// Công việc 2: Sử dụng tới các li elements
// là con của `.box-1`
console.log(boxNode.getElementsByTagName('li'));

console.log(boxNode.querySelector('p'));

var listItemNodes = 
document.querySelectorAll('.box-1 li');
console.log(listItemNodes);
 
// ________________

// Javascript: Browser | Server (NodeJS)

// Applicattion programming interface

// Browser: HTML -> DOM -> DOM API


var score = [700, 8, 9, 10, 3];
//  lớn đến nhỏ
console.log(score.sort( (firstEl, secondEl) =>
    secondEl -firstEl 
    
 ));

function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
    
  }
  function findLongestWord(str) {
    var ngandendai = str.split(' ').sort((a,b)=>a.length-b.length)
    return ngandendai;
  }  
 
var abc =  findLongestWord("The quick brown fox jumped over the lazy dog");

  
  console.log(abc)



// 1. getElementById
// 2. getElementsByCLassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorALL
// 6. HTML collection
// 7. document.write





var headings = document.getElementsByTagName('h2');
console.log(headings[0]);


var h1Element = document.getElementsByTagName('h2')[0]
console.log(h1Element)

var headings = document.getElementsByClassName('heading');
console.log(headings);

var headings = document.querySelectorAll('.heading');
console.log(headings[0]);

for (var i =0; i < headings.length; i++){
    console.log(headings[i])
}

console.log(document.forms[1]);





//DOM attributes

var headingElement = 
 document.querySelector('h1');

// thêm attribute
headingElement.title = 'Heading';   
headingElement.className = 'Heading';
headingElement.setAttribute('d','heading-test');
headingElement.setAttribute('style','color: red');
// headingElement.style = 'color:red';
console.log(headingElement.getAttribute('style'));
console.log(headingElement.getAttribute('d'));
console.log(headingElement.title);

// có thể những thuộc tính không cần phải hợp lệ với các element đó

// innerText, textContent

//geter  

//seter

var headingElement =
document.querySelector('h1');

//innerText là những gì mình nhìn thấy

console.log(headingElement.innerText)
// ẩn đi thuộc tính display:none
//hoặc

// textContent nhìn thấy tất cả nội dung, css, js

console.log(headingElement.textContent)
// textcontent không bị ảnh hưởng bởi thuộc tính display:none

headingElement.textContent = `

New Heading

`;

//elementnode là các thẻ, textnode là nội dung nằm trong các thẻ


// innerHTML, outerHTML


var boxElement = document.querySelector('.box');


// innerHTML có thể thêm các node trong một element khác



boxElement.innerHTML = '<h1>New Heading</h1>';


boxElement.innerHTML = '<h1 title="Heading">New Heading</h1>';



// console.log(boxElement.outerHTML)


console.log(document.querySelector('h1').innerText);



// thẻ span ghi đè lên lúc h1 đang là con của box

// boxElement.outerHTML = '<span>Test</span>';


console.log(boxElement.innerHTML); 


var boxElement = document.querySelector('.box');

console.log([boxElement]);

var boxElement1 = document.querySelector('.box-3');

// boxElement1.style.width = '100px';
// boxElement1.style.height = '200px';
// boxElement1.style.backgroundColor = 'red';

Object.assign(boxElement1.style, {
    width: '200px',
    height: '100px',
    backgroundColor: 'green',
});

// lấy ra giá trị thuộc tính css không phải lấy ra chiều ngang đối tượng
console.log(boxElement1.style.width);

//lưu ý cách trên chỉ là css inline không phải internal hay external
//chỉ dùng thêm để css



// ClassList property
// add
// contains 
// remove
// toggle có thì thêm, không có thì gỡ bỏ

//truy xuất tới thuộc tính style của element bằng cách


var boxElement4 = document.querySelector('.box-4');

console.log(boxElement4.classList[1]);


// trả về chuỗi nằm trong class

console.log(boxElement4.classList.value);

//thêm nhiều class nhớ , không được cách
boxElement4.classList.add('red', 'blue', 'green');

// kiểm tra 1 element có class nào hay không, ví dụ menu open close
console.log(boxElement4.classList.contains('red'));


// console.log(boxElement4.classList.remove('red'));

// setTimeout(() =>{
//     boxElement4.classList.remove('red');
// },3000);


// setTimeout(() =>{
//     boxElement4.classList.toggle('red');
// },3000);

setInterval(() =>{
    boxElement4.classList.toggle('red');
},1000);


//DOM events
//1. Attribute events
//2. Assign event using the element node

var h5Element = document.querySelector('h5');
// nếu có 2 tag giống nhau nó sẽ lấy thằng đầu tiên trong DOM thôi


h5Element.onclick = function() {
    console.log(Math.random());
};

h5Element.onclick = function(e) {
    console.log(e.target);
};

// nếu muốn lấy hết tất cả nằm trong tag giống nhau thì

var h6Element = document.querySelectorAll('h5');

for (var i = 0; i < h6Element.length; ++i) {
    h6Element[i].onclick = function(e) {
        console.log(e.target);
    }
}


// 1. Input / select
// 2. Key up / down

var inputValue;

var inputElement = document.querySelector('input[type="text"]');
console.log(inputElement);


// onchange khi blur ra ngoài thì sẽ trả giá trị
inputElement.onchange = function(e) {
    console.log(e.target.value);
}


//còn muốn gõ tới đâu thì lấy được tới đó 

inputElement.oninput = function(e) {
    inputValue = e.target.value;
    // console.log(e.target.value);
}

var inputElement1 = document.querySelector('input[type="checkbox"]');
console.log(inputElement1);

inputElement1.onchange = function(e) {
    console.log(e.target.checked);
}

var inputElement2 = document.querySelector('select');

inputElement2.onchange = function(e) {
    console.log(e.target.value);
}


// var inputElement = document.querySelector('input[type="text"]');
// keyup nhấc phím lên, keydown bấm phím xuống
// inputElement.onkeyup = function (e) {
//     console.log(e.which);

//     switch(e.which) {
//         case 27 :
//             console.log('Exit');
//             break;
//     }
// }


document.onkeypress = function(e1) {
    console.log(e1.which);
    switch(e1.which) {
        case 27:
            console.log('Exit');
            break;
        case 13:
            console.log('SEND CHAT');
            break;
    }
} 

// 1. preventDefault sử dụng nó để loại bỏ hành vi mặc định
//  của trình duyệt  trên thẻ HTMl

// 2. stopPropagation loại bỏ sự kiện nổi bọt



var aElements4 = document.links;



for(var i = 0; i < aElements4.length; ++i) {
    aElements4[i].onclick = function(e) {
        if (!e.target.href.startsWith('https://fullstack.edu.vn')) {
            e.preventDefault();
        }
    }
}

// var ulElement = document.getElementsByTagName('ul')[2];

// console.log(ulElement);

// ulElement.onmousedown = function(e) {
//     e.preventDefault();
// }

// ulElement.onclick =
// function(e) {
//     console.log(e.target);
// };


var ulElement1 = document.querySelectorAll('ul')[2];
console.log(ulElement1);

// ngăn chặn hành động khi click con chuột xuống
ulElement1.onmousedown = function(e) {
    e.preventDefault();
}

ulElement1.onclick =
function(e) {
    console.log(e.target);
};

document.querySelector('div').onclick = 
function() {
    console.log('DIV');
}
document.querySelector('button').onclick = 
function(e) {
    e.stopPropagation();
    console.log('Click me!');
}

var nameVar = 'john';
var nameVar = 'Smith';
console.log("var = ", nameVar);

let nameLet = 'john';
    nameLet = 'Smith';
console.log("let = ", nameLet);

// Scope -> Tầm vực

// tầm vực của từ khóa var -> Trong function
// tầm vực của từ khóa let -> Trong block -> {}

var age = 30;
if (age > 20) {
    var message = nameVar + ' ' + 'là một người lớn hơn 20 tuổi'; 
    console.log("trong tầm vực block", message);
}
    console.log("ngoài tầm vực block", message);
// nếu dùng let thì console.log("ngoài tầm vực block", message); sẽ báo lỗi

const pi = 3.14;
    // pi = 2;
// Hằng số -> không thay đổi trong quá trình lập trình
console.log("pi =", pi);

//Thao tác cons với object 
const obj = {
    firstName: 'John'
}
// Const của obj -> bản chất của nó là không thay đổi về mặt địa chỉ của 
// object lưu trong bộ nhớ
var newObj = {};

obj.firstName = 'Smith Edit'; //Khong báo lỗi
console.log(obj.firstName);

// obj = newObj; sẽ báo lỗi



// 1.Event listener
// 2. JSON
// 3. Fetch
// 4. DOM location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best Practices
// 9. Mistakes
// 10. Performance


// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Hủy bỏ lắng nghe

var btn = document.getElementById('btn'); 

console.log(btn);

// ví dụ sau 3 giây mới hoạt động thì
setTimeout( function() {
    btn.onclick = function(){
        // viec 1
        console.log('Viec 1');
        // viec 2
        console.log('Viec 2');
        // viec 3
        alert('Viec 3');
    }
},0); //0 thành 3000

// ví dụ 3 giây đầu lắng nghe, sau 3 giây không lắng nghe nữa thì

// là 1 key có object nên có thể ghi đè, thay thế value của onlick bằng function rỗng
// hủy bỏ sự kiện lắng nghe trong dom event bằng cách gán lại bằng 1 function rỗng
setTimeout(function(){
    btn.onclick = function () {

    }
},3000)

// cách lắng nghe sự kiện khi sử dụng event listener
// đồng loạt được gọi và gọi theo thứ tự

var btn = document.getElementById('btn'); 

// đối số thứ 1 nhận eventname loại bỏ chữ on, onclick bỏ on đi
btn.addEventListener('click',function(e){
    console.log('event listener 1'); 
});

// btn.addEventListener('click',function(e){
//     console.log('Event 2'); 
// });

// btn.addEventListener('click',function(e){
//     console.log('Event 3'); 
// });

function viec1() {
    console.log('Viec el 1');
}


btn.addEventListener("click", viec1);
btn.addEventListener('click', function (){console.log('viec el2')});

// nếu muốn hủy bỏ lắng nghe thì phải tách function ở đối số thứ 2 ra thành 1 function
// riêng thì mới có thể đồng loạt sử dụng cho việc lắng nghe hoặc hủy bỏ lắng nghe
// cụ thể trên 1 listener nào đó mà dom khó có thể làm được

// setTimeout(function(){
//     btn.removeEventListener('click',viec1)
// },3000);

//tổng kết sử dụng dom event trong case đơn giản, muốn lắng nghe sự kiện nào đó
// không có nhu cầu gỡ bỏ, còn event listener có thể hủy bỏ lắng nghe sự kiện đó
// trong một trường hợp cụ thể nào đó, khi có nhiều listener có thể hủy bất cứ listener nào


// 1. Json là một định dạng dữ liệu (chuỗi)
// 2. JavaScript Object Notation
// 3. JSON: Number, Boolean, Null, Array, Object


// Mã hóa / Giải mã
// Encode / decode
// Stringify: từ javascript types-> JSON
// Parse: Từ JSON -> Javascript types

var Json = '["Javascript","PHP"]';  // cặp ngoặc '' ngoài cùng là chuỗi trong js
// các key thể hiện kiểu dữ liệu dạng chuỗi dùng cặp nháy "", ngăn cách phần tử ,


var a = '1';
console.log(JSON.parse(a)); //JSON là kiểu number , còn type of null là 1 object

// nếu muốn thể hiện dạng chuỗi ở json thì thêm dấu ""
var b ='"abc"';
console.log(typeof JSON.parse(b)); // là string

var json = '{"name":"Son Dang","age":18}';
var object = JSON.parse(json);
console.log(object);

console.log(typeof JSON.parse(b) === 'string' && b !== null )


// chuyển từ javscript sang json 
// nếu muốn thêm 1 dấu nháy kép vào trong ' ' thì nó sẽ thêm \
console.log(JSON.stringify([
    'Javas"cript',
    'PHP'
]));

// object thì nó sẽ dùng nháy kép cho cả key và cả value
console.log(JSON.stringify({
    name:'Son Dang',
    age: 16,
    test: function() {

    }
}));

const daychu = [
    {ho:"abc", ten:"def"},
    {ho:"abc1", ten:"def1"},
    {ho:"abc2", ten:"def2"},
];
var daychunoidai = daychu.map(q =>[q.ho,q.ten].join(" "))
console.log(daychunoidai);

let logHi = (str = 123) => {
    console.log(str);
    
}

logHi(undefined);
logHi(null);


// promise
// - sync là đồng bộ
// - Async là bất đồng bộ : setTimeout, setInterval, fetch, xmlhttprequest,
// file reading, request animation frame

// callback
setTimeout(function(){
    console.log(1);
},1000);

console.log(2);

// Object chứa hàm callback
var domainInfo = {
    name : 'freetuts.net', 
    quan : 19,
    setName : function(name){
       this.name = name ;
          
    },
    setQuan : function(quan){
        this.quan = quan;
    },
};

// Hàm có tham số callback
function test(callback, callback1, callbackObject){
    
   var  name="Nguyễn Văn An";
   var  quan="222";
    callback.apply(callbackObject, [name]);
    callback1.apply(callbackObject,[quan]);

}
 
// Gọi đến hàm và truyền hàm callback vào
test(domainInfo.setName,domainInfo.setQuan,domainInfo);

// Kết quả: Nguyễn Văn Cường
console.log(domainInfo.name);
console.log(domainInfo.quan);




const lapTop = {
    name: "Macbook",
    isOn: false,
    turnOn() {
        this.isOn = true;
        return `${this.name} đang mở`;
    },
    turnOff() {
        this.isOn = false;
        return `${this.name} đang tắt`;
    }
};

const mobile = {
    name: "iPhone",
    isOn: false
};
 

console.log(lapTop.turnOn.apply(mobile)); // iphone đang mở


const person = {
    fullName: function(city, country) {
      return `thành phố ${city} quê quán ${country} tên ${this.firstName} họ ${this.lastName} `;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

 
  function myFunction1 (param) {
      param('js');
  };

  function myCallback1 (value) {
      console.log('value: ', value);
  }

  myFunction1(myCallback1)
 



  function alertCallback() {
    console.log('i am calback')
}
function logAndAlert(a) {
    
    a();
}
logAndAlert(alertCallback);

function doSomething() {
    console.log('vào');
}
function something(doCallback) {
    doCallback();
}
something(doSomething);



function sumAll() {
    
    var len = arguments.length;
    var sum = 0;
    for(i=0; i < len; i++) {
        sum += arguments[i];
    }
    return sum;
    
}
sumAll(3,4,5,6,7)

document.getElementById("demo").innerHTML =
"Tổng = " + sumAll(1, 123, 200, 44, -88);

const sinhVien = [
    { ho: "Đặng", ten: "Ngọc Anh" },
    { ho: "Vi", ten: "Tiểu Bảo" },
    { ho: "Hàn", ten: "Lập" }
];

var tenDayDu = sinhVien.map(function(sv) {
   return hovaten = [sv.ho,sv.ten].join(" ");
}) 

console.log(tenDayDu);

// ----------------------------------------
// function showData(name, amt) {  
//     alert(' Hello ' + name + '\n Your entered amount is ' + amt);  
//     }  
      
//     function getData(callback) {  
//     var name = prompt(" Welcome to the javaTpoint.com \n What is your name?");  
//     var amt = prompt(" Enter some amount...");  
//     callback(name, amt);  
//     }  
      
//     getData(showData);  

//-------------------
var car = {
    getFullName: function(weight, color) {
        return this.brand + " " + this.name + ", " + weight + " kg, " + color;
    }
};
var car1 = {
    brand:"Toyota",
    name: "Prius 2018"
};
var car2 = {
    brand:"Ford",
    name: "Everest 2018"
};

console.log(car.getFullName.apply(car1, [850,"white"]));
console.log(car.getFullName.apply(car2, [950,"red"]));
