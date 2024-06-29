const para4 = React.createElement("div",{class:"para4 p"},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")

const anchor3 = React.createElement("a" ,{href : "#",class:"anchor1"} ,"CSS -- Styling the web")

const para3 = React.createElement("div", {class : "para3 p" } ,'HTML is the language that we use to structure the different part of our content and define what their meaning or purpose is.This topic theaches HTML in detail.')

const anchor2 = React.createElement("a" ,{href : "#",class:"anchor1"} ,"HTML -- Structuring the web" )

const para2 = React.createElement("div", {class : "para2 p" } ,'Provides a practical introduction to web development for coplete beginners.')

const anchor1 = React.createElement("a" ,{href : "#",class:"anchor1"} ," Getting started with the web" )

const para1 = React.createElement("div", {class : "para1 p" } ,'The following is list of all the topics we cover in the MDN learning area.')

const h1 = React.createElement("h1", {class : "h1"} ,"Topics covered")


const div = React.createElement("div", {class : "box"} ,[h1 , para1 ,anchor1, para2 ,anchor2, para3,anchor3,para4])
ReactDOM.render(div , document.getElementById("root"));