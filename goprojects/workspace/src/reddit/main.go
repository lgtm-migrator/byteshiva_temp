// @todo - make the  code more customized and  accept dynamic variable to reddit service 
package main

import (
    "io"
    "log"
    "net/http"
    "os"
    "fmt"
    "errors"
    "encoding/json"
)

type Response struct {
  Data struct {
      Children []struct {
          Data Item
      }
  }
}

type Item struct {
  Title string
  URL string
  Comments int `json:"num_comments"`
}

func Get(reddit string) ([]Item, error ) {
  url := fmt.Sprintf("http://reddit.com/r/%s.json", reddit)
  resp, err := http.Get(url)
  if err != nil {
    return nil, err
  }
  defer resp.Body.Close()
  if resp.StatusCode != http.StatusOK {
    return nil, errors.New(resp.Status)
  }
  r := new(Response)
  err = json.NewDecoder(resp.Body).Decode(r)
  if err != nil {
    return nil, err
  }
  items := make([]Item, len(r.Data.Children))
  for i, child := range r.Data.Children {
    items[i] = child.Data
  }
  return items, nil
}

func main() {
	resp, err := http.Get("http://reddit.com/r/golang.json")
	if err != nil {
		log.Fatal(err)
	}
	if resp.StatusCode != http.StatusOK {
		log.Fatal(resp.Status)
	}
	_, err = io.Copy(os.Stdout, resp.Body)
	if err != nil {
		log.Fatal(err)
	}
}
