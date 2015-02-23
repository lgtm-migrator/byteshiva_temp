// Refer :http://stackoverflow.com/questions/10781516/how-to-pipe-several-commands
//1. concurrent execution - Completed
// @todo try some advanced concepts in go
// refer: https://play.golang.org/p/ClmO3lMBMp
package main

import (
	"fmt"
	"os"
	"os/exec"
	"strconv"
	"time"
)

func pingme(v int, c chan string) {
	s := strconv.Itoa(v)
	v1 := "192.168.1." + s
	c1 := exec.Command("ping", "-n", "1", v1)
	c2 := exec.Command("grep", "bytes=32")
	c2.Stdin, _ = c1.StdoutPipe()
	c2.Stdout = os.Stdout
	err := c2.Start()
	_ = c2.Start()
	_ = c1.Run()
	_ = c2.Wait()
	if err == nil {
		c <- fmt.Sprintf("%s not Connected", v1)
	}
}

func main() {
	c := make(chan string)
	for v := 100; v < 150; v++ {
		go pingme(v, c)
	}

	for i := 100; i < 150; i++ {
		//returns channel c
		<-c
	}

	time.Sleep(time.Second * 1)
}
