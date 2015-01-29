package main

import (
    "fmt"
    "math"
    "errors"
)

type Coords struct {
  Longitude, Latitude float64
}

func(l Location) Contains(p Person)  bool {
  if l.DistanceFrom(p.Coords) <= l.Radius {
    return true
  }
  return false
}

func (c Coords) DistanceFrom(o Coords) float64 {
  dx := math.Pow(o.Longitude-c.Longitude, 2)
  dy := math.Pow(o.Latitude-c.Latitude, 2)

  d := math.Sqrt(dx + dy)
  return d
}

func (c Coords) String() string  {
  return  fmt.Sprintf("(%f, %f)", c.Latitude, c.Longitude)
}

type Person struct {
  Coords
  FirstName string
  LastName  string
}

func (p Person) String() string {
  return fmt.Sprintf("FirstName: %s, :LastName: %s, Coords: %v", p.FirstName, p.LastName, p.Coords)
}

type Location struct {
  Coords
  Radius float64
}

func (l Location) String() string {
  return fmt.Sprintf("Radius: %f, Coords: %v", l.Radius, l.Coords)
}

type  Area []Container

func (a Area) Locate(p Person) (Container, error) {
  for i:=0; i < len(a); i++ {
    if a[i].Contains(p) {
      return a[i], nil
    }
  }
  return  nil, errors.New("Failed to find person.")
}

type Container interface {
  Contains(Person) bool
}

type Home struct {
  Location
}

type Office struct {
  Location
}

type Bar struct {
  Location
}

func main() {
  var cva Person
  cva = Person{FirstName:"Siva", LastName: "Brama"}
  cva.Coords = Coords{40,50}

  home := Home{Location{Coords{0,0},5}}
  office := Office{Location{Coords{21,32},10}}
  bar := Bar{Location{Coords{40,50},5}}
  area := Area{home, office, bar}

  fmt.Println(cva)
  //fmt.Println(location.DistanceFrom(p.Coords))
  // fmt.Println(location.DistanceFrom(cva.Coords))
  // fmt.Println(location.Contains(cva))
  if l, err := area.Locate(cva); err != nil {
    panic(err)
  } else {
    switch l.(type) {
      case Home:
        fmt.Println("Cva is at home")
      case Office:
        fmt.Println("Cva is at office")
      case Bar:
        fmt.Println("Cva is getting drunk")
    }
    // fmt.Println(area.Locate(cva) == location)
    // fmt.Println(l.Longitude)
    // Empty lines
  }
}
