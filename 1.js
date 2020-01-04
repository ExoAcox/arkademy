function biodata(name, age) {
    let json = {}
    json.name = name? name:"Anas Arifin"
    json.age = age? age:24
    json.address = "Jl. KH. Hasyim Ashari, Kp. Pedurenan Timur RT02/01, Kel. Pondok Pucung, Kec. Karang Tengah, Kota Tangerang"
    json.hobbies = ["Futsal", "Gaming"]
    json.is_married = false
    json.list_school = {
        name: "SMK PGRI 11 Ciledug",
        year_in: 2012,
        year_out: 2015,
        major: "Teknik Komputer Jaringan"
    }
    json.skill = {
        HTML: "advanced",
        CSS: "advanced",
        Javascript: 'beginner'
    }
    json.interest_in_coding = true
    return console.log(JSON.stringify(json))
}

biodata(name, age)      //  Input your data here