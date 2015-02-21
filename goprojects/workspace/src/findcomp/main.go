// Refer :http://stackoverflow.com/questions/10781516/how-to-pipe-several-commands
package main

import (
  "os"  
  "os/exec"
  "strconv"
//  "fmt"
)

func pingme (v int) { 
  s  := strconv.Itoa(v)
  v1 := "192.168.1." + s 
  c1 := exec.Command("ping","-n","1",v1)
  c2 := exec.Command("grep", "64")
  c2.Stdin, _ = c1.StdoutPipe()
  c2.Stdout = os.Stdout
  _ = c2.Start()
  _ = c1.Run()
  _ = c2.Wait()

//  out, err := cmd.Output()
//  if err != nil {
//	fmt.Println(err.Error())
//	return
// }
//	fmt.Print(string(out))
}

func main() {
  for v := 0; v < 116; v++ {
          pingme(v)
  }
}
