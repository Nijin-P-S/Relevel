let array= [
    {
        name : "Nijin",
        id : 101,
        job : "SDE"
    },
    {
        name : "Xyz",
        id : 53,
        job : "SDE"
    },
    {
        name : "Xyx",
        id : 5,
        job : "SDE"
    },
    {
        name : "ABC",
        id : 1,
        job : "SDE"
    },
    {
        name : "LMN",
        id : 2,
        job : "SDE"
    }

];

array.sort(function (a,b)
    {if(a.id < b.id)
        return -1;
     else if(a.id > b.id)
        return 1;
    }
)

console.log(array);