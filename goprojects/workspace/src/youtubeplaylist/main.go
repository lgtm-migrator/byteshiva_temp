package main

 import (
         "encoding/xml"
         "fmt"
         "io/ioutil"
         "net/http"
         "os"
         "strings"
 )

 type YouTubeEntries struct {
         XMLName   xml.Name `xml:"entry"`
         ID        string   `xml:"id"`
         Published string   `xml:"published"`
         Updated   string   `xml:"updated"`
         Category  string   `xml:"category"`
         Title     string   `xml:"title"`
         Content   string   `xml:"content"`
         Link      string   `xml:"link"`
         Author    string   `xml:"author"`
 }

 type YouTubeFeeds struct {
         XMLName        xml.Name         `xml:"feed"`
         YouTubeEntries []YouTubeEntries `xml:"entry"`
 }

 // modify here to add more data to be displayed
 func (data YouTubeEntries) String() string {
         dateToYMD := strings.Split(data.Published, "T")
         return fmt.Sprintf("\t%s - %s - [%s]\n", dateToYMD[0], data.Title, data.ID)
 }

 func main() {
         response, err := http.Get("http://gdata.youtube.com/feeds/api/playlists/RDXIzDDYrS4iE?v=2")

         if err != nil {
                 fmt.Println(err)
                 os.Exit(1)
         }

         defer response.Body.Close()

         XMLdata, err := ioutil.ReadAll(response.Body)

         if err != nil {
                 fmt.Println(err)
                 os.Exit(1)
         }

         var youtubeFeeds YouTubeFeeds

         xml.Unmarshal(XMLdata, &youtubeFeeds)
         fmt.Println(youtubeFeeds.YouTubeEntries)

         // alternate ways to display the list
         for k, v := range youtubeFeeds.YouTubeEntries {
                 fmt.Printf("\t%d - [%s]\n", k, v)
         }
 }