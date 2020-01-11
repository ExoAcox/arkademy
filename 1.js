function biodata(name, age) {
    if (typeof name != "string") {
        return console.log("Name must be string!")
    } else if (typeof age != "number") {
        return console.log("Age must be number!")
    }

    let json = {}
    json.name = name
    json.age = age
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
        Javascript: 'advanced'
    }
    json.interest_in_coding = true
    return console.log(JSON.stringify(json))
}

biodata("Anas Arifin", 24)      //  Input your data here