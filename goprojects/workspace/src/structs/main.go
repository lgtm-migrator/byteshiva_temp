package main

import "fmt"

type person struct {
	name string 
	age int
}

func main() {
	fmt.Println(person{"Siva", 100})

	fmt.Println(person{name: "Siva", age: 500})

	fmt.Println(person{name: "Subra", age: 560})

	fmt.Println(person{name: "Chi"})

	s := person{name: "Maniyam", age : 760}
	fmt.Println(s.name)

	sp := &s
	fmt.Println(sp.age)

	sp.age = 510
	fmt.Println(sp.age)
	fmt.Println(s.age)
}