 const name1=1234;
 const name2=5678;
 const name3=9999;

// 命名导出
 export {
 	name1 as myname,
 	name2,
 	name3,
 	sayHello,
 	people
 }

//默认导出
export default{
	name:'zhangsan'
}

var people = ['zzzz','dddd','ssss'];

function sayHello(p1,p2,p3){
	console.log(p1,p2,p3)
}