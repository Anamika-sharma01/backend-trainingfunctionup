votingStatus: false
}
]
let eligiblePerson = []
router.post('/post_query_ageCheck',function(req, res){
let age = req.query.votingAge
console.log(age)
for (let i=0; i<persons.length; i++){
if(age < persons[i].age){
    persons[i].votingStatus = true
    eligiblePerson.push(persons[i].name)
}
}
console.log(persons)
console.log(eligiblePerson)
return res.send({personsArray :persons,eligiblePersonArray :eligiblePerson})
})
router.post("/post-query-2", function (req, res) {

    let votingAge = req.query.age;
    let validVoters = [];

     for (let i = 0; i < persons.length; i++) {

       if (persons[i]["age"] > votingAge) {
          persons[i]["votingStatus"] = true;
           validVoters.push(persons[i]);
         }

     }

     res.send(validVoters);
});