package main

import (
	"time"
	"fmt"
)

func main() {
	c1 := make(chan string)
	c2 := make(chan string)
	start := time.Now()
	//fmt.Println(time.Now())
	go func() {
		time.Sleep(time.Second * 3)
		c1 <- "One"
	}()

	go func() {
		time.Sleep(time.Second * 2)
		c2 <- "two"
	}()

	for i := 0; i < 2; i++ {
		select {
			case msg1 := <- c1:
				fmt.Println("received", msg1)
			case msg2 := <- c2:
				fmt.Println("received", msg2)
			}
	}
	end := time.Now()
	fmt.Println(end.Sub(start))

}
