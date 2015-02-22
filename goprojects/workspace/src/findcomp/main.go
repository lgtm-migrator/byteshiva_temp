// Refer :http://stackoverflow.com/questions/10781516/how-to-pipe-several-commands
//@todo concurrent execution
// refer: https://play.golang.org/p/ClmO3lMBMp
package main

import (
  "os"  
  "os/exec"
  "strconv"
  "time"  
  //"fmt"
)

func pingme (v int ) { 
 //message := make(chan string)
  s  := strconv.Itoa(v)
  v1 := "192.168.1." + s 
  c1 := exec.Command("ping","-n","1",v1)
  c2 := exec.Command("grep", "64")
  c2.Stdin, _ = c1.StdoutPipe()
  c2.Stdout = os.Stdout
  _ = c2.Start()
  _ = c1.Run()
  _ = c2.Wait()
  //<- message
}

func main() {
 
 for v := 100; v < 149; v++ {
         pingme(v)
 }

 
 time.Sleep(time.Second * 3)
}
