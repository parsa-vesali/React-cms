let xAxisData = [
    {
        "name" : 'Jan' ,
        "sale" : 112_000 
    } ,
    {
        "name" : 'Feb' ,
        "sale" : 78_000 
    } ,
    {
        "name" : 'Mar' ,
        "sale" : 120_000 
    } ,
    {
        "name" : 'Apr' ,
        "sale" : 112_000 
    } ,
    {
        "name" : 'May' ,
        "sale" : 90_000 
    } ,
    {
        "name" : 'Jul' ,
        "sale" : 99_000 
    } ,
    {
        "name" : 'July' ,
        "sale" : 120_000 
    } ,
    {
        "name" : 'Agu' ,
        "sale" : 200_000 
    } ,
    {
        "name" : 'Sep' ,
        "sale" : 280_000 
    } ,
    {
        "name" : 'Otc' ,
        "sale" : 212_000 
    } ,
    {
        "name" : 'Nov' ,
        "sale" : 152_000 
    } ,
    {
        "name" : 'Dev' ,
        "sale" : 370_000 
    } ,
]


const newMembers = [
    {
        id : 1 , 
        userName : "alireza",
        title : 'web Developer' ,
        img : 'image/user-1.jpg'
    },
    {
        id : 2 , 
        userName : "parsa",
        title : 'web Developer' ,
        img : 'image/user-2.jpg'
    },
    {
        id : 3 , 
        userName : "zahra",
        title : 'web Developer' ,
        img : 'image/user-3.jpg'
    },
    {
        id : 4 , 
        userName : "saeed",
        title : 'web Developer' ,
        img : 'image/user-4.jpg'
    },
]


const  transactions = [
    {
        id : 1 ,
        customer : 'رضا ' ,
        img : 'image/user-5.jpg' ,
        date : '12 jun 2023',
        amount : 194 ,
        status : 'Declined',
        text : 'کنسل شده'
    },
    {
        id : 2 ,
        customer : 'محسن ' ,
        img : 'image/user-6.jpg' ,
        date : '18 May 2023',
        amount : 739 ,
        status : 'Approved' ,
        text : 'تایید شده'
    },
    {
        id : 3 ,
        customer : 'سارا' ,
        img : 'image/user-3.jpg' ,
        date : '8 jun 2023',
        amount : 982 ,
        status : 'Approved',
        text : 'تایید شده'
    },
    {
        id : 4 ,
        customer : 'پارسا ' ,
        img : 'image/user-2.jpg' ,
        date : '23 Apr 2023',
        amount : 383 ,
        status : 'Pending',
        text : 'انتظار'
    },
    {
        id : 5 ,
        customer : 'امیر' ,
        img : 'image/user-1.jpg' ,
        date : '3 Dev 2023',
        amount : 233 ,
        status : 'Declined',
        text : 'کنسل شده'
    },
]


let userRows = [
    {
        id : 1 ,
        userName : 'امیر' ,
        avatar : 'image/user-1.jpg' ,
        status : 'active',
        transaction : 218.52,
        email : 'Email@email.com'
    },
    {
        id : 2 ,
        userName : 'پارسا' ,
        avatar : 'image/user-2.jpg' ,
        status : 'active',
        transaction : 218.52,
        email : 'Email@email.com'
    },
    {
        id : 3 ,
        userName : 'سارا' ,
        avatar : 'image/user-3.jpg' ,
        status : 'active',
        transaction : 218.52,
        email : 'Email@email.com'
    },
    {
        id : 4 ,
        userName : 'حسین' ,
        avatar : 'image/user-4.jpg' ,
        status : 'active',
        transaction : 218.52,
        email : 'Email@email.com'
    },
    {
        id : 5 ,
        userName : 'محمد' ,
        avatar : 'image/user-5.jpg' ,
        status : 'active',
        transaction : 218.52,
        email : 'Email@email.com'
    },
    {
        id : 6 ,
        userName : 'علی' ,
        avatar : 'image/user-6.jpg' ,
        status : 'active',
        transaction : 218.52,
        email : 'Email@email.com'
    },
]

const products = [
    {
        id : 1 ,
        title : 'apple' ,
        img : 'image/category-1.png' ,
        price : '$340'
    },
    {
        id : 2 ,
        title : 'asus' ,
        img : 'image/category-2.png' ,
        price : '$803'
    },
    {
        id : 3 ,
        title : 'mobile' ,
        img : 'image/category-3.png' ,
        price : '$910'
    },
    {
        id : 4 ,
        title : 'laptop' ,
        img : 'image/category-4.png' ,
        price :' $229'
    },
    {
        id : 5 ,
        title : 'apple' ,
        img : 'image/category-5.png' ,
        price :' $122'
    },
]

const productDatas = [
    {
        name : 'Jun' ,
        Sale : 600 ,
    },
    {
        name : 'Feb' ,
        Sale : 1200 ,
    },
    {
        name : 'Mar' ,
        Sale : 1900 ,
    },
    {
        name : 'July' ,
        Sale : 2100 ,
    },
]


export {xAxisData , newMembers , transactions, userRows , products , productDatas}