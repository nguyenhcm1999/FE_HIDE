

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

courses.forEach(function(index, course) {
    console.log(index, course);
})

//giải các bài toán kiểm tra các phần tử có thỏa mãn 1 điều kiện nào đó
var isFree = courses.every(function(course,index) {
    console.log(index);
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

// ________________

// Javascript: Browser | Server (NodeJS)

// Applicattion programming interface

// Browser: HTML -> DOM -> DOM API
