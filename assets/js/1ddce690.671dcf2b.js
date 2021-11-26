"use strict";(self.webpackChunkyemyintoo_blog=self.webpackChunkyemyintoo_blog||[]).push([[722],{8403:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={slug:"First Day With Tauri",title:"Tauri",author:"Ye Myint Oo",tags:["Tauri"]},s=void 0,p={permalink:"/blog/First Day With Tauri",source:"@site/blog/2021-07-20-Tauri.md",title:"Tauri",description:"You can build native application which is more smaller, faster and more secure using HTML, JavaScript and CSS.",date:"2021-07-20T00:00:00.000Z",formattedDate:"July 20, 2021",tags:[{label:"Tauri",permalink:"/blog/tags/tauri"}],readingTime:1.7,truncated:!0,prevItem:{title:"Certificates",permalink:"/blog/Planed to achieve certificates"},nextItem:{title:"Welcome",permalink:"/blog/First Day of My Personal Blog"}},u=[{value:"Window Enviroment System Dependencies Setup",id:"window-enviroment-system-dependencies-setup",children:[]},{value:"Create React Project",id:"create-react-project",children:[]},{value:"App Publishing",id:"app-publishing",children:[]}],c={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can build native application which is more smaller, faster and more secure using HTML, JavaScript and CSS.\nAfter checked the creators' philosophy and features, I believe that it will be the replacement of ElectronJS."),(0,i.kt)("p",null,"Acutually, ",(0,i.kt)("a",{parentName:"p",href:"https://tauri.studio/en/docs/getting-started/intro"},(0,i.kt)("strong",{parentName:"a"},"Tauri Documentation"))," is good reference to start and every steps what need to do in there. You can check from offcial document, here I would like to make my own note.\nPlease note tips described in document"),(0,i.kt)("h3",{id:"window-enviroment-system-dependencies-setup"},"Window Enviroment System Dependencies Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"},(0,i.kt)("em",{parentName:"a"},"Microsoft Visual Studio C++ build tools"))," and install C++ Build Tools package"),(0,i.kt)("li",{parentName:"ol"},"Node.js and Package Manager"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://rustup.rs/"},(0,i.kt)("em",{parentName:"a"},"RustC"))," and Cargo Package"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section"},(0,i.kt)("em",{parentName:"a"},"WebView2"))," and use Evergreen Bootstrapper")),(0,i.kt)("h3",{id:"create-react-project"},"Create React Project"),(0,i.kt)("p",null,"I used 'create-react-app' to build sample web app and add Tauri CLI Package into my application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"create-react-app tauri-desktop\ncd tauri-desktop\nyarn add -D @tauri-apps/cli\n")),(0,i.kt)("p",null,"after added Taur CLI package , we need to change package.json file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'"scripts": {\n    "start": "react-scripts start",\n    "build": "react-scripts build",\n    "test": "react-scripts test",\n    "eject": "react-scripts eject",\n    "tauri": "tauri" // Add Tauri CLI Script\n},\n')),(0,i.kt)("p",null,"Start Tauri and Tauri will ask some information on console. You need to put whatever you want."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn tauri init\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'What is your app name?: tauri-desktop\nWhat should the window title be?: Happy Hours with Tauri\nWhere are your web assets (HTML/CSS/JS) located, relative to the "<current dir>/src-tauri" folder that will be created?: ../build\nWhat is the url of your dev server?: http://localhost:4200\n...\ndependency:npm-packages "@tauri-apps/cli" is already installed +781ms\nDone in 163.78s.\n')),(0,i.kt)("p",null,"Now Tauri CLI is succefully integrated with my application.\nWe can start Tauri Window"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn tauri dev\n")),(0,i.kt)("p",null,"It will take some time for first time run. Rust package manager is downloading packages."),(0,i.kt)("h3",{id:"app-publishing"},"App Publishing"),(0,i.kt)("p",null,"Now my application is ready to package. We need to run bundlers' build command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn tauri build\n")),(0,i.kt)("p",null,"This command will embed your web assets into a single binary with your Rust code. The binary itself will be located in target/release/","[app name]",", and installers will be located in target/release/bundle/"),(0,i.kt)("p",null,"Regards"))}d.isMDXComponent=!0}}]);