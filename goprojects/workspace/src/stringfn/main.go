package main

import s "strings"
import "fmt"

var p = fmt.Println

func main() {

	p("Contains: ", s.Contains("test","es"))
	p("Count: :", s.Count("test","t"))
	p("HasPrefix: ", s.HasPrefix("test","te"))
	p("HasSuffix: ", s.HasSuffix("test","st"))
	p("Index: ",s.Index("test","st"))
        p("end")
}
